<?php

declare(strict_types=1);

namespace OWC\My_Services\Blocks;

use DI\NotFoundException;
use Exception;
use OWC\My_Services\Auth\DigiD;
use OWC\My_Services\Auth\eHerkenning;
use OWC\My_Services\ContainerResolver;
use OWC\My_Services\Providers\BlockServiceProvider;
use OWC\My_Services\Services\LoggerService;
use OWC\My_Services\Traits\AuthenticationFilter;
use OWC\My_Services\Traits\Supplier;
use OWC\ZGW\Contracts\Client;
use OWC\ZGW\Endpoints\Filter\ZakenFilter;
use OWC\ZGW\Entities\Enkelvoudiginformatieobject;
use OWC\ZGW\Entities\Zaak;
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
	use AuthenticationFilter;
	use Supplier;

	protected ?Client $client = null;

	/**
	 * Map of supplier name to configured API client, used when multiple suppliers are selected.
	 *
	 * @since 0.7.0
	 * @var array<string, Client>
	 */
	protected array $clients = array();

	protected ZakenFilter $zaken_filter;
	protected string $bsn;
	protected string $kvk;
	protected string $vestigingsNummer;
	protected string $rsin;

	public function __construct()
	{
		$this->zaken_filter = new ZakenFilter();
	}

	final public function render( array $attributes, string $block_content, WP_Block $block ): string
	{
		$has_supplier_config = $this->validate_zaak_clients( $attributes );

		if ( ! $has_supplier_config || $this->is_block_editor()) {
			return $this->render_block( $attributes, $block_content, $block );
		}

		try {
			$eHerkenning = eHerkenning::make();

			$this->bsn              = DigiD::make()->bsn();
			$this->kvk              = $eHerkenning->kvk();
			$this->vestigingsNummer = $eHerkenning->vestigingsNummer();
			$this->rsin             = $eHerkenning->rsin();

			if ('' === $this->bsn && '' === $this->kvk) {
				throw new Exception( 'No BSN or KVK found.' );
			}
		} catch (Throwable $e) {
			return owc_mijn_services_render_view( 'owc-error', array( 'message' => __( 'Je moet ingelogd zijn om deze informatie te kunnen zien.', 'owc-mijn-services' ) ) );
		}

		if ( ! ContainerResolver::make()->get( 'display.disable-production-checks' )
			&& ! ( (bool) ( $attributes['byBSN'] ?? false ) )
			&& ! ( (bool) ( $attributes['byKVK'] ?? false ) )
		) {
			return owc_mijn_services_render_view( 'owc-error', array( 'message' => __( 'Configureer minimaal één filteroptie: \'Filter op BSN\' of \'Filter op KVK\'.', 'owc-mijn-services' ) ) );
		}

		try {
			$this->add_zaken_filter_args_by_auth_method( $attributes );
		} catch (Exception $e) {
			LoggerService::log_exception( $e, array( 'context' => 'Error applying authentication filters to zaken filter.' ) );

			return owc_mijn_services_render_view( 'owc-error', array( 'message' => __( 'De filterinstellingen van dit blok zijn niet compatibel met uw inlogmethode. Neem contact op met de beheerder van deze website.', 'owc-mijn-services' ) ) );
		}

		if (is_array( $attributes['zaakClients'] ?? null ) && 0 < count( $attributes['zaakClients'] )) {
			$this->setup_clients( $attributes['zaakClients'] );

			if (0 === count( $this->clients )) {
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
	 * @since 0.7.0
	 */
	protected function validate_zaak_clients( array $attributes ): bool
	{
		if ( is_array( $attributes['zaakClients'] ?? null ) && 0 < count( $attributes['zaakClients'] )) {
			return true;
		}

		return '' !== trim( $attributes['zaakClient'] ?? '' );
	}

	abstract protected function render_block( array $attributes, string $block_content, WP_Block $block ): string;

	/**
	 * @since 0.5.0
	 */
	private function add_zaken_filter_args_by_auth_method( array $attributes ): void
	{
		$authentication_filter_applied = false;

		if ('' === $this->bsn && '' === $this->kvk) {
			throw new Exception( 'No BSN or KVK available for filtering zaken.' );
		}

		if ('' !== $this->bsn && isset( $attributes['byBSN'] ) && true === $attributes['byBSN']) {
			$this->zaken_filter->byBsn( $this->bsn );
			$authentication_filter_applied = true;
		}

		$has_kvk_identification = '' !== $this->kvk || '' !== $this->vestigingsNummer || '' !== $this->rsin;

		if ($has_kvk_identification && isset( $attributes['byKVK'] ) && true === $attributes['byKVK'] && ! ContainerResolver::make()->get( 'display.disable-kvk-filtering' )) {
			$authentication_filter_applied = $this->add_kvk_filter( $this->zaken_filter, $this->rsin, $this->vestigingsNummer, $this->kvk ) || $authentication_filter_applied;
		}

		if ( ! $authentication_filter_applied) {
			throw new Exception( 'No valid authentication filter applied to zaken filter.' );
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
			if ('edit' === ( $_GET['action'] ?? '' )) {
				return true;
			}

			if ('user' === ( $_GET['_locale'] ?? '' )) {
				return true;
			}
		}

		return false;
	}

	final protected function get_zaken(): Collection
	{
		if (null === $this->client) {
			return Collection::collect( array() );
		}

		return $this->client->zaken()->filter( $this->zaken_filter );
	}

	/**
	 * Fetches and merges zaken from all configured clients.
	 * Each zaak is tagged with its originating supplier name for correct permalink generation.
	 *
	 * @since 0.7.0
	 */
	final protected function get_zaken_from_clients(): Collection
	{
		$all_zaken = array();

		foreach ($this->clients as $supplier_name => $client) {
			try {
				$zaken = $client->zaken()->filter( clone $this->zaken_filter );

				foreach ($zaken->all() as $zaak) {
					$zaak->setValue( 'supplier', $supplier_name );
					$all_zaken[] = $zaak;
				}
			} catch (Exception $e) {
				LoggerService::log_exception( $e, array( 'context' => "Error fetching zaken from supplier '{$supplier_name}'" ) );
			}
		}

		return Collection::collect( $all_zaken );
	}

	/**
	 * Resolves a list of supplier names into API clients, skipping any that are not
	 * configured or do not support zaken.
	 *
	 * @since 0.7.0
	 *
	 * @param string[] $supplier_names
	 */
	private function setup_clients( array $supplier_names ): void
	{
		foreach ($supplier_names as $supplier_name) {
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

	final protected function get_zaak_informatie_objecten( Zaak $zaak ): Collection
	{
		$zaakinformatie_objecten = $zaak->zaakinformatieobjecten;

		if ( ! $zaakinformatie_objecten instanceof Collection) {
			return Collection::collect( array() );
		}

		if ($zaakinformatie_objecten->isEmpty()) {
			return $zaakinformatie_objecten;
		}

		$exclude_doc_docx              = (bool) ContainerResolver::make()->get( 'display.exclude-doc-docx' );
		$allowed_informatieobjecttypen = (array) ContainerResolver::make()->get( 'display.allowed-informatieobjecttypen' );

		if ( ! $exclude_doc_docx && empty( $allowed_informatieobjecttypen )) {
			return $zaakinformatie_objecten;
		}

		return $zaakinformatie_objecten->filter(
			function ( Zaakinformatieobject $zaakinformatie_object ) use ( $exclude_doc_docx, $allowed_informatieobjecttypen ) {
				if ( ! $zaakinformatie_object->informatieobject instanceof Enkelvoudiginformatieobject) {
					return false;
				}

				$informatieobject = $zaakinformatie_object->informatieobject;

				if ($exclude_doc_docx && in_array( $informatieobject->formatType(), array( 'doc', 'docx' ), true )) {
					return false;
				}

				if ( 0 < count( $allowed_informatieobjecttypen ) && ! in_array( $informatieobject->informatieobjecttype, $allowed_informatieobjecttypen, true )) {
					return false;
				}

				return true;
			}
		);
	}
}
