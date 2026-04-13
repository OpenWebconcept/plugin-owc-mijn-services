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

	/**
	 * Map of supplier name to configured API client, used when multiple suppliers are selected.
	 *
	 * @since NEXT
	 * @var array<string, Client>
	 */
	protected array $clients = array();

	protected ZakenFilter $zaken_filter;
	protected string $bsn;
	protected string $kvk;

	final public function render(array $attributes, string $block_content, WP_Block $block ): string
	{
		$has_supplier_config = $this->validate_zaak_clients( $attributes );

		if ( ! $has_supplier_config && $this->is_block_editor()) {
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
		$this->add_zaken_filter_args_by_auth_method( $attributes );

		if ( is_array( $attributes['zaakClients'] ?? null ) && 0 < count( $attributes['zaakClients'] )) {
			$this->setup_clients( $attributes['zaakClients'] );

			if ( 0 === count( $this->clients )) {
				return owc_mijn_services_render_view( 'owc-error', array( 'message' => __( 'Geen van de gekozen zaaksysteem leveranciers is geconfigureerd of ondersteunt zaken.', 'owc-mijn-services' ) ) );
			}
		} else {
			try {
				$supplier     = is_string( $attributes['zaakClient'] ?? null ) && '' !== $attributes['zaakClient'] ? $attributes['zaakClient'] : (string) get_query_var( BlockServiceProvider::QUERY_VAR_SUPPLIER );
				$this->client = apiClientManager()->getClient( $supplier );
			} catch (NotFoundException $e) {
				return owc_mijn_services_render_view( 'owc-error', array( 'message' => __( 'De gekozen zaaksysteem leverancier client is niet geconfigureerd.', 'owc-mijn-services' ) ) );
			}

			if ( ! $this->client->supports( 'zaken' )) {
				return owc_mijn_services_render_view( 'owc-error', array( 'message' => __( 'De gekozen zaaksysteem leverancier ondersteunt geen zaken.', 'owc-mijn-services' ) ) );
			}
		}

		return $this->render_block( $attributes, $block_content, $block );
	}

	/**
	 * Returns true when at least one supplier is configured on the block,
	 * checking the multi-supplier array first and falling back to the legacy string.
	 *
	 * @since NEXT
	 */
	protected function validate_zaak_clients( array $attributes ): bool
	{
		if ( is_array( $attributes['zaakClients'] ?? null ) && 0 < count( $attributes['zaakClients'] )) {
			return true;
		}

		return '' !== trim( $attributes['zaakClient'] ?? '' );
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

	/**
	 * Fetches and merges zaken from all configured clients.
	 * Each zaak is tagged with its originating supplier name for correct permalink generation.
	 *
	 * @since NEXT
	 */
	final protected function get_zaken_from_clients(): Collection
	{
		$all_zaken = array();

		foreach ( $this->clients as $supplier_name => $client ) {
			try {
				$zaken = $client->zaken()->filter( clone $this->zaken_filter );

				foreach ( $zaken->all() as $zaak ) {
					$zaak->setValue( 'supplier', $supplier_name );
					$all_zaken[] = $zaak;
				}
			} catch (Exception $e) {
				// Needs logging?
				// Continue with remaining suppliers when one fails.
			}
		}

		return Collection::collect( $all_zaken );
	}

	/**
	 * Resolves a list of supplier names into API clients, skipping any that are not
	 * configured or do not support zaken.
	 *
	 * @since NEXT
	 * @param string[] $supplier_names
	 */
	private function setup_clients(array $supplier_names ): void
	{
		foreach ( $supplier_names as $supplier_name ) {
			try {
				$client = apiClientManager()->getClient( $supplier_name );

				if ($client->supports( 'zaken' )) {
					$this->clients[ $supplier_name ] = $client;
				}
			} catch (NotFoundException $e) {
				// Skip suppliers that are not configured.
			}
		}
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
