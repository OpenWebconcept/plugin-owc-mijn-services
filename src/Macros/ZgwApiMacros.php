<?php

declare(strict_types=1);

/**
 * Plugin helpers.
 *
 * @package OWC_Mijn_Services
 * @author Yard | Digital Agency
 * @since 0.1.0
 */

namespace OWC\My_Services\Macros;

/**
 * Exit when accessed directly.
 */
if ( ! defined( 'ABSPATH' )) {
	exit;
}

use Exception;
use DateTimeImmutable;
use DateInterval;
use OWC\My_Services\Services\LoggerService;
use OWC\ZGW\Entities\Enkelvoudiginformatieobject;
use OWC\ZGW\Entities\Statustype;
use OWC\ZGW\Entities\Zaak;
use OWC\ZGW\Support\ZaakIdEncoderDecoder;

/**
 * Plugin helpers.
 *
 * @since 0.1.0
 */
class ZgwApiMacros
{
	/**
	 * Register macros.
	 */
	public static function register(): void
	{
		Zaak::macro(
			'permalink',
			function (): string {
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
			function ( string $format = 'j F Y' ): string {
				$startDate = $this->getValue( 'startdatum', null );

				if ( ! $startDate instanceof DateTimeImmutable) {
					return '';
				}

				return date_i18n( $format, $startDate->getTimestamp() );
			}
		);

		Zaak::macro(
			'registerDate',
			function ( string $format = 'j F Y' ): string {
				$register_date = $this->getValue( 'registratiedatum', null );

				if ( ! $register_date instanceof DateTimeImmutable) {
					return '';
				}

				return date_i18n( $format, $register_date->getTimestamp() );
			}
		);

		Zaak::macro(
			'endDate',
			function ( string $format = 'j F Y' ): ?string {
				$end_date = $this->getValue( 'einddatum', null );

				if ( ! $end_date instanceof DateTimeImmutable) {
					return null;
				}

				return date_i18n( $format, $end_date->getTimestamp() );
			}
		);

		Zaak::macro(
			'endDatePlanned',
			function ( string $format = 'j F Y' ): string {
				$end_date_planned = $this->getValue( 'einddatumGepland', null );

				if ( ! $end_date_planned instanceof DateTimeImmutable) {
					return '';
				}

				return date_i18n( $format, $end_date_planned->getTimestamp() );
			}
		);

		Enkelvoudiginformatieobject::macro(
			'downloadUrl',
			function ( string $zaak_identification, string $supplier ): string {
				if ($this->isClassified() || ! $this->hasFinalStatus()) {
					return '';
				}
				$identification = $this->identification();

				if ('' === $identification || '' === $zaak_identification || '' === $supplier) {
					return '';
				}

				return sprintf( '%s/zaak-download/%s/%s/%s', get_home_url(), $identification, ZaakIdEncoderDecoder::encode( $zaak_identification ), $supplier );
			}
		);

		Enkelvoudiginformatieobject::macro(
			'identification',
			function (): string {
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
			function (): string {
				$size = $this->getValue( 'bestandsomvang', 0 );

				return $size ? ( size_format( $size ) ?: '' ) : '';
			}
		);

		Enkelvoudiginformatieobject::macro(
			'formatType',
			function (): string {
				$mime_type = $this->getValue( 'formaat', '' );

				if ( ! is_string( $mime_type ) || 1 > strlen( $mime_type )) {
					return '';
				}

				$mimeMap = $GLOBALS['zgwApiClientManager']->container()->get( 'mime.mapping' );

				return is_array( $mimeMap ) ? ( $mimeMap[ $mime_type ] ?? '' ) : '';
			}
		);

		Enkelvoudiginformatieobject::macro(
			'creationDate',
			function (): string {
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
			function (): string {
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
			function (): string {
				$volgnummer = (string) $this->getValue( 'volgnummer', '' );

				return ltrim( $volgnummer, '0' );
			}
		);

		Zaak::macro(
			'result',
			function (): string {
				try {
					return $this->getValue( 'resultaat' )?->resultaattype?->getValue( 'toelichting', '' ) ?? '';
				} catch (Exception $e) {
					LoggerService::log_exception( $e, array( 'context' => "Unable to get 'Zaak resultaat'" ) );

					return __( 'Ophalen van het resultaat is mislukt', 'owc-mijn-services' );
				}
			}
		);

		/**
		 * @since NEXT
		 */
		Zaak::macro(
			'extensionReason',
			function (): string {
				try {
					return $this->getValue( 'verlenging' )['reden'] ?? '';
				} catch (Exception $e) {
					LoggerService::log_exception( $e, array( 'context' => "Unable to get 'Zaak verlenging reden'" ) );

					return '';
				}
			}
		);

		/**
		 * @since NEXT
		 */
		Zaak::macro(
			'extensionDuration',
			function (): string {
				try {
					return $this->getValue( 'verlenging' )['duur'] ?? '';
				} catch (Exception $e) {
					LoggerService::log_exception( $e, array( 'context' => "Unable to get 'Zaak verlenging duur'" ) );

					return '';
				}
			}
		);

		/**
		 * @since NEXT
		 */
		Zaak::macro(
			'extensionDurationFormatted',
			function (): string {
				try {
					$period = $this->extensionDuration();

					if ('' === $period) {
						return '';
					}

					$interval = new DateInterval( $period );

					$units = array(
						'y' => array( 'jaar', 'jaren' ),
						'm' => array( 'maand', 'maanden' ),
						'd' => array( 'dag', 'dagen' ),
						'h' => array( 'uur', 'uren' ),
						'i' => array( 'minuut', 'minuten' ),
					);

					$parts = array();

					foreach ( $units as $property => list( $singular, $plural ) ) {
						$value = $interval->{$property};

						if ( $value > 0 ) {
							$parts[] = sprintf(
								'%d %s',
								$value,
								1 === $value ? $singular : $plural
							);
						}
					}

					return implode( ', ', $parts );
				} catch (Exception $e) {
					LoggerService::log_exception( $e, array( 'context' => "Unable to get 'Zaak verlenging duur'" ) );

					return '';
				}
			}
		);

		/**
		 * @since NEXT
		 */
		Zaak::macro(
			'extensionFormatted',
			function (): string {
				$reason = $this->extensionReason();

				if ('' === $reason) {
					return '';
				}

				$duration = $this->extensionDurationFormatted();

				return '' === $duration ? $reason : sprintf( '%s (%s)', $reason, $duration );
			}
		);

		/**
		 * @since NEXT
		 */
		Zaak::macro(
			'suspensionReason',
			function (): string {
				try {
					return $this->getValue( 'opschorting' )['reden'] ?? '';
				} catch (Exception $e) {
					LoggerService::log_exception( $e, array( 'context' => "Unable to get 'Zaak opschorting reden'" ) );

					return '';
				}
			}
		);
	}
}
