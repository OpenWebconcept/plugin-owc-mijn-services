<?php

declare(strict_types=1);

/**
 * InformatieObject download service.
 *
 * @package OWC_Mijn_Services
 * @author  Yard | Digital Agency
 * @since   1.0.0
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
use OWC\My_Services\LoggerZGW;
use OWC\My_Services\Providers\BlockServiceProvider;
use OWC\My_Services\Traits\Supplier;
use OWC\ZGW\Contracts\Client;
use OWC\ZGW\Endpoints\Filter\ZakenFilter;
use OWC\ZGW\Entities\Zaak;
use OWC\ZGW\Support\ZaakIdEncoderDecoder;

use function OWC\ZGW\apiClientManager;

/**
 * InformatieObject download service.
 *
 * @since 1.0.0
 */
class InformatieObjectDownloadService
{
	use Supplier;

	protected Client $client;
	protected LoggerZGW $logger;

	public function __construct()
	{
		$this->logger = ContainerResolver::make()->get( 'logger.zgw' );
	}

	public function download_file_from_request(): string
	{
		$download_identification = (string) get_query_var( BlockServiceProvider::QUERY_VAR_ZAAK_DOWNLOAD_IDENTIFICATION );
		$identification          = (string) get_query_var( BlockServiceProvider::QUERY_VAR_ZAAK_IDENTIFICATION );
		$supplier                = (string) get_query_var( BlockServiceProvider::QUERY_VAR_SUPPLIER );

		if ( ! $download_identification || ! $identification || ! $supplier) {
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
			$this->logger->error(
				sprintf(
					'OWC\My_Services: %s',
					$e->getMessage()
				)
			);

			return '';
		}

		$fileWriteResult = @file_put_contents( $download_identification, $response->getBody() );

		// Check if the file was written unsuccessfully.
		if (false === $fileWriteResult || ! is_int( $fileWriteResult ) || 0 >= $fileWriteResult) {
			$this->logger->error(
				sprintf(
					'OWC\My_Services: %s',
					'Informationobject download failed, could not write the file to disk.'
				)
			);

			return '';
		}

		// Check if the file does not exist or is not readable.
		if ( ! file_exists( $download_identification ) || ! is_readable( $download_identification )) {
			$this->logger->error(
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

			return $this->client->zaken()->filter( $filter )->first() ?: null;
		} catch (Exception) {
			return null;
		}
	}
}
