<?php

declare(strict_types=1);

/**
 * Resolves the identity of 'Startdatum per zaaktype' rows that couldn't be resolved on save.
 *
 * @package OWC_Mijn_Services
 * @author  Yard | Digital Agency
 * @since   NEXT
 */

namespace OWC\My_Services\Settings;

/**
 * Exit when accessed directly.
 */
if ( ! defined( 'ABSPATH' )) {
	exit;
}

/**
 * Rows of the 'Startdatum per zaaktype' setting are saved with the identificatie and supplier
 * of their zaaktype. When those couldn't be resolved on save, e.g. because the ZTC was
 * unreachable, such a row restricts the zaken of every filtering supplier. This resolves them
 * afterwards, once the zaaktypen are available again, so it heals without a manual save.
 *
 * @since 0.23.0
 */
class ZaaktypeStartDateIdentities
{
	private const OPTION_NAME = 'owc_mijn_services_settings';

	/**
	 * How often the write is retried when the settings changed while merging.
	 */
	private const MAX_ATTEMPTS = 3;

	/**
	 * Stores the identificatie and supplier with every row that has a zaaktype but no
	 * identificatie, as far as they can be resolved now.
	 *
	 * Resolving can take live ZTC requests, during which an administrator may save the settings.
	 * So the identities are resolved first, and only then merged into the settings as they are
	 * stored at that moment, into the rows that still lack them. The write only succeeds when
	 * the settings didn't change since they were read for merging (compare-and-swap), otherwise
	 * it's retried on the then current settings.
	 */
	public function backfill(): void
	{
		$identities = $this->resolve_identities( $this->unresolved_urls( $this->read_options()['options'] ) );

		if (array() === $identities) {
			return;
		}

		for ($attempt = 0; $attempt < self::MAX_ATTEMPTS; $attempt++) {
			$stored = $this->read_options();

			if (null === $stored['raw']) {
				return;
			}

			$merged = $this->merge_identities( $stored['options'], $identities );

			if (null === $merged) {
				return; // Nothing (left) to resolve.
			}

			if ($this->compare_and_swap( $stored['raw'], $merged )) {
				return;
			}
		}
	}

	/**
	 * Reads the settings straight from the database, bypassing the object cache, so they're
	 * compared to exactly what is stored.
	 *
	 * @return array{raw: string|null, options: mixed}
	 */
	private function read_options(): array
	{
		global $wpdb;

		// phpcs:ignore WordPress.DB.DirectDatabaseQuery -- Deliberately uncached, see above.
		$raw = $wpdb->get_var( $wpdb->prepare( "SELECT option_value FROM {$wpdb->options} WHERE option_name = %s LIMIT 1", self::OPTION_NAME ) );

		return array(
			'raw'     => is_string( $raw ) ? $raw : null,
			'options' => is_string( $raw ) ? maybe_unserialize( $raw ) : array(),
		);
	}

	/**
	 * Returns the zaaktype URLs of the rows that have a zaaktype but no identificatie.
	 *
	 * @return string[]
	 */
	private function unresolved_urls( mixed $options ): array
	{
		$urls = array();

		foreach ($this->rows( $options ) as $row) {
			$url = $this->row_value( $row, ZaaktypeStartDates::KEY_ZAAKTYPE );

			if ('' !== $url && '' === $this->row_value( $row, ZaaktypeStartDates::KEY_IDENTIFICATIE )) {
				$urls[] = $url;
			}
		}

		return array_values( array_unique( $urls ) );
	}

	/**
	 * @param string[] $urls
	 * @return array<string, array{supplier: string, identificatie: string}> url => identity, of the URLs that could be resolved.
	 */
	private function resolve_identities( array $urls ): array
	{
		if (array() === $urls) {
			return array();
		}

		$catalog    = new ZaaktypeCatalog();
		$identities = array();

		foreach ($urls as $url) {
			$identity = $catalog->identify( $url );

			if (null !== $identity) {
				$identities[ $url ] = $identity;
			}
		}

		return $identities;
	}

	/**
	 * Stores the resolved identities with the rows that still have that zaaktype and still lack
	 * an identificatie, leaving every other row and setting as it is.
	 *
	 * @param mixed                                                         $options    The stored settings.
	 * @param array<string, array{supplier: string, identificatie: string}> $identities
	 * @return array<string, mixed>|null The updated settings, or null when nothing changed.
	 */
	private function merge_identities( mixed $options, array $identities ): ?array
	{
		$rows    = $this->rows( $options );
		$changed = false;

		foreach ($rows as $index => $row) {
			$url = $this->row_value( $row, ZaaktypeStartDates::KEY_ZAAKTYPE );

			if ( ! isset( $identities[ $url ] ) || '' !== $this->row_value( $row, ZaaktypeStartDates::KEY_IDENTIFICATIE )) {
				continue;
			}

			$rows[ $index ][ ZaaktypeStartDates::KEY_IDENTIFICATIE ] = $identities[ $url ]['identificatie'];
			$rows[ $index ][ ZaaktypeStartDates::KEY_SUPPLIER ]      = $identities[ $url ]['supplier'];
			$changed = true;
		}

		if ( ! $changed) {
			return null;
		}

		$options[ OptionsPageRegistrar::ZAAKTYPE_START_DATES_FIELD_ID ] = $rows;

		return $options;
	}

	/**
	 * Writes the settings only when the stored value still equals what they were merged into.
	 *
	 * @param string               $expected_raw The serialized settings as read for merging.
	 * @param array<string, mixed> $options      The merged settings.
	 */
	private function compare_and_swap( string $expected_raw, array $options ): bool
	{
		global $wpdb;

		// phpcs:ignore WordPress.DB.DirectDatabaseQuery -- update_option() can't make the write conditional.
		$updated = $wpdb->query(
			$wpdb->prepare(
				"UPDATE {$wpdb->options} SET option_value = %s WHERE option_name = %s AND CAST(option_value AS BINARY) = CAST(%s AS BINARY)",
				maybe_serialize( $options ),
				self::OPTION_NAME,
				$expected_raw
			)
		);

		if (1 !== $updated) {
			return false;
		}

		// The write bypassed update_option(), so drop the cached copies of the option.
		wp_cache_delete( self::OPTION_NAME, 'options' );
		wp_cache_delete( 'alloptions', 'options' );

		return true;
	}

	/**
	 * Returns the raw rows, unfiltered, so writing them back leaves every row in place.
	 *
	 * @return array<int|string, mixed>
	 */
	private function rows( mixed $options ): array
	{
		$rows = is_array( $options ) ? ( $options[ OptionsPageRegistrar::ZAAKTYPE_START_DATES_FIELD_ID ] ?? null ) : null;

		return is_array( $rows ) ? $rows : array();
	}

	private function row_value( mixed $row, string $key ): string
	{
		return is_array( $row ) ? trim( (string) ( $row[ $key ] ?? '' ) ) : '';
	}
}
