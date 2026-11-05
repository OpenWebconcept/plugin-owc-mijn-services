<?php

declare(strict_types=1);

/**
 * Start dates per zaaktype from which zaken are shown.
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

use DateTimeImmutable;
use OWC\My_Services\Settings\Adapters\ZaaktypeAdapter;

/**
 * Start dates per zaaktype from which zaken are shown.
 *
 * Built from the repeatable 'Startdatum per zaaktype' setting, where every row holds a
 * zaaktype URL, a 'Y-m-d' date and, resolved on save, the zaaktype's identificatie and
 * supplier. Zaken of that zaaktype with an earlier startdatum are not shown in the
 * 'Mijn zaken' overview.
 *
 * @since NEXT
 */
class ZaaktypeStartDates
{
	public const DATE_FORMAT = 'Y-m-d';

	/**
	 * Row keys of the setting.
	 */
	public const KEY_ZAAKTYPE      = 'zaaktype';
	public const KEY_START_DATE    = 'startdatum';
	public const KEY_IDENTIFICATIE = 'identificatie';
	public const KEY_SUPPLIER      = 'leverancier';

	/**
	 * @var array<int, array{url: string, identificatie: string, supplier: string, date: string}>
	 */
	private array $entries;

	/**
	 * @param array<int, array{url: string, identificatie: string, supplier: string, date: string}> $entries
	 */
	public function __construct( array $entries )
	{
		$this->entries = $entries;
	}

	/**
	 * Builds an instance from the raw setting value: a list of rows. Rows without a zaaktype or
	 * with an invalid date are skipped.
	 */
	public static function from_setting( mixed $rows ): self
	{
		$entries = array();

		foreach (is_array( $rows ) ? $rows : array() as $row) {
			if ( ! is_array( $row )) {
				continue;
			}

			$url  = trim( (string) ( $row[ self::KEY_ZAAKTYPE ] ?? '' ) );
			$date = self::normalize_date( (string) ( $row[ self::KEY_START_DATE ] ?? '' ) );

			if ('' === $url || null === $date) {
				continue;
			}

			$entries[] = array(
				'url'           => $url,
				'identificatie' => trim( (string) ( $row[ self::KEY_IDENTIFICATIE ] ?? '' ) ),
				'supplier'      => trim( (string) ( $row[ self::KEY_SUPPLIER ] ?? '' ) ),
				'date'          => $date,
			);
		}

		return new self( $entries );
	}

	/**
	 * Removes rows that configure a zaaktype that's already configured by another row, so each
	 * zaaktype has a single start date. Rows referencing an older and the latest version of the
	 * same zaaktype count as duplicates too. Of the duplicates, the row with the earliest valid
	 * date is kept, at the position of the first one, so deduplicating never hides more zaken.
	 *
	 * @since NEXT
	 *
	 * @param mixed                 $rows       Raw setting value: a list of `zaaktype`/`startdatum` rows.
	 * @param array<string, string> $keys       Zaaktype URL => key shared by all versions of that
	 *                                          zaaktype, e.g. 'supplier|identificatie'. URLs without
	 *                                          a key are deduplicated on the URL itself.
	 * @return array{rows: array<int, array<string, mixed>>, removed: int}
	 */
	public static function deduplicate_rows( mixed $rows, array $keys ): array
	{
		$kept    = array();
		$index   = array(); // Zaaktype key => position in $kept.
		$removed = 0;

		foreach (is_array( $rows ) ? $rows : array() as $row) {
			$url = is_array( $row ) ? trim( (string) ( $row[ self::KEY_ZAAKTYPE ] ?? '' ) ) : '';

			if ('' === $url) {
				$kept[] = $row;

				continue;
			}

			$key = $keys[ $url ] ?? $url;

			if ( ! isset( $index[ $key ] )) {
				$index[ $key ] = count( $kept );
				$kept[]        = $row;

				continue;
			}

			++$removed;

			$date          = self::normalize_date( (string) ( $row[ self::KEY_START_DATE ] ?? '' ) );
			$existing_date = self::normalize_date( (string) ( $kept[ $index[ $key ] ][ self::KEY_START_DATE ] ?? '' ) );

			if (null !== $date && ( null === $existing_date || $date < $existing_date )) {
				$kept[ $index[ $key ] ] = $row;
			}
		}

		return array(
			'rows'    => $kept,
			'removed' => $removed,
		);
	}

	/**
	 * Returns the start date for a zaaktype identificatie, or null when none is configured.
	 * The identificatie is shared by all versions of a zaaktype, so a date saved for any version
	 * applies to all of them, including versions created after the date was saved.
	 */
	public function for_identificatie( string $supplier_name, string $identificatie ): ?DateTimeImmutable
	{
		$date = $this->dates_by_identificatie( $supplier_name )[ $identificatie ] ?? null;

		if (null === $date) {
			return null;
		}

		$parsed = DateTimeImmutable::createFromFormat( '!' . self::DATE_FORMAT, $date );

		return $parsed instanceof DateTimeImmutable ? $parsed : null;
	}

	/**
	 * Re-keys the configured dates on the zaaktype identificaties of a supplier.
	 *
	 * Uses the identificatie and supplier saved with each row, so it neither depends on the
	 * zaaktypen cache nor on the saved zaaktype version still existing in the ZTC. Only rows
	 * saved without an identificatie (it couldn't be resolved at the time) fall back to the
	 * cached URL => identificatie map.
	 *
	 * @return array<string, string> identificatie => 'Y-m-d' date.
	 */
	private function dates_by_identificatie( string $supplier_name ): array
	{
		$url_identificaties = null;
		$dates              = array();

		foreach ($this->entries as $entry) {
			if ('' !== $entry['identificatie']) {
				if ('' === $entry['supplier'] || $supplier_name === $entry['supplier']) {
					$dates = self::add_earliest( $dates, $entry['identificatie'], $entry['date'] );
				}

				continue;
			}

			$url_identificaties ??= ZaaktypeAdapter::url_identificaties( $supplier_name );

			if (isset( $url_identificaties[ $entry['url'] ] )) {
				$dates = self::add_earliest( $dates, $url_identificaties[ $entry['url'] ], $entry['date'] );
			}
		}

		return $dates;
	}

	/**
	 * @param array<string, string> $dates
	 * @return array<string, string>
	 */
	private static function add_earliest( array $dates, string $key, string $date ): array
	{
		// 'Y-m-d' strings compare chronologically.
		if ( ! isset( $dates[ $key ] ) || $date < $dates[ $key ]) {
			$dates[ $key ] = $date;
		}

		return $dates;
	}

	private static function normalize_date( string $date ): ?string
	{
		$parsed = DateTimeImmutable::createFromFormat( '!' . self::DATE_FORMAT, trim( $date ) );

		if ( ! $parsed instanceof DateTimeImmutable || $parsed->format( self::DATE_FORMAT ) !== trim( $date )) {
			return null;
		}

		return $parsed->format( self::DATE_FORMAT );
	}
}
