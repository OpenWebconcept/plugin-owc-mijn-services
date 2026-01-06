<?php

declare(strict_types=1);

/**
 * Register block service provider.
 *
 * @package OWC_Mijn_Services
 * @author  Yard | Digital Agency
 * @since   0.1.0
 */

namespace OWC\My_Services\Providers;

/**
 * Exit when accessed directly.
 */
if ( ! defined( 'ABSPATH' )) {
	exit;
}

use OWC\My_Services\Blocks\MijnZaken;
use OWC\My_Services\Blocks\Zaak;
use WP_Block_Editor_Context;
use WP_Block_Type;

/**
 * Register block service provider.
 *
 * @since 0.1.0
 */
class BlockServiceProvider extends ServiceProvider
{
	public const BLOCK_CATEGORY                         = 'owc-mijn-services';
	public const QUERY_VAR_SUPPLIER                     = 'owc-leverancier';
	public const QUERY_VAR_ZAAK_IDENTIFICATION          = 'owc-zaaknummer';
	public const QUERY_VAR_ZAAK_DOWNLOAD_IDENTIFICATION = 'owc-zaak-download-nummer';

	public bool $zaak_client_options_inline_script_added = false;

	/**
	 * @inheritDoc
	 */
	public function register(): void
	{
		add_filter( 'query_vars', $this->add_query_vars( ... ) );
		add_action( 'init', $this->register_rewrite_rules( ... ) );
		add_action( 'init', $this->flush_rewrite_rules( ... ) );
		add_filter( 'block_categories_all', $this->register_block_category( ... ), 10, 2 );
		add_action( 'init', $this->register_blocks( ... ) );
		add_action( 'template_redirect', $this->maybe_handle_information_object_download( ... ) );
	}

	public function add_query_vars(array $vars ): array
	{
		$vars[] = static::QUERY_VAR_SUPPLIER;
		$vars[] = static::QUERY_VAR_ZAAK_IDENTIFICATION;
		$vars[] = static::QUERY_VAR_ZAAK_DOWNLOAD_IDENTIFICATION;

		return $vars;
	}

	public function register_rewrite_rules(): void
	{
		// TODO: make configurable
		add_rewrite_rule(
			'^zaak/([a-zA-Z0-9.-]+)/([a-zA-Z-]+)/?$',
			'index.php?pagename=zaak&' . self::QUERY_VAR_ZAAK_IDENTIFICATION . '=$matches[1]&' . self::QUERY_VAR_SUPPLIER . '=$matches[2]',
			'top'
		);

		add_rewrite_rule(
			'^zaak-download/([a-zA-Z0-9-]+)/([a-zA-Z0-9-\\.]+)/([a-zA-Z-]+)/?$',
			'index.php?pagename=zaak-download&' . self::QUERY_VAR_ZAAK_DOWNLOAD_IDENTIFICATION . '=$matches[1]&' . self::QUERY_VAR_ZAAK_IDENTIFICATION . '=$matches[2]&' . self::QUERY_VAR_SUPPLIER . '=$matches[3]',
			'top'
		);
	}

	/**
	 * If the option is set to true on plugin activation, flush rewrite rules
	 * so the custom rewrite rules are registered.
	 *
	 * @since 0.2.0
	 */
	public function flush_rewrite_rules(): void
	{
		if ( ! get_option( 'owc_my_services_flush_rewrite_rules' )) {
			return;
		}

		flush_rewrite_rules();
		delete_option( 'owc_my_services_flush_rewrite_rules' );
	}

	public function register_block_category(array $block_categories, WP_Block_Editor_Context $block_editor_context ): array
	{
		$block_categories[] = array(
			'slug'  => self::BLOCK_CATEGORY,
			'title' => 'OWC Mijn Services',
		);

		return $block_categories;
	}

	public function register_blocks(): void
	{
		$this->register_mijn_zaken_block();
		$this->register_single_zaak_block();
	}

	/**
	 * @since 0.4.2
	 */
	private function register_mijn_zaken_block(): void
	{
		$block_type = register_block_type(
			owc_mijn_services_asset_path( 'mijn-zaken' ),
			array(
				'render_callback' => array( new MijnZaken(), 'render' ),
				'category'        => self::BLOCK_CATEGORY,
				'attributes'      => array(
					'zaakClient'       => array(
						'type'    => 'string',
						'default' => 'openzaak',
					),
					'perPage'          => array(
						'type'    => 'number',
						'default' => 10,
					),
					'orderBy'          => array(
						'type'    => 'string',
						'default' => 'startdatum',
					),
					'orderByDirection' => array(
						'type'    => 'string',
						'default' => '-',
					),
				),
			)
		);

		if ( ! $block_type instanceof WP_Block_Type ) {
			return;
		}

		$this->preprare_and_add_client_options( $block_type );
	}

	/**
	 * @since 0.4.2
	 */
	private function register_single_zaak_block(): void
	{
		$block_type = register_block_type(
			owc_mijn_services_asset_path( 'zaak' ),
			array(
				'render_callback' => array( new Zaak(), 'render' ),
				'category'        => self::BLOCK_CATEGORY,
				'attributes'      => array(
					'zaakClient' => array(
						'type'    => 'string',
						'default' => 'openzaak',
					),
				),
			)
		);

		if ( ! $block_type instanceof WP_Block_Type ) {
			return;
		}

		$this->preprare_and_add_client_options( $block_type );
	}

	/**
	 * @since 0.4.2
	 */
	private function preprare_and_add_client_options(WP_Block_Type $block_type ): void
	{
		if (true === $this->zaak_client_options_inline_script_added ) {
			return;
		}

		$clients = (array) get_option( 'zgw_api_settings', array() );
		$clients = $clients['zgw-api-configured-clients'] ?? array();
		$clients = array_filter(
			$clients,
			function ( $client ) {
				return isset( $client['name'] );
			}
		);

		$options = array(
			array(
				'value' => '',
				'label' => 'Selecteer een leverancier',
			),
		);

		if (0 < count( $clients )) {
			$prepared_client_options = array_map(
				function ( $client ) {
					return array(
						'value' => $client['name'],
						'label' => $client['name'],
					);
				},
				$clients
			);

			$options = array_merge( $options, $prepared_client_options );
		}

		$result_inline_script = wp_add_inline_script(
			$block_type->editor_script,
			'window.owcMyServices = window.owcMyServices || {}; window.owcMyServices.zaakClientOptions = ' . wp_json_encode( $options ) . ';',
			'before'
		);

		if ( ! $result_inline_script ) {
			return;
		}

		$this->zaak_client_options_inline_script_added = true;
	}

	public function maybe_handle_information_object_download(string $template ): string
	{
		if (get_query_var( 'pagename' ) === 'zaak-download') {
			( new \OWC\My_Services\Controllers\InformationObjectDownloadController() )->handle();
		}

		return $template;
	}
}
