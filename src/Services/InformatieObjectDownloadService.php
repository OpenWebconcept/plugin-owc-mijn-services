<?php

declare(strict_types=1);

/**
 * InformatieObject download service.
 *
 * @package OWC_Mijn_Services
 * @author  Yard | Digital Agency
 * @since   0.1.0
 */

namespace OWC\My_Services\Services;

/**
 * Exit when accessed directly.
 */
if ( ! defined( 'ABSPATH' )) {
	exit;
}

use Exception;
use OWC\My_Services\ContainerResolver;
use OWC\My_Services\Auth\DigiD;
use OWC\My_Services\Auth\eHerkenning;
use OWC\My_Services\Providers\BlockServiceProvider;
use OWC\My_Services\Traits\Supplier;
use OWC\ZGW\Contracts\Client;
use OWC\ZGW\Endpoints\Filter\ZakenFilter;
use OWC\ZGW\Entities\Zaak;
use OWC\ZGW\Support\ZaakIdEncoderDecoder;
use OWC\My_Services\Services\LoggerService;

use function OWC\ZGW\apiClientManager;

/**
 * InformatieObject download service.
 *
 * @since 0.1.0
 */
class InformatieObjectDownloadService
{
	use Supplier;

	protected Client $client;
	protected string $bsn;
	protected string $kvk;

	public function download_file_from_request(): string
	{
		$download_identification = (string) get_query_var( BlockServiceProvider::QUERY_VAR_ZAAK_DOWNLOAD_IDENTIFICATION );
		$identification          = (string) get_query_var( BlockServiceProvider::QUERY_VAR_ZAAK_IDENTIFICATION );
		$supplier                = (string) get_query_var( BlockServiceProvider::QUERY_VAR_SUPPLIER );

		if ( ! $download_identification || ! $identification || ! $supplier) {
			return '';
		}

		try {
			$this->bsn = DigiD::make()->bsn();
			$this->kvk = eHerkenning::make()->kvk();

			if ('' === $this->bsn && '' === $this->kvk) {
				throw new Exception( 'No BSN or KVK found while attempting to download file.' );
			}
		} catch (Exception $e) {
			LoggerService::log_exception( $e, array( 'context' => 'Error retrieving authentication details for file download.' ) );

			return '';
		}

		$this->client = apiClientManager()->getClient( $this->supplier_key_to_name( $supplier ) );

		$identification = ZaakIdEncoderDecoder::decode( $identification );
		$zaak           = $this->validate_zaak( $identification );

		if ( ! $zaak instanceof Zaak) {
			return '';
		}

		try {
			$response = $this->client->enkelvoudiginformatieobjecten()->download( $download_identification );
		} catch (Exception $e) {
			LoggerService::log_exception( $e, array( 'context' => "Error downloading informatieobject with identification '{$download_identification}' for zaak '{$identification}' from supplier '{$supplier}'" ) );

			return '';
		}

		$fileWriteResult = @file_put_contents( $download_identification, $response->getBody() );

		// Check if the file was written unsuccessfully.
		if (false === $fileWriteResult || ! is_int( $fileWriteResult ) || 0 >= $fileWriteResult) {
			LoggerService::log(
				'error',
				sprintf(
					'OWC\My_Services: %s',
					'Informationobject download failed, could not write the file to disk.'
				)
			);

			return '';
		}

		// Check if the file does not exist or is not readable.
		if ( ! file_exists( $download_identification ) || ! is_readable( $download_identification )) {
			LoggerService::log(
				'error',
				sprintf(
					'OWC\My_Services: %s',
					'Informationobject download failed, the file does not exist or is not readable.'
				)
			);

			return '';
		}

		return $download_identification;
	}

	protected function validate_zaak(string $identification ): ?Zaak
	{
		try {
			$filter = new ZakenFilter();
			$filter->add( 'identificatie', $identification );
			$authentication_filter_applied = false;

			if ('' !== $this->bsn) {
				$filter->byBsn( $this->bsn );
				$authentication_filter_applied = true;
			}

			if ('' !== $this->kvk && ! ContainerResolver::make()->get( 'display.disable-kvk-filtering' )) {
				$filter->add( 'rol__betrokkeneIdentificatie__vestiging__kvkNummer', $this->kvk );
				$authentication_filter_applied = true;
			}

			if ( ! $authentication_filter_applied) {
				throw new Exception( 'No valid authentication filter applied to zaken filter.' );
			}

			return $this->client->zaken()->filter( $filter )->first() ?: null;
		} catch (Exception $e) {
			LoggerService::log_exception( $e, array( 'context' => "Error validating zaak with identification '{$identification}' for informatieobject download." ) );

			return null;
		}
	}
}
