<?php

declare(strict_types=1);

namespace OWC\My_Services\Blocks;

use DI\NotFoundException;
use Exception;
use OWC\My_Services\ContainerResolver;
use OWC\My_Services\Auth\DigiD;
use OWC\My_Services\Auth\eHerkenning;
use OWC\My_Services\Providers\BlockServiceProvider;
use OWC\My_Services\Traits\Supplier;
use OWC\ZGW\Contracts\Client;
use OWC\ZGW\Endpoints\Filter\ZaakinformatieobjectenFilter;
use OWC\ZGW\Endpoints\Filter\ZakenFilter;
use OWC\ZGW\Entities\Zaak;
use OWC\ZGW\Entities\Enkelvoudiginformatieobject;
use OWC\ZGW\Entities\Zaakinformatieobject;
use OWC\ZGW\Support\Collection;
use Throwable;
use WP_Block;
use WP_Screen;

use function OWC\ZGW\apiClientManager;

/**
 * @since 0.1.0
 */
abstract class Block
{
	use Supplier;

	protected Client $client;
	protected ZakenFilter $zaken_filter;
	protected string $bsn;
	protected string $kvk;

	final public function render(array $attributes, string $block_content, WP_Block $block ): string
	{
		if ( ! isset( $attributes['zaakClient'] ) && $this->is_block_editor()) {
			return $this->render_block( $attributes, $block_content, $block );
		}

		try {
			$this->bsn = DigiD::make()->bsn();
			$this->kvk = eHerkenning::make()->kvk();

			if ('' === $this->bsn && '' === $this->kvk) {
				throw new Exception( 'No BSN or KVK found.' );
			}
		} catch (Throwable $e) {
			return owc_mijn_services_render_view( 'owc-error', array( 'message' => __( 'Je moet ingelogd zijn om deze informatie te kunnen zien.', 'owc-mijn-services' ) ) );
		}

		$this->zaken_filter = new ZakenFilter();

		try {
			$this->add_zaken_filter_args_by_auth_method( $attributes );
			$this->client = apiClientManager()->getClient( $attributes['zaakClient'] ?? ( (string) get_query_var( BlockServiceProvider::QUERY_VAR_SUPPLIER ) ) );
		} catch (NotFoundException $e) {
			return owc_mijn_services_render_view( 'owc-error', array( 'message' => __( 'De gekozen zaaksysteem leverancier client is niet geconfigureerd.', 'owc-mijn-services' ) ) );
		}

		if ( ! $this->client->supports( 'zaken' )) {
			return owc_mijn_services_render_view( 'owc-error', array( 'message' => __( 'De gekozen zaaksysteem leverancier ondersteunt geen zaken.', 'owc-mijn-services' ) ) );
		}

		return $this->render_block( $attributes, $block_content, $block );
	}

	abstract protected function render_block(array $attributes, string $block_content, WP_Block $block ): string;

	/**
	 * @since 0.5.0
	 */
	private function add_zaken_filter_args_by_auth_method(array $attributes ): void
	{
		if ( '' !== $this->bsn && ( $attributes['byBSN'] ?? true ) ) {
			$this->zaken_filter->byBsn( $this->bsn );
		} elseif ( '' !== $this->kvk && ( $attributes['byKVK'] ?? false ) ) {
			$this->zaken_filter->add( 'rol__betrokkeneIdentificatie__vestiging__kvkNummer', $this->kvk );
		}
	}

	protected function is_block_editor(): bool
	{
		global $current_screen;

		if ($current_screen instanceof WP_Screen
			&& method_exists( $current_screen, 'is_block_editor' )
			&& $current_screen->is_block_editor()
		) {
			return true;
		}

		if (defined( 'REST_REQUEST' ) && REST_REQUEST) {
			if ( 'edit' === ( $_GET['action'] ?? '' ) ) {
				return true;
			}

			if ( 'user' === ( $_GET['_locale'] ?? '' ) ) {
				return true;
			}
		}

		return false;
	}

	final protected function get_zaken(): Collection
	{
		return $this->client->zaken()->filter( $this->zaken_filter );
	}

	final protected function get_zaak_informatie_objecten(Zaak $zaak ): Collection
	{
		$zaakinformatie_objecten = $zaak->zaakinformatieobjecten;

		if ($zaakinformatie_objecten->isEmpty()) {
			return $zaakinformatie_objecten;
		}

		if ( ! ContainerResolver::make()->get( 'display.exclude-doc-docx' )) {
			return $zaakinformatie_objecten;
		}

		return $zaakinformatie_objecten->filter(
			function (Zaakinformatieobject $zaakinformatie_object ) {
				if ( ! $zaakinformatie_object->informatieobject instanceof Enkelvoudiginformatieobject) {
					return false;
				}

				return ! in_array( $zaakinformatie_object->informatieobject->formatType(), array( 'doc', 'docx' ), true );
			}
		);
	}
}
