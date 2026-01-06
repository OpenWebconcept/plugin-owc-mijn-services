<?php

declare(strict_types=1);

/**
 * OWC Mijn Services.
 *
 * @package OWC_My_Services
 * @author  Yard | Digital Agency
 * @since   0.1.0
 *
 * Plugin Name:       OWC | Mijn Services
 * Plugin URI:        https://github.com/OpenWebconcept/plugin-owc-mijn-services
 * Description:       Toon mijn zaken
 * Version:           0.4.3
 * Author:            Yard | Digital Agency
 * Author URI:        https://www.yard.nl
 * License:           EUPL
 * License URI:       https://github.com/OpenWebconcept/plugin-owc-mijn-services/LICENSE.txt
 * Text Domain:       owc-my-services
 * Domain Path:       /languages
 * Requires at least: 6.7
 * Requires PHP:      8.1
 * Requires Plugins:  cmb2
 */

/**
 * Exit when accessed directly.
 */
if ( ! defined( 'ABSPATH' )) {
	exit;
}

const VERSION = '0.4.3';
define( 'OWC_MY_SERVICES_FILE', __FILE__ );
define( 'OWC_MY_SERVICES_DIR_PATH', plugin_dir_path( OWC_MY_SERVICES_FILE ) );
define( 'OWC_MY_SERVICES_PLUGIN_URL', plugins_url( '/', OWC_MY_SERVICES_FILE ) );
define( 'OWC_MY_SERVICES_SETTINGS_PREFIX', 'owc-my-services' );
define( 'OWC_MY_SERVICES_PLUGIN_SLUG', 'owc-mijn-services' );
define( 'OWC_MY_SERVICES_LOGGER_DEFAULT_MAX_FILES', 7 );
define( 'OWC_MY_SERVICES_ADD_ON_SETTINGS_PREFIX', 'owc-mijn-services-add-on' );

$autoload = __DIR__ . '/vendor/autoload.php';

if (file_exists( $autoload )) {
	require_once $autoload;
} else {
	require_once __DIR__ . '/src/autoload.php';
}

add_action(
	'after_setup_theme',
	function () {
		$init = new \OWC\My_Services\Bootstrap();
	}
);

register_activation_hook( __FILE__, ( new \OWC\My_Services\PluginLifecycle() )->activate( ... ) );
register_deactivation_hook( __FILE__, ( new \OWC\My_Services\PluginLifecycle() )->deactivate( ... ) );
