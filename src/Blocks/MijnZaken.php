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
	protected function render_block( array $attributes, string $block_content, WP_Block $block ): string
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
			if ( 0 < count( $this->clients )) {
				$zaken = $this->get_zaken_from_clients();
			} else {
				$zaken = $this->get_zaken();
				// Supplier is needed for generation of the correct permalinks in the views.
				$zaken->map(
					function ( $zaak ) use ( $attributes ) {
						$zaak->setValue( 'supplier', $attributes['zaakClient'] ?? 'openzaak' );

						return $zaak;
					}
				);
			}
		} catch (Exception) {
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

		$order = $this->resolve_order( $attributes );

		if (null !== $order) {
			[ $field, $reverse ] = $order;
			$zaken               = $zaken->sortByAttribute( $field, $reverse );
		}

		$zaken = $zaken->take( (int) ( $attributes['perPage'] ?? 10 ) );

		return owc_mijn_services_render_view(
			'owc-overview-zaken',
			array(
				'show_tabs'       => (bool) ( $attributes['showTabs'] ?? true ),
				'all_zaken'       => $this->filter_and_map_zaken( $zaken, fn () => true ),
				'current_zaken'   => $this->get_current_zaken( $zaken ),
				'completed_zaken' => $this->get_completed_zaken( $zaken ),
			)
		);
	}

	/**
	 * @since 0.4.2
	 */
	protected function handle_filter_ordering( array $attributes ): void
	{
		$order = $this->resolve_order( $attributes );

		if (null === $order) {
			return;
		}

		[ $field, $reverse ] = $order;

		$this->zaken_filter->orderBy( sprintf( '%s%s', $reverse ? '-' : '', $field ) );
	}

	/**
	 * Resolves the validated orderBy field and direction from the block attributes. Shared by
	 * handle_filter_ordering(), which applies it to the live API request, and render_block(),
	 * which re-applies it as a PHP-side sort after fetching: merging zaken from multiple
	 * zaaktypen and/or suppliers means each individual API request comes back correctly ordered,
	 * but the merged result as a whole is not, so it must be re-sorted before it's truncated to
	 * perPage.
	 *
	 * @since 0.17.0
	 *
	 * @return array{0: string, 1: bool}|null Tuple of [orderBy field, reverse], or null when no
	 *                                         ordering is configured.
	 */
	private function resolve_order( array $attributes ): ?array
	{
		if ( ! is_string( $attributes['orderBy'] ?? null ) || '' === $attributes['orderBy']) {
			return null;
		}

		$reverse = ! is_string( $attributes['orderByDirection'] ?? null ) || '-' === $attributes['orderByDirection'];

		return array( $attributes['orderBy'], $reverse );
	}

	/**
	 * @since 0.5.4
	 */
	protected function get_current_zaken( array $zaken ): array
	{
		return $this->filter_and_map_zaken(
			$zaken,
			fn ( $zaak ) => false === $zaak->hasEndDate()
		);
	}

	/**
	 * @since 0.5.4
	 */
	protected function get_completed_zaken( array $zaken ): array
	{
		return $this->filter_and_map_zaken(
			$zaken,
			fn ( $zaak ) => false !== $zaak->hasEndDate()
		);
	}

	/**
	 * @since 0.5.4
	 */
	private function filter_and_map_zaken( array $zaken, callable $predicate ): array
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
	private function map_zaak( $zaak ): array
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
