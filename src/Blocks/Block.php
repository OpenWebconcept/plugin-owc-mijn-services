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
use OWC\My_Services\Settings\Adapters\ZaaktypeAdapter;
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
	protected string $vestigings_nummer;
	protected string $rsin;

	/**
	 * Map of supplier name to the zaaktype URLs the block is filtered on for that supplier.
	 * An empty list for a supplier means all zaaktypen are shown.
	 *
	 * @since 0.17.0
	 * @var array<string, string[]>
	 */
	protected array $zaaktypen_by_supplier = array();

	/**
	 * Supplier name resolved for the legacy single `zaakClient` attribute.
	 *
	 * @since 0.17.0
	 */
	protected string $single_client_supplier_name = '';

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
			$e_herkenning = eHerkenning::make();

			$this->bsn               = DigiD::make()->bsn();
			$this->kvk               = $e_herkenning->kvk();
			$this->vestigings_nummer = $e_herkenning->vestigingsNummer();
			$this->rsin              = $e_herkenning->rsin();

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

		$this->zaaktypen_by_supplier = $this->normalize_zaaktypen_attribute( $attributes['zaaktypen'] ?? array() );

		if (is_array( $attributes['zaakClients'] ?? null ) && 0 < count( $attributes['zaakClients'] )) {
			$this->setup_clients( $attributes['zaakClients'] );

			if (0 === count( $this->clients )) {
				return owc_mijn_services_render_view( 'owc-error', array( 'message' => __( 'Geen van de gekozen zaaksysteem leveranciers is geconfigureerd of ondersteunt zaken.', 'owc-mijn-services' ) ) );
			}
		} else {
			try {
				$supplier                          = is_string( $attributes['zaakClient'] ?? null ) && '' !== $attributes['zaakClient'] ? $attributes['zaakClient'] : (string) get_query_var( BlockServiceProvider::QUERY_VAR_SUPPLIER );
				$this->client                      = apiClientManager()->getClient( $supplier );
				$this->single_client_supplier_name = $supplier;
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
	 * Normalizes the `zaaktypen` block attribute (a supplier name => zaaktype URLs map)
	 * into a strictly typed array, discarding anything that doesn't match the expected shape.
	 *
	 * @since 0.17.0
	 *
	 * @return array<string, string[]>
	 */
	private function normalize_zaaktypen_attribute( $zaaktypen ): array
	{
		if ( ! is_array( $zaaktypen )) {
			return array();
		}

		return array_map(
			function ( $urls ) {
				return is_array( $urls ) ? array_values( array_filter( $urls, 'is_string' ) ) : array();
			},
			$zaaktypen
		);
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

		$has_kvk_identification = '' !== $this->kvk || '' !== $this->vestigings_nummer || '' !== $this->rsin;

		if ($has_kvk_identification && isset( $attributes['byKVK'] ) && true === $attributes['byKVK'] && ! ContainerResolver::make()->get( 'display.disable-kvk-filtering' )) {
			$authentication_filter_applied = $this->add_kvk_filter( $this->zaken_filter, $this->rsin, $this->vestigings_nummer ) || $authentication_filter_applied;
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

		$zaaktype_identificaties = $this->supports_zaaktype_filtering( $this->single_client_supplier_name )
			? $this->resolve_zaaktype_identificaties( $this->client, $this->single_client_supplier_name, $this->zaaktypen_by_supplier[ $this->single_client_supplier_name ] ?? array() )
			: array();

		if (null === $zaaktype_identificaties) {
			return Collection::collect( array() );
		}

		return Collection::collect( $this->fetch_zaken( $this->client, $this->single_client_supplier_name, $zaaktype_identificaties ) );
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
				$zaaktype_identificaties = $this->supports_zaaktype_filtering( $supplier_name )
					? $this->resolve_zaaktype_identificaties( $client, $supplier_name, $this->zaaktypen_by_supplier[ $supplier_name ] ?? array() )
					: array();

				if (null === $zaaktype_identificaties) {
					continue;
				}

				foreach ($this->fetch_zaken( $client, $supplier_name, $zaaktype_identificaties ) as $zaak) {
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
	 * Fetches zaken for a single client. When zaaktype identificaties are given, the zaken are
	 * filtered on them after fetching instead of passing a 'zaaktype' query filter: that filter
	 * only matches a single zaaktype version URL, so zaken created with an older version of the
	 * same zaaktype would be missed. Since the zaaktype filtering then happens client side, all
	 * result pages are fetched. Without zaaktype identificaties, all zaaktypen are fetched.
	 *
	 * @since 0.17.0
	 *
	 * @param string[] $zaaktype_identificaties
	 */
	private function fetch_zaken( Client $client, string $supplier_name, array $zaaktype_identificaties ): array
	{
		$filter = clone $this->zaken_filter;

		// Make sure initiators are only allowed to see their own cases, and not those of other initiators.
		if ($this->should_verify_initiator_role( $supplier_name )) {
			$filter->add( 'rol__omschrijvingGeneriek', 'initiator' );
		}

		if (array() === $zaaktype_identificaties) {
			return $this->filter_zaken_by_authenticated_initiator(
				(array) $client->zaken()->expandOnly( self::EXPAND_WITH_ROLLEN )->filter( $filter )->all(),
				$supplier_name
			);
		}

		$url_identificaties = ZaaktypeAdapter::url_identificaties( $supplier_name );
		$zaken              = array();
		$page               = 1;

		while ($page) {
			$result = $client->zaken()->expandOnly( self::EXPAND_WITH_ROLLEN )->filter( ( clone $filter )->page( $page ) );
			$zaken  = array_merge( $zaken, (array) $result->all() );
			$page   = $result->pageMeta()->getNextPageNumber();
		}

		$zaken = array_filter(
			$zaken,
			fn ( Zaak $zaak ) => in_array( $this->get_zaak_zaaktype_identificatie( $zaak, $url_identificaties ), $zaaktype_identificaties, true )
		);

		return $this->filter_zaken_by_authenticated_initiator( $zaken, $supplier_name );
	}

	/**
	 * Returns the identificatie of the zaaktype of a zaak, preferring the expanded zaaktype and
	 * the cached URL => identificatie map over lazily fetching the zaaktype from the API.
	 *
	 * @since NEXT
	 *
	 * @param array<string, string> $url_identificaties
	 */
	private function get_zaak_zaaktype_identificatie( Zaak $zaak, array $url_identificaties ): string
	{
		$zaaktype = $zaak->getAttributeValue( 'zaaktype' );

		if (is_string( $zaaktype ) && isset( $url_identificaties[ $zaaktype ] )) {
			return $url_identificaties[ $zaaktype ];
		}

		try {
			return (string) ( $zaak->zaaktype?->identificatie ?? '' );
		} catch (Throwable $e) {
			LoggerService::log_exception( $e, array( 'context' => 'Error resolving zaaktype of zaak.' ) );

			return '';
		}
	}

	/**
	 * The betrokkene and 'rol__omschrijvingGeneriek' query filters each match against the zaak's
	 * rollen independently, so a zaak where the authenticated user holds a different role (e.g.
	 * 'adviseur') next to someone else's initiator role would still be returned. Drops those zaken,
	 * matching the check the single zaak view performs.
	 *
	 * @since 0.19.0
	 *
	 * @param Zaak[] $zaken
	 * @return Zaak[]
	 */
	private function filter_zaken_by_authenticated_initiator( array $zaken, string $supplier_name ): array
	{
		return array_values(
			array_filter(
				$zaken,
				fn ( Zaak $zaak ) => $this->zaak_has_authenticated_initiator( $zaak, $supplier_name, $this->bsn, $this->vestigings_nummer, $this->rsin )
			)
		);
	}

	/**
	 * Resolves the zaaktype URLs selected on the block to their identificaties. The identificatie
	 * is shared by all versions of a zaaktype, so filtering on it keeps matching zaken regardless
	 * of the zaaktype version they were created with, or the version selected on the block.
	 * Falls back to fetching the zaaktype when its URL is not in the cached map (e.g. the
	 * zaaktypen cron hasn't run yet). Returns null when zaaktypen are selected but none of them
	 * could be resolved, so callers don't fall back to fetching zaken of all zaaktypen.
	 *
	 * @since NEXT
	 *
	 * @param string[] $urls
	 * @return string[]|null
	 */
	private function resolve_zaaktype_identificaties( Client $client, string $supplier_name, array $urls ): ?array
	{
		if (array() === $urls) {
			return array();
		}

		$url_identificaties = ZaaktypeAdapter::url_identificaties( $supplier_name );
		$identificaties     = array();

		foreach ($urls as $url) {
			$identificatie = $url_identificaties[ $url ] ?? $this->fetch_zaaktype_identificatie( $client, $url );

			if ('' !== $identificatie) {
				$identificaties[] = $identificatie;
			}
		}

		if (array() === $identificaties) {
			return null;
		}

		return array_values( array_unique( $identificaties ) );
	}

	/**
	 * @since NEXT
	 */
	private function fetch_zaaktype_identificatie( Client $client, string $url ): string
	{
		try {
			$zaaktype = $client->zaaktypen()->get( basename( (string) wp_parse_url( $url, PHP_URL_PATH ) ) );
		} catch (Throwable $e) {
			LoggerService::log_exception( $e, array( 'context' => "Error fetching zaaktype '{$url}'" ) );

			return '';
		}

		return trim( (string) ( $zaaktype?->identificatie ?? '' ) );
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

		$exclude_doc_docx     = (bool) ContainerResolver::make()->get( 'display.exclude-doc-docx' );
		$allowed_per_supplier = (array) ContainerResolver::make()->get( 'display.allowed-informatieobjecttypen' );
		$supplier_name        = (string) $zaak->getValue( 'supplier', '' );
		$allowed_for_supplier = (array) ( $allowed_per_supplier[ $supplier_name ] ?? array() );

		if ( ! $exclude_doc_docx && array() === $allowed_for_supplier ) {
			return $zaakinformatie_objecten;
		}

		return $zaakinformatie_objecten->filter(
			function ( Zaakinformatieobject $zaakinformatie_object ) use ( $exclude_doc_docx, $allowed_for_supplier ) {
				if ( ! $zaakinformatie_object->informatieobject instanceof Enkelvoudiginformatieobject) {
					return false;
				}

				$informatieobject = $zaakinformatie_object->informatieobject;

				if ($exclude_doc_docx && in_array( $informatieobject->formatType(), array( 'doc', 'docx' ), true )) {
					return false;
				}

				if ( 0 < count( $allowed_for_supplier ) && ! in_array( $informatieobject->informatieobjecttype, $allowed_for_supplier, true )) {
					return false;
				}

				return true;
			}
		);
	}
}
