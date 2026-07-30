<?php

declare(strict_types=1);

/**
 * Adapter for fetching informatieobjecttypen to use as select options.
 *
 * @package OWC_Mijn_Services
 * @author  Yard | Digital Agency
 * @since   0.12.0
 */

namespace OWC\My_Services\Settings\Adapters;

/**
 * Exit when accessed directly.
 */
if ( ! defined( 'ABSPATH' )) {
	exit;
}

use Exception;
use OWC\My_Services\Services\LoggerService;
use OWC\ZGW\Contracts\Client;
use OWC\ZGW\Endpoints\Filter\InformatieobjecttypenFilter;
use OWC\ZGW\Entities\Attributes\Confidentiality;
use OWC\ZGW\Entities\Informatieobjecttype;
use OWC\ZGW\Support\Collection;

/**
 * Adapter for fetching informatieobjecttypen to use as select options.
 *
 * @since 0.12.0
 */
class InformatieobjecttypeAdapter
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
	 * Builds the transient key used to cache the informatieobjecttypen of a supplier.
	 *
	 * @since 0.12.0
	 */
	public static function transient_key( string $supplier_name ): string
	{
		return sprintf( 'owcms-informatieobjecttypen-%s', strtolower( $supplier_name ) );
	}

	/**
	 * Returns the informatieobjecttypen of the supplier as a value => label map,
	 * ready to use as options for a CMB2 select field.
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
			$types = $this->prepare_types( $this->fetch_types() );
		} catch (Exception $e) {
			LoggerService::log( 'error', $e->getMessage() );

			return array();
		}

		if (array() === $types) {
			return array();
		}

		set_transient( $transient_key, $types, self::TRANSIENT_LIFETIME_IN_SECONDS );

		return $types;
	}

	private function fetch_types(): array
	{
		$page  = 1;
		$types = array();

		while ($page) {
			$result = $this->client->informatieobjecttypen()->all( ( new InformatieobjecttypenFilter() )->page( $page ) );
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
			function ( Informatieobjecttype $objecttype ) {
				$description = (string) ( $objecttype->omschrijving ?? '' );
				$url         = (string) ( $objecttype->url ?? '' );

				if ('' === $description || '' === $url) {
					return null;
				}

				$designation = $objecttype->vertrouwelijkheidaanduiding ?? null;
				$designation = $designation instanceof Confidentiality ? $designation->name : 'Aanduiding onbekend';

				return array(
					'url'   => $url,
					'label' => sprintf( '%s (%s)', $description, $designation ),
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
