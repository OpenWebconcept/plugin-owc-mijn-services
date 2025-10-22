<?php

declare(strict_types=1);

namespace OWC\My_Services\Blocks;

use WP_Block;

/**
 * @since 0.1.0
 */
class MijnZaken extends Block
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
					'title'       => __( 'Het persoonlijke zakenoverzicht', 'owc-mijn-services' ),
					'description' => __( 'Toont een overzicht van de zaken voor de ingelogde gebruiker.', 'owc-mijn-services' ),
				)
			);
		}

		$this->zaken_filter->orderBy( 'registratiedatum' );
		$zaken = $this->get_zaken();
		$zaken->map(
			function ($zaak ) use ($attributes ) {
				// Supplier is needed for generation of the correct permalinks in the views.
				$zaak->setValue( 'supplier', $attributes['zaakClient'] ?? 'openzaak' );

				return $zaak;
			}
		);

		return owc_mijn_services_render_view(
			'owc-overview-zaken',
			array(
				'zaken' => $zaken->take( (int) ( $attributes['perPage'] ?? 10 ) ),
			)
		);
	}
}
