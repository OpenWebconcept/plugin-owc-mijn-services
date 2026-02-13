<?php

declare(strict_types=1);

namespace OWC\My_Services\Blocks;

use DI\NotFoundException;
use Exception;
use OWC\My_Services\Providers\BlockServiceProvider;
use OWC\ZGW\Entities\Zaak as ZaakEntity;
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
	protected function render_block(array $attributes, string $block_content, WP_Block $block ): string
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

		if (empty( $identification ) || empty( $supplier )) {
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

		// Supplier is needed for generation of the correct permalinks in the views.
		$zaak->setValue( 'supplier', $attributes['zaakClient'] ?? 'openzaak' );

		return owc_mijn_services_render_view(
			'owc-single-zaak',
			array(
				'zaak'                => $zaak,
				'information_objects' => $this->get_zaak_informatie_objecten( $zaak ),
				'steps'               => $zaak->steps,
			)
		);
	}

	protected function retrieve_zaak(string $identification ): ?ZaakEntity
	{
		try {
			$this->zaken_filter->add( 'identificatie', $identification );
			$zaak = $this->client->zaken()->filter( $this->zaken_filter )->first() ?: null;
		} catch (Exception $e) {
			$zaak = null;
		}

		return $zaak;
	}
}
