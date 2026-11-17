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
 * @since NEXT
 */
class ZaaktypeStartDateIdentities
{
	private const OPTION_NAME = 'owc_mijn_services_settings';

	/**
	 * Stores the identificatie and supplier with every row that has a zaaktype but no
	 * identificatie, as far as they can be resolved now.
	 */
	public function backfill(): void
	{
		$options = get_option( self::OPTION_NAME, array() );
		$rows    = is_array( $options ) ? ( $options[ OptionsPageRegistrar::ZAAKTYPE_START_DATES_FIELD_ID ] ?? null ) : null;

		if ( ! is_array( $rows )) {
			return;
		}

		$catalog = new ZaaktypeCatalog();
		$changed = false;

		foreach ($rows as $index => $row) {
			if ( ! is_array( $row )) {
				continue;
			}

			$url           = trim( (string) ( $row[ ZaaktypeStartDates::KEY_ZAAKTYPE ] ?? '' ) );
			$identificatie = trim( (string) ( $row[ ZaaktypeStartDates::KEY_IDENTIFICATIE ] ?? '' ) );

			if ('' === $url || '' !== $identificatie) {
				continue;
			}

			$identity = $catalog->identify( $url );

			if (null === $identity) {
				continue;
			}

			$rows[ $index ][ ZaaktypeStartDates::KEY_IDENTIFICATIE ] = $identity['identificatie'];
			$rows[ $index ][ ZaaktypeStartDates::KEY_SUPPLIER ]      = $identity['supplier'];
			$changed = true;
		}

		if ( ! $changed) {
			return;
		}

		$options[ OptionsPageRegistrar::ZAAKTYPE_START_DATES_FIELD_ID ] = $rows;

		update_option( self::OPTION_NAME, $options );
	}
}
