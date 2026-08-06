<?php

declare(strict_types=1);

/**
 * Adapter for fetching zaaktypen to use as select options.
 *
 * @package OWC_Mijn_Services
 * @author  Yard | Digital Agency
 * @since   NEXT
 */

namespace OWC\My_Services\Settings\Adapters;

/**
 * Exit when accessed directly.
 */
if ( ! defined( 'ABSPATH' )) {
	exit;
}

use DateTimeImmutable;
use Exception;
use OWC\My_Services\Services\LoggerService;
use OWC\ZGW\Contracts\Client;
use OWC\ZGW\Endpoints\Filter\ZaaktypenFilter;
use OWC\ZGW\Entities\Zaaktype;
use OWC\ZGW\Support\Collection;

/**
 * Adapter for fetching zaaktypen to use as select options.
 *
 * @since NEXT
 */
class ZaaktypeAdapter
{
	private const TRANSIENT_LIFETIME_IN_SECONDS = 86400; // 24 hours.

	private Client $client;
	private string $supplier_name;
	private bool $is_cron;

	public function __construct( Client $client, string $supplier_name, bool $is_cron = false )
	{
		$this->client        = $client;
		$this->supplier_name = $supplier_name;
		$this->is_cron       = $is_cron;
	}

	/**
	 * Builds the transient key used to cache the zaaktypen of a supplier.
	 *
	 * @since NEXT
	 */
	public static function transient_key( string $supplier_name ): string
	{
		return sprintf( 'owcms-zaaktypen-%s', strtolower( $supplier_name ) );
	}

	/**
	 * Builds the transient key used to cache the zaaktype URL migrations of a supplier.
	 *
	 * @since NEXT
	 */
	public static function migrations_transient_key( string $supplier_name ): string
	{
		return sprintf( 'owcms-zaaktypen-url-migrations-%s', strtolower( $supplier_name ) );
	}

	/**
	 * Returns a map of superseded zaaktype URL => current (latest version) zaaktype URL for a
	 * supplier, built the last time its zaaktypen were freshly fetched by handle(). Only reads
	 * the cache, never triggers a live fetch itself, so it's safe to call at render time.
	 *
	 * @since NEXT
	 *
	 * @return array<string, string>
	 */
	public static function url_migrations( string $supplier_name ): array
	{
		$migrations = get_transient( self::migrations_transient_key( $supplier_name ) );

		return is_array( $migrations ) ? $migrations : array();
	}

	/**
	 * Returns the zaaktypen of the supplier as a value => label map,
	 * ready to use as options for a select field.
	 *
	 * When called from a cron context, the transient is always refreshed rather than reused,
	 * so the cache stays warm and no site visitor or editor has to wait for the API request.
	 *
	 * @return array<string, string>
	 */
	public function handle(): array
	{
		$transient_key = self::transient_key( $this->supplier_name );
		$types         = get_transient( $transient_key );

		if ( ! $this->is_cron && is_array( $types ) && array() !== $types) {
			return $types;
		}

		try {
			$raw      = $this->fetch_types();
			$filtered = $this->filter_zaaktypen_by_version_date( $raw );
			$types    = $this->prepare_types( $filtered );
		} catch (Exception $e) {
			LoggerService::log( 'error', $e->getMessage() );

			return array();
		}

		if (array() === $types) {
			return array();
		}

		set_transient( $transient_key, $types, self::TRANSIENT_LIFETIME_IN_SECONDS );
		set_transient( self::migrations_transient_key( $this->supplier_name ), $this->build_url_migrations( $raw, $filtered ), self::TRANSIENT_LIFETIME_IN_SECONDS );

		return $types;
	}

	/**
	 * Maps every superseded zaaktype URL (any zaaktype sharing an omschrijving with a newer
	 * version) to the URL of its latest version, so filters that still reference an older
	 * version (e.g. a block's saved attributes) can be resolved to a currently valid zaaktype.
	 *
	 * @since NEXT
	 *
	 * @param Zaaktype[] $raw
	 * @param Zaaktype[] $filtered
	 * @return array<string, string>
	 */
	private function build_url_migrations( array $raw, array $filtered ): array
	{
		$latest_url_by_description = array();

		foreach ($filtered as $zaaktype) {
			$description = trim( (string) ( $zaaktype->omschrijving ?? '' ) );
			$url         = trim( (string) ( $zaaktype->url ?? '' ) );

			if ('' !== $description && '' !== $url) {
				$latest_url_by_description[ $description ] = $url;
			}
		}

		$migrations = array();

		foreach ($raw as $zaaktype) {
			$description = trim( (string) ( $zaaktype->omschrijving ?? '' ) );
			$url         = trim( (string) ( $zaaktype->url ?? '' ) );

			if ('' === $description || '' === $url) {
				continue;
			}

			$latest_url = $latest_url_by_description[ $description ] ?? '';

			if ('' !== $latest_url && $latest_url !== $url) {
				$migrations[ $url ] = $latest_url;
			}
		}

		return $migrations;
	}

	/**
	 * Filters an array of zaaktypen to ensure unique 'omschrijvingen' (description), keeping
	 * only the one with the latest 'versiedatum' (version date) per description. A zaaktype is
	 * versioned in the ZTC API by creating a new resource with the same omschrijving, so without
	 * this the block would offer several selectable entries that all represent the same zaaktype.
	 *
	 * @since NEXT
	 */
	private function filter_zaaktypen_by_version_date( array $zaaktypen ): array
	{
		$filtered = array();

		foreach ($zaaktypen as $zaaktype) {
			$description = trim( (string) ( $zaaktype->omschrijving ?? '' ) );

			if ('' === $description) {
				continue;
			}

			if ( ! isset( $filtered[ $description ] )) {
				$filtered[ $description ] = $zaaktype;

				continue;
			}

			if ($this->get_zaaktype_timestamp( $zaaktype ) > $this->get_zaaktype_timestamp( $filtered[ $description ] )) {
				$filtered[ $description ] = $zaaktype;
			}
		}

		return array_values( $filtered );
	}

	private function get_zaaktype_timestamp( Zaaktype $zaaktype ): int
	{
		if ( ! $zaaktype->versiedatum instanceof DateTimeImmutable) {
			return 0;
		}

		$timestamp = $zaaktype->versiedatum->getTimestamp();

		return false === $timestamp ? 0 : $timestamp;
	}

	private function fetch_types(): array
	{
		$page  = 1;
		$types = array();

		while ($page) {
			$result = $this->client->zaaktypen()->all( ( new ZaaktypenFilter() )->page( $page ) );
			$types  = array_merge( $types, (array) $result->all() );
			$page   = $result->pageMeta()->getNextPageNumber();
		}

		return $types;
	}

	/**
	 * @return array<string, string>
	 */
	private function prepare_types( array $types ): array
	{
		$prepared = (array) Collection::collect( $types )->map(
			function ( Zaaktype $zaaktype ) {
				$description   = (string) ( $zaaktype->omschrijving ?? '' );
				$url           = (string) ( $zaaktype->url ?? '' );
				$identificatie = (string) ( $zaaktype->identificatie ?? '' );

				if ('' === $description || '' === $url) {
					return null;
				}

				return array(
					'url'   => $url,
					'label' => '' !== $identificatie ? sprintf( '%s (%s)', $description, $identificatie ) : $description,
				);
			}
		)->filter(
			function ( $item ) {
				return null !== $item;
			}
		)->all();

		usort(
			$prepared,
			function ( $a, $b ) {
				return strcmp( $a['label'], $b['label'] );
			}
		);

		$options = array();

		foreach ($prepared as $item) {
			$options[ $item['url'] ] = $item['label'];
		}

		return $options;
	}
}
