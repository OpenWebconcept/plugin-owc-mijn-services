<?php

declare(strict_types=1);

/**
 * Start dates per zaaktype from which zaken are shown.
 *
 * @package OWC_Mijn_Services
 * @author  Yard | Digital Agency
 * @since   0.21.0
 */

namespace OWC\My_Services\Settings;

/**
 * Exit when accessed directly.
 */
if ( ! defined( 'ABSPATH' )) {
	exit;
}

use DateTimeImmutable;
use OWC\My_Services\ContainerResolver;
use OWC\My_Services\Settings\Adapters\ZaaktypeAdapter;
use OWC\ZGW\Entities\Zaak;

/**
 * Start dates per zaaktype from which zaken are shown.
 *
 * Built from the repeatable 'Startdatum per zaaktype' setting, where every row holds a
 * zaaktype URL, a 'Y-m-d' date and, resolved on save, the zaaktype's identificatie and
 * supplier.
 *
 * The setting acts as an allowlist per supplier selected under 'Zaaktypefiltering ondersteunde
 * leveranciers': as soon as at least one row is configured for such a supplier, only zaken of its
 * configured zaaktypen, started on or after the configured date, are shown, in every 'Mijn zaken'
 * overview, on the zaak detail page and for downloads. All zaken of suppliers without rows, and
 * of suppliers without zaaktype filtering, are shown.
 *
 * @since 0.21.0
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
	 * Names of the suppliers the allowlist applies to.
	 *
	 * @var string[]
	 */
	private array $filtering_suppliers;

	/**
	 * Per supplier: the result of start_dates().
	 *
	 * @var array<string, array<string, DateTimeImmutable>>
	 */
	private array $start_dates_cache = array();

	/**
	 * Per supplier: the cached zaaktype URL => identificatie map.
	 *
	 * @var array<string, array<string, string>>
	 */
	private array $url_identificaties_cache = array();

	/**
	 * @param array<int, array{url: string, identificatie: string, supplier: string, date: string}> $entries
	 * @param string[]                                                                              $filtering_suppliers Suppliers selected under 'Zaaktypefiltering ondersteunde leveranciers'.
	 */
	public function __construct( array $entries, array $filtering_suppliers = array() )
	{
		$this->entries             = $entries;
		$this->filtering_suppliers = array_values( array_map( 'strval', $filtering_suppliers ) );
	}

	/**
	 * Returns the shared instance built from the settings.
	 */
	public static function resolve(): self
	{
		$start_dates = ContainerResolver::make()->get( 'display.zaaktype-start-dates' );

		return $start_dates instanceof self ? $start_dates : new self( array() );
	}

	/**
	 * Builds an instance from the raw setting value: a list of rows. Rows without a zaaktype or
	 * with an invalid date are skipped.
	 *
	 * @param mixed    $rows                Raw setting value.
	 * @param string[] $filtering_suppliers Suppliers selected under 'Zaaktypefiltering ondersteunde leveranciers'.
	 */
	public static function from_setting( mixed $rows, array $filtering_suppliers ): self
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

		return new self( $entries, $filtering_suppliers );
	}

	/**
	 * Removes rows that configure a zaaktype that's already configured by another row, so each
	 * zaaktype has a single start date. Rows referencing an older and the latest version of the
	 * same zaaktype count as duplicates too. Of the duplicates, the row with the earliest valid
	 * date is kept, at the position of the first one, so deduplicating never hides more zaken.
	 *
	 * @since 0.21.0
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
	 * Whether the zaken of a supplier are restricted to the configured zaaktypen and start dates:
	 * only when zaaktype filtering is enabled for the supplier and at least one row belongs to it.
	 * Zaken of other suppliers are never filtered on zaaktype by this setting.
	 *
	 * A row of which the supplier is unknown, because its zaaktype couldn't be resolved, restricts
	 * every filtering supplier, as it can't be ruled out it belongs to it: better to show too few
	 * zaken than too many.
	 */
	public function applies_to( string $supplier_name ): bool
	{
		if ( ! in_array( $supplier_name, $this->filtering_suppliers, true )) {
			return false;
		}

		foreach ($this->entries as $entry) {
			$owner = $this->entry_supplier( $entry );

			if (null === $owner || $supplier_name === $owner) {
				return true;
			}
		}

		return false;
	}

	/**
	 * Returns the configured start date of every zaaktype of a supplier, keyed on the zaaktype
	 * identificatie, which is shared by all versions of a zaaktype.
	 *
	 * Note that PHP turns numeric identificaties into integer keys; use identificaties() for a
	 * list of strings.
	 *
	 * @return array<string, DateTimeImmutable> identificatie => start date.
	 */
	public function start_dates( string $supplier_name ): array
	{
		if (isset( $this->start_dates_cache[ $supplier_name ] )) {
			return $this->start_dates_cache[ $supplier_name ];
		}

		$dates = array();

		foreach ($this->dates_by_identificatie( $supplier_name ) as $identificatie => $date) {
			$parsed = DateTimeImmutable::createFromFormat( '!' . self::DATE_FORMAT, $date );

			if ($parsed instanceof DateTimeImmutable) {
				$dates[ $identificatie ] = $parsed;
			}
		}

		$this->start_dates_cache[ $supplier_name ] = $dates;

		return $dates;
	}

	/**
	 * Returns the identificaties of the zaaktypen of a supplier that zaken may be shown of.
	 *
	 * @return string[]
	 */
	public function identificaties( string $supplier_name ): array
	{
		return array_map( 'strval', array_keys( $this->start_dates( $supplier_name ) ) );
	}

	/**
	 * Returns the URLs of every known version of the zaaktypen of a supplier that zaken may be
	 * shown of, or null when they can't be determined because the zaaktypen cache is empty.
	 *
	 * @return string[]|null
	 */
	public function allowed_urls( string $supplier_name ): ?array
	{
		$url_identificaties = $this->url_identificaties( $supplier_name );

		if (array() === $url_identificaties) {
			return null;
		}

		$allowed = $this->identificaties( $supplier_name );

		return array_keys(
			array_filter(
				$url_identificaties,
				fn ( $identificatie ) => in_array( (string) $identificatie, $allowed, true )
			)
		);
	}

	/**
	 * Returns the zaaktype URLs of the rows whose identificatie couldn't be resolved on save.
	 *
	 * @return string[]
	 */
	public function unresolved_urls(): array
	{
		$urls = array();

		foreach ($this->entries as $entry) {
			if ('' === $entry['identificatie']) {
				$urls[] = $entry['url'];
			}
		}

		return array_values( array_unique( $urls ) );
	}

	/**
	 * Whether a zaak may be shown: always when the allowlist doesn't apply to the supplier (see
	 * applies_to()), otherwise only when its zaaktype is configured for the supplier and it
	 * started on or after the configured date.
	 */
	public function allows_zaak( Zaak $zaak, string $supplier_name ): bool
	{
		if ( ! $this->applies_to( $supplier_name )) {
			return true;
		}

		$dates         = $this->start_dates( $supplier_name );
		$identificatie = ZaaktypeAdapter::zaak_zaaktype_identificatie( $zaak, $this->url_identificaties( $supplier_name ) );

		return isset( $dates[ $identificatie ] ) && self::zaak_started_on_or_after( $zaak, $dates[ $identificatie ] );
	}

	/**
	 * Zaken without a startdatum are kept, as the date they started is unknown.
	 */
	public static function zaak_started_on_or_after( Zaak $zaak, DateTimeImmutable $start_date ): bool
	{
		$started = $zaak->startdatum;

		// 'Y-m-d' strings compare chronologically, and ignore any time or timezone.
		return ! $started instanceof DateTimeImmutable || $started->format( self::DATE_FORMAT ) >= $start_date->format( self::DATE_FORMAT );
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
		$dates = array();

		foreach ($this->entries as $entry) {
			$owner = $this->entry_supplier( $entry );

			if (null !== $owner && $supplier_name !== $owner) {
				continue;
			}

			$identificatie = '' !== $entry['identificatie']
				? $entry['identificatie']
				: (string) ( $this->url_identificaties( $supplier_name )[ $entry['url'] ] ?? '' );

			if ('' !== $identificatie) {
				$dates = self::add_earliest( $dates, $identificatie, $entry['date'] );
			}
		}

		return $dates;
	}

	/**
	 * Returns the supplier a row belongs to: the one saved with it, otherwise the filtering
	 * supplier whose cached zaaktypen contain its zaaktype URL, or null when it's unknown.
	 *
	 * @param array{url: string, identificatie: string, supplier: string, date: string} $entry
	 */
	private function entry_supplier( array $entry ): ?string
	{
		if ('' !== $entry['supplier']) {
			return $entry['supplier'];
		}

		foreach ($this->filtering_suppliers as $filtering_supplier) {
			if (isset( $this->url_identificaties( (string) $filtering_supplier )[ $entry['url'] ] )) {
				return (string) $filtering_supplier;
			}
		}

		return null;
	}

	/**
	 * The cached zaaktype URL => identificatie map of a supplier, read once per instance.
	 *
	 * @return array<string, string>
	 */
	private function url_identificaties( string $supplier_name ): array
	{
		return $this->url_identificaties_cache[ $supplier_name ] ??= ZaaktypeAdapter::url_identificaties( $supplier_name );
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
