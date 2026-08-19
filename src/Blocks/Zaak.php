<?php

declare(strict_types=1);

namespace OWC\My_Services\Blocks;

use DI\NotFoundException;
use Exception;
use OWC\My_Services\ContainerResolver;
use OWC\My_Services\Providers\BlockServiceProvider;
use OWC\My_Services\Services\LoggerService;
use OWC\ZGW\Entities\Zaak as ZaakEntity;
use OWC\ZGW\Support\ZaakIdEncoderDecoder;
use WP_Block;

use function OWC\ZGW\apiClientManager;

/**
 * @since 0.1.0
 */
class Zaak extends Block
{
	/**
	 * @inheritDoc
	 */
	protected function render_block( array $attributes, string $block_content, WP_Block $block ): string
	{
		if ($this->is_block_editor()) {
			return owc_mijn_services_render_view(
				'owc-block-editor-placeholder',
				array(
					'title'       => __( 'Detailpagina van een zaak', 'owc-mijn-services' ),
					'description' => __( 'Toont de details van een specifieke zaak.', 'owc-mijn-services' ),
				)
			);
		}

		$identification = sanitize_text_field( (string) get_query_var( BlockServiceProvider::QUERY_VAR_ZAAK_IDENTIFICATION ) );
		$supplier       = sanitize_text_field( (string) get_query_var( BlockServiceProvider::QUERY_VAR_SUPPLIER ) );

		if ( '' === $identification || '' === $supplier ) {
			return owc_mijn_services_render_view( 'owc-error', array( 'message' => __( 'Er is geen zaaknummer of leverancier opgegeven om de zaak te kunnen tonen.', 'owc-mijn-services' ) ) );
		}

		try {
			$this->client = apiClientManager()->getClient( $supplier );
		} catch (NotFoundException $e) {
			return owc_mijn_services_render_view( 'owc-error', array( 'message' => __( 'De gekozen zaaksysteem leverancier client is niet geconfigureerd.', 'owc-mijn-services' ) ) );
		}

		$zaak = $this->retrieve_zaak( $identification );

		if ( ! $zaak instanceof ZaakEntity) {
			return owc_mijn_services_render_view( 'owc-error', array( 'message' => __( 'De opgevraagde zaak is niet gevonden.', 'owc-mijn-services' ) ) );
		}

		if (0 === count( $this->clients )) {
			// Supplier is needed for generation of the correct permalinks in the views.
			// When multiple clients are configured, retrieve_zaak() already tagged the
			// zaak with the supplier it was actually found under.
			$zaak->setValue( 'supplier', $supplier );
		}

		return owc_mijn_services_render_view(
			'owc-single-zaak',
			array(
				'zaak'                           => $zaak,
				'information_objects'            => $this->get_zaak_informatie_objecten( $zaak ),
				'steps'                          => $zaak->steps,
				'endDate'                        => $zaak->endDate(),
				'hide_status_steps_without_date' => ContainerResolver::make()->get( 'display.hide-status-steps-without-date' ),
				'hide_volgnummers'               => ContainerResolver::make()->get( 'display.hide-volgnummers' ),
			)
		);
	}

	protected function retrieve_zaak( string $identification ): ?ZaakEntity
	{
		try {
			$this->zaken_filter->add( 'identificatie', ZaakIdEncoderDecoder::decode( $identification ) );
			$authentication_filter_applied = false;

			if ('' !== $this->bsn) {
				$this->zaken_filter->byBsn( $this->bsn );
				$authentication_filter_applied = true;
			}

			$has_kvk_identification = '' !== $this->kvk || '' !== $this->vestigings_nummer || '' !== $this->rsin;

			if ($has_kvk_identification && ! ContainerResolver::make()->get( 'display.disable-kvk-filtering' )) {
				$authentication_filter_applied = $this->add_kvk_filter( $this->zaken_filter, $this->rsin, $this->vestigings_nummer, $this->kvk ) || $authentication_filter_applied;
			}

			if ( ! $authentication_filter_applied) {
				throw new Exception( 'No valid authentication filter applied to zaken filter.' );
			}

			if (0 === count( $this->clients )) {
				$zaak = $this->client->zaken()->filter( $this->zaken_filter )->first() ?: null;
			} else {
				$zaak = $this->retrieve_zaak_by_multiple_clients( $identification );
			}
		} catch (Exception $e) {
			LoggerService::log_exception( $e, array( 'context' => "Error retrieving zaak with identification '{$identification}'." ) );

			$zaak = null;
		}

		return $zaak;
	}

	/**
	 * @since 0.13.0
	 */
	protected function retrieve_zaak_by_multiple_clients( string $identification ): ?ZaakEntity
	{
		$zaak = null;

		foreach ($this->clients as $supplier_name => $client) {
			try {
				$zaak = $client->zaken()->filter( clone $this->zaken_filter )->first() ?: null;

				if (null !== $zaak) {
					$zaak->setValue( 'supplier', $supplier_name );

					break;
				}
			} catch (Exception $e) {
				LoggerService::log_exception( $e, array( 'context' => "Error retrieving zaak with identification '{$identification}' from supplier '{$supplier_name}'." ) );
			}
		}

		return $zaak;
	}
}
