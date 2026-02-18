<?php

declare(strict_types=1);

namespace OWC\My_Services\Blocks;

use Exception;
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

		$this->handle_filter_ordering( $attributes );

		try {
			$zaken = $this->get_zaken();
		} catch (Exception $e) {
			return owc_mijn_services_render_view( 'owc-error', array( 'message' => __( 'Er zijn geen zaken gevonden.', 'owc-mijn-services' ) ) );
		}

		if ( $zaken->isEmpty() ) {
			return owc_mijn_services_render_view(
				'owc-error',
				array(
					'message' => __( 'Er zijn geen zaken gevonden.', 'owc-mijn-services' ),
				)
			);
		}

		$zaken->map(
			function ($zaak ) use ($attributes ) {
				// Supplier is needed for generation of the correct permalinks in the views.
				$zaak->setValue( 'supplier', $attributes['zaakClient'] ?? 'openzaak' );

				return $zaak;
			}
		);

		$zaken = $zaken->take( (int) ( $attributes['perPage'] ?? 10 ) );

		return owc_mijn_services_render_view(
			'owc-overview-zaken',
			array(
				'current_zaken'   => $this->get_current_zaken( $zaken ),
				'completed_zaken' => $this->get_completed_zaken( $zaken ),
			)
		);
	}

	/**
	 * @since 0.4.2
	 */
	protected function handle_filter_ordering(array $attributes ): void
	{
		if ( ! is_string( $attributes['orderBy'] ?? null )) {
			return;
		}

		if ( ! is_string( $attributes['orderByDirection'] ?? null )) {
			$attributes['orderByDirection'] = '-';
		}

		$this->zaken_filter->orderBy( $attributes['orderBy'], $attributes['orderByDirection'] );
	}

	/**
	 * @since 0.5.4
	 */
	protected function get_current_zaken(array $zaken ): array
	{
		return $this->filter_and_map_zaken(
			$zaken,
			fn($zaak ) => false === $zaak->hasEndDate()
		);
	}

	/**
	 * @since 0.5.4
	 */
	protected function get_completed_zaken(array $zaken ): array
	{
		return $this->filter_and_map_zaken(
			$zaken,
			fn($zaak ) => false !== $zaak->hasEndDate()
		);
	}

	/**
	 * @since 0.5.4
	 */
	private function filter_and_map_zaken(array $zaken, callable $predicate ): array
	{
		return array_values(
			array_map(
				array( $this, 'map_zaak' ),
				array_filter( $zaken, $predicate )
			)
		);
	}

	/**
	 * @since 0.5.4
	 */
	private function map_zaak($zaak ): array
	{
		return array(
			'appearance' => '',
			'title'      => $zaak->title(),
			'subTitle'   => '',
			'context'    => $zaak->startDate( 'j F Y' ),
			'datetime'   => $zaak->startDate( 'Y-m-d' ),
			'href'       => $zaak->permalink(),
		);
	}
}
