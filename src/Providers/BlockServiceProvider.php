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

	/**
	 * @inheritDoc
	 */
	public function register(): void
	{
		add_filter( 'query_vars', $this->add_query_vars( ... ) );
		add_action( 'init', $this->register_rewrite_rules( ... ) );
		add_action( 'init', $this->flush_rewrite_rules( ... ) );
		add_action( 'wp_enqueue_scripts', $this->enqueue_scripts( ... ) );
		add_action( 'enqueue_block_editor_assets', $this->enqueue_block_editor_assets( ... ) );
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
	 * @since NEXT
	 */
	public function flush_rewrite_rules(): void
	{
		if ( ! get_option( 'owc_my_services_flush_rewrite_rules' )) {
			return;
		}

		flush_rewrite_rules();
		delete_option( 'owc_my_services_flush_rewrite_rules' );
	}

	/**
	 * Enqueue frontend scripts.
	 */
	public function enqueue_scripts(): void
	{
		wp_enqueue_style(
			'owc-mijn-services-blocks-styles',
			owc_mijn_services_asset_url( 'css/style.css' ),
			array()
		);
	}

	/**
	 * Enqueue block editor scripts.
	 */
	public function enqueue_block_editor_assets(): void
	{
		wp_enqueue_style(
			'owc-mijn-services-blocks-editor-styles',
			owc_mijn_services_asset_url( 'css/editor.css' ),
			array()
		);
	}

	public function register_block_category(array $blockCategories, WP_Block_Editor_Context $blockEditorContext ): array
	{
		$blockCategories[] = array(
			'slug'  => self::BLOCK_CATEGORY,
			'title' => 'OWC Mijn Services',
		);

		return $blockCategories;
	}

	public function register_blocks(): void
	{
		register_block_type(
			owc_mijn_services_asset_path( 'mijn-zaken' ),
			array(
				'render_callback' => array( new MijnZaken(), 'render' ),
				'category'        => self::BLOCK_CATEGORY,
				'attributes'      => array(
					'zaakClient' => array(
						'type'    => 'string',
						'default' => 'openzaak',
					),
					'perPage'    => array(
						'type'    => 'number',
						'default' => 10,
					),
				),
			)
		);

		register_block_type(
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
	}

	public function maybe_handle_information_object_download(string $template ): string
	{
		if (get_query_var( 'pagename' ) === 'zaak-download') {
			( new \OWC\My_Services\Controllers\InformationObjectDownloadController() )->handle();
		}

		return $template;
	}
}
