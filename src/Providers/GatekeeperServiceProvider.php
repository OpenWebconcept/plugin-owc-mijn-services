<?php

declare(strict_types=1);

/**
 * Register gatekeeper service provider.
 *
 * @package OWC_Mijn_Services
 * @author  Yard | Digital Agency
 * @since   0.4.0
 */

namespace OWC\My_Services\Providers;

/**
 * Exit when accessed directly.
 */
if ( ! defined( 'ABSPATH' )) {
	exit;
}

use OWC\My_Services\Controllers\GatekeeperAccessController;
use OWC\My_Services\Controllers\GatekeeperMetaboxController;

/**
 * Register gatekeeper service provider.
 *
 * @since 0.4.0
 */
class GatekeeperServiceProvider extends ServiceProvider
{
	/**
	 * @inheritDoc
	 */
	public function register(): void
	{
		add_action( 'admin_enqueue_scripts', $this->enqueue_scripts( ... ) );
		add_action( 'add_meta_boxes', ( new GatekeeperMetaboxController() )->register_metaboxes( ... ) );
		add_action( 'save_post', ( new GatekeeperMetaboxController() )->save_metabox_data( ... ) );
		add_action( 'template_redirect', ( new GatekeeperAccessController() )->handle_gatekeeper_restrictions( ... ) );
	}

	public function enqueue_scripts(): void
	{
		wp_enqueue_style(
			'owc-mijn-services-blocks-styles',
			owc_mijn_services_asset_url( 'css/editor.css' ),
			array()
		);
	}
}
