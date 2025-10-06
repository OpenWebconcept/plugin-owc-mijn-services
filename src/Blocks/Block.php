<?php

declare(strict_types=1);

namespace OWC\My_Services\Blocks;

use DI\NotFoundException;
use OWC\My_Services\ContainerResolver;
use OWC\My_Services\Providers\BlockServiceProvider;
use OWC\My_Services\Traits\Supplier;
use OWC\ZGW\Contracts\Client;
use OWC\ZGW\Endpoints\Filter\ZaakinformatieobjectenFilter;
use OWC\ZGW\Endpoints\Filter\ZakenFilter;
use OWC\ZGW\Entities\Zaak;
use OWC\ZGW\Support\Collection;
use TypeError;
use WP_Block;
use WP_Screen;

use function OWC\ZGW\apiClientManager;

abstract class Block
{
	use Supplier;

	protected Client $client;
	protected ZakenFilter $zaken_filter;
	protected string $bsn;

	/**
	 * @since 1.0.0
	 */
	final public function render(array $attributes, string $block_content, WP_Block $block ): string
	{
		if ( ! isset( $attributes['zaakClient'] ) && $this->is_block_editor()) {
			return $this->render_block( $attributes, $block_content, $block );
		}

		try {
			$this->bsn = ContainerResolver::make()->get( 'digid.current_user_bsn' );
		} catch (TypeError $e) {
			return owc_mijn_services_render_view( 'owc-error', array( 'message' => __( 'Je moet ingelogd zijn om deze informatie te kunnen zien.', 'owc-mijn-services' ) ) );
		}

		// DELETE ME LATER
		$this->bsn = '900198424';

		$this->zaken_filter = new ZakenFilter();
		$this->zaken_filter->byBsn( $this->bsn );

		try {
			$this->client = apiClientManager()->getClient( $this->supplier_key_to_name( $attributes['zaakClient'] ?? ( (string) get_query_var( BlockServiceProvider::QUERY_VAR_SUPPLIER ) ) ) );
		} catch (NotFoundException $e) {
			return owc_mijn_services_render_view( 'owc-error', array( 'message' => __( 'De gekozen zaaksysteem leverancier client is niet geconfigureerd.', 'owc-mijn-services' ) ) );
		}

		if ( ! $this->client->supports( 'zaken' )) {
			return owc_mijn_services_render_view( 'owc-error', array( 'message' => __( 'De gekozen zaaksysteem leverancier ondersteunt geen zaken.', 'owc-mijn-services' ) ) );
		}

		return $this->render_block( $attributes, $block_content, $block );
	}

	/**
	 * @since 1.0.0
	 */
	abstract protected function render_block(array $attributes, string $block_content, WP_Block $block ): string;

	/**
	 * @since 1.0.0
	 */
	protected function is_block_editor(): bool
	{
		global $current_screen;

		if ($current_screen instanceof WP_Screen
			&& method_exists( $current_screen, 'is_block_editor' )
			&& $current_screen->is_block_editor()
		) {
			return true;
		}

		if (defined( 'REST_REQUEST' ) && REST_REQUEST && isset( $_GET['context'] ) && $_GET['context'] === 'edit') {
			return true;
		}

		return false;
	}

	/**
	 * The supplier is retrieved from the requested URL therefore making it vulnerable for unwanted changes.
	 *
	 * @since 1.0.0
	 */
	protected function check_supplier(string $supplier ): bool
	{
		$suppliers = ContainerResolver::make()->get( 'suppliers' );

		return in_array( $supplier, array_keys( $suppliers ) );
	}


	/**
	 * @since 1.0.0
	 */
	final protected function get_zaken(): Collection
	{
		return $this->client->zaken()->filter( $this->zaken_filter );
	}

	/**
	 * @since 1.0.0
	 */
	final protected function get_zaak_informatie_objecten(Zaak $zaak ): Collection
	{
		$filter = new ZaakinformatieobjectenFilter();
		$filter->byZaak( $zaak );

		return $this->client->zaakinformatieobjecten()->filter( $filter );
	}
}
