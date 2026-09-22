<?php

declare(strict_types=1);

/**
 * Register settings service provider.
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

use OWC\My_Services\Controllers\InformatieobjecttypenCacheController;
use OWC\My_Services\Settings\OptionsPageRegistrar;
use OWC\ZGW\ApiClientManager;
use OWC\ZGW\WordPress\ClientProvider;
use OWC\ZGW\WordPress\SettingsProvider;

/**
 * Register settings service provider.
 *
 * @since 0.1.0
 */
class SettingsServiceProvider extends ServiceProvider
{
	/**
	 * @inheritDoc
	 */
	public function register(): void
	{
		$manager = new ApiClientManager();
		$manager->container()->get( SettingsProvider::class )->register();
		$manager->container()->get( ClientProvider::class )->register();

		add_action( 'cmb2_admin_init', ( new OptionsPageRegistrar() )->addSettingsFields( ... ) );

		add_action( 'admin_post_' . InformatieobjecttypenCacheController::ACTION, ( new InformatieobjecttypenCacheController() )->handle_clear_cache_request( ... ) );
		add_action( 'admin_notices', ( new InformatieobjecttypenCacheController() )->render_cache_cleared_notice( ... ) );

		add_action( 'admin_enqueue_scripts', $this->enqueue_scripts( ... ) );
	}

	/**
	 * @inheritDoc
	 */
	public function boot(): void
	{
	}

	/**
	 * Loads Select2 for the grouped 'Toegestane informatieobjecttypen' select, only on this
	 * plugin's own settings page.
	 *
	 * @since NEXT
	 */
	public function enqueue_scripts( string $hook_suffix ): void
	{
		if ('settings_page_owc_mijn_services_settings' !== $hook_suffix) {
			return;
		}

		wp_enqueue_style( 'owc-mijn-services-select2', owc_mijn_services_asset_url( 'select2/select2.min.css' ), array(), \VERSION );
		wp_enqueue_script( 'owc-mijn-services-select2', owc_mijn_services_asset_url( 'select2/select2.min.js' ), array( 'jquery' ), \VERSION, true );

		wp_enqueue_style(
			'owc-mijn-services-informatieobjecttypen-select-style',
			owc_mijn_services_asset_url( 'css/informatieobjecttypen-select.css' ),
			array( 'owc-mijn-services-select2' ),
			\VERSION
		);

		wp_enqueue_script(
			'owc-mijn-services-informatieobjecttypen-select',
			owc_mijn_services_url( 'resources/js/admin/informatieobjecttypen-select.js' ),
			array( 'jquery', 'owc-mijn-services-select2' ),
			\VERSION,
			true
		);
	}
}
