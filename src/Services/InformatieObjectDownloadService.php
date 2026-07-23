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
use OWC\My_Services\Traits\AuthenticationFilter;
use OWC\My_Services\Traits\Supplier;
use OWC\ZGW\Contracts\Client;
use OWC\ZGW\Endpoints\Filter\ZakenFilter;
use OWC\ZGW\Entities\Enkelvoudiginformatieobject;
use OWC\ZGW\Entities\Zaak;
use OWC\ZGW\Entities\Zaakinformatieobject;
use OWC\ZGW\Support\Collection;
use OWC\ZGW\Support\ZaakIdEncoderDecoder;
use OWC\My_Services\Services\LoggerService;
use OWC\ZGW\Http\Response;
use WP_Filesystem_Base;

use function OWC\ZGW\apiClientManager;

/**
 * InformatieObject download service.
 *
 * @since 0.1.0
 */
class InformatieObjectDownloadService
{
	use AuthenticationFilter;
	use Supplier;

	protected Client $client;
	protected string $bsn;
	protected string $kvk;
	protected string $vestigingsNummer;
	protected string $rsin;

	public function download_file_from_request(): string
	{
		$download_identification = (string) get_query_var( BlockServiceProvider::QUERY_VAR_ZAAK_DOWNLOAD_IDENTIFICATION );
		$identification          = (string) get_query_var( BlockServiceProvider::QUERY_VAR_ZAAK_IDENTIFICATION );
		$supplier                = (string) get_query_var( BlockServiceProvider::QUERY_VAR_SUPPLIER );

		if ( ! $download_identification || ! $identification || ! $supplier) {
			return '';
		}

		try {
			$eHerkenning = eHerkenning::make();

			$this->bsn              = DigiD::make()->bsn();
			$this->kvk              = $eHerkenning->kvk();
			$this->vestigingsNummer = $eHerkenning->vestigingsNummer();
			$this->rsin             = $eHerkenning->rsin();

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

		$zaakinformatie_object = $this->find_zaak_informatieobject( $zaak, $download_identification );

		if ( ! $zaakinformatie_object instanceof Zaakinformatieobject) {
			LoggerService::log(
				'error',
				sprintf(
					"OWC\My_Services: Download of informatieobject with identification '%s' blocked, document does not belong to zaak '%s'.",
					$download_identification,
					$identification
				)
			);

			return '';
		}

		$allowed_informatieobjecttypen = (array) ContainerResolver::make()->get( 'display.allowed-informatieobjecttypen' );

		if ( 0 < count( $allowed_informatieobjecttypen )) {
			if ( ! $this->validate_information_object_to_configured_types( $allowed_informatieobjecttypen, $zaakinformatie_object, $download_identification, $identification )) {
				return '';
			}
		}

		try {
			$response = $this->client->enkelvoudiginformatieobjecten()->download( $download_identification );
		} catch (Exception $e) {
			LoggerService::log_exception( $e, array( 'context' => "Error downloading informatieobject with identification '{$download_identification}' for zaak '{$identification}' from supplier '{$supplier}'" ) );

			return '';
		}

		if ( ! $this->prepare_download( $download_identification, $response )) {
			return '';
		}

		if ( ! $this->download_is_valid( $download_identification )) {
			return '';
		}

		return $download_identification;
	}

	protected function validate_zaak( string $identification ): ?Zaak
	{
		try {
			$filter = new ZakenFilter();
			$filter->add( 'identificatie', $identification );
			$authentication_filter_applied = false;

			if ('' !== $this->bsn) {
				$filter->byBsn( $this->bsn );
				$authentication_filter_applied = true;
			}

			$has_kvk_identification = '' !== $this->kvk || '' !== $this->vestigingsNummer || '' !== $this->rsin;

			if ($has_kvk_identification && ! ContainerResolver::make()->get( 'display.disable-kvk-filtering' )) {
				$authentication_filter_applied = $this->add_kvk_filter( $filter, $this->rsin, $this->vestigingsNummer, $this->kvk ) || $authentication_filter_applied;
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

	/**
	 * Find the Zaakinformatieobject for the given Zaak and download identification.
	 * Object is used to validate that the download request is for a document that belongs to one of the configured allowed informatieobjecttypen.
	 *
	 * @since 0.11.0
	 */
	protected function find_zaak_informatieobject( Zaak $zaak, string $download_identification ): ?Zaakinformatieobject
	{
		$zaakinformatie_objecten = $zaak->zaakinformatieobjecten;

		if ( ! $zaakinformatie_objecten instanceof Collection) {
			return null;
		}

		return $zaakinformatie_objecten->first(
			function ( $key, Zaakinformatieobject $zaakinformatie_object ) use ( $download_identification ) {
				$matches = basename( (string) $zaakinformatie_object?->url ) === $download_identification;

				return $matches ? $zaakinformatie_object : null;
			}
		);
	}

	/**
	 * Validate that the informatieobjecttype of the given Zaakinformatieobject is in the list of allowed informatieobjecttypen.
	 *
	 * @since 0.11.0
	 */
	private function validate_information_object_to_configured_types( array $allowed_informatieobjecttypen, Zaakinformatieobject $zaakinformatie_object, string $download_identification, string $identification ): bool
	{
		$informatieobject = $zaakinformatie_object->informatieobject;

		if ( ! $informatieobject instanceof Enkelvoudiginformatieobject || ! in_array( $informatieobject->informatieobjecttype, $allowed_informatieobjecttypen, true )) {
			LoggerService::log(
				'error',
				sprintf(
					"OWC\My_Services: Download of informatieobject with identification '%s' for zaak '%s' blocked, informatieobjecttype is not allowed.",
					$download_identification,
					$identification
				)
			);

			return false;
		}

		return true;
	}

	/**
	 * Prepare the download by writing the response body to a file.
	 *
	 * @since 0.11.0
	 */
	private function prepare_download( string $download_identification, Response $response ): bool
	{
		global $wp_filesystem;

		if ( ! $wp_filesystem instanceof WP_Filesystem_Base) {
			require_once ABSPATH . 'wp-admin/includes/file.php';
			WP_Filesystem( false, false, true );
		}

		// Check if the file was written unsuccessfully.
		if ( ! $wp_filesystem instanceof WP_Filesystem_Base || ! $wp_filesystem->put_contents( $download_identification, $response->getBody(), FS_CHMOD_FILE )) {
			LoggerService::log(
				'error',
				sprintf(
					'OWC\My_Services: %s',
					'Informationobject download failed, could not write the file to disk.'
				)
			);

			return false;
		}

		return true;
	}

	/**
	 * Check if the file does not exist or is not readable.
	 *
	 * @since 0.11.0
	 */
	private function download_is_valid( string $download_identification ): bool
	{
		if ( ! file_exists( $download_identification ) || ! is_readable( $download_identification )) {
			LoggerService::log(
				'error',
				sprintf(
					'OWC\My_Services: %s',
					'Informationobject download failed, the file does not exist or is not readable.'
				)
			);

			return false;
		}

		return true;
	}
}
