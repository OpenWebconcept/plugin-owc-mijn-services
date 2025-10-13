<?php

declare(strict_types=1);

/**
 * Plugin helpers.
 *
 * @package OWC_Mijn_Services
 * @author Yard | Digital Agency
 * @since 1.0.0
 */

namespace OWC\My_Services\Macros;

/**
 * Exit when accessed directly.
 */
if ( ! defined( 'ABSPATH' )) {
	exit;
}

use DateTimeImmutable;
use OWC\ZGW\Entities\Enkelvoudiginformatieobject;
use OWC\ZGW\Entities\Statustype;
use OWC\ZGW\Entities\Zaak;
use OWC\ZGW\Support\ZaakIdEncoderDecoder;

class ZgwApiMacros
{
	/**
	 * Register macros.
	 *
	 * @since 1.0.0
	 */
	public static function register(): void
	{
		Zaak::macro(
			'permalink',
			function () {
				$identification = $this->getValue( 'identificatie', '' );

				if ('' === $identification) {
					return '';
				}

				$supplier = $this->getValue( 'supplier', '' );

				if ('' === $supplier) {
					return sprintf( '%s/zaak/%s', get_home_url(), ZaakIdEncoderDecoder::encode( $identification ) );
				}

				return sprintf( '%s/zaak/%s/%s', get_home_url(), ZaakIdEncoderDecoder::encode( $identification ), $supplier );
			}
		);

		Zaak::macro(
			'startDate',
			function (string $format = 'j F Y' ) {
				$startDate = $this->getValue( 'startdatum', null );

				if ( ! $startDate instanceof DateTimeImmutable) {
					return '';
				}

				return date_i18n( $format, $startDate->getTimestamp() );
			}
		);

		Zaak::macro(
			'registerDate',
			function (string $format = 'j F Y' ) {
				$registerDate = $this->getValue( 'registratiedatum', null );

				if ( ! $registerDate instanceof DateTimeImmutable) {
					return '';
				}

				return date_i18n( $format, $registerDate->getTimestamp() );
			}
		);

		Zaak::macro(
			'endDate',
			function (string $format = 'j F Y' ) {
				$endDate = $this->getValue( 'einddatum', null );

				if ( ! $endDate instanceof DateTimeImmutable) {
					return '';
				}

				return date_i18n( $format, $endDate->getTimestamp() );
			}
		);

		Zaak::macro(
			'endDatePlanned',
			function (string $format = 'j F Y' ) {
				$endDatePlanned = $this->getValue( 'einddatumGepland', null );

				if ( ! $endDatePlanned instanceof DateTimeImmutable) {
					return '';
				}

				return date_i18n( $format, $endDatePlanned->getTimestamp() );
			}
		);

		Enkelvoudiginformatieobject::macro(
			'downloadUrl',
			function (string $zaakIdentification, string $supplier ) {
				if ($this->isClassified() || ! $this->hasFinalStatus()) {
					// return ''; // Is disabled for testing purposes.
				}
				$identification = $this->identification();

				if ('' === $identification || '' === $zaakIdentification || '' === $supplier) {
					return '';
				}

				return sprintf( '%s/zaak-download/%s/%s/%s', get_home_url(), $identification, ZaakIdEncoderDecoder::encode( $zaakIdentification ), $supplier );
			}
		);

		Enkelvoudiginformatieobject::macro(
			'identification',
			function () {
				$url = $this->getValue( 'url', '' );

				if ( ! is_string( $url ) || '' === $url) {
					return '';
				}

				$parts = explode( '/', $url );

				return end( $parts ) ?: '';
			}
		);

		Enkelvoudiginformatieobject::macro(
			'sizeFormatted',
			function () {
				$size = $this->getValue( 'bestandsomvang', 0 );

				return $size ? ( size_format( $size ) ?: '' ) : '';
			}
		);

		Enkelvoudiginformatieobject::macro(
			'formatType',
			function () {
				$mimeType = $this->getValue( 'formaat', '' );

				if ( ! is_string( $mimeType ) || 1 > strlen( $mimeType )) {
					return '';
				}

				$mimeMap = $GLOBALS['zgwApiClientManager']->container()->get( 'mime.mapping' );

				return is_array( $mimeMap ) ? ( $mimeMap[ $mimeType ] ?? '' ) : '';
			}
		);

		Enkelvoudiginformatieobject::macro(
			'creationDate',
			function () {
				$date = $this->getValue( 'creatiedatum', null );

				if ( ! $date instanceof DateTimeImmutable) {
					return '';
				}

				try {
					return $date->format( 'd-m-Y' );
				} catch (Exception $e) {
					return '';
				}
			}
		);

		Enkelvoudiginformatieobject::macro(
			'formattedMetaData',
			function () {
				$meta = array_filter(
					array(
						$this->formatType(),
						$this->sizeFormatted(),
						$this->creationDate(),
					)
				);

				if (empty( $meta )) {
					return '';
				}

				return implode( ', ', $meta );
			}
		);

		Statustype::macro(
			'volgnummer',
			function () {
				$volgnummer = (string) $this->getValue( 'volgnummer', '' );

				return ltrim( $volgnummer, '0' );
			}
		);
	}
}
