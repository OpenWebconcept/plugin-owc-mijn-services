<?php

declare (strict_types=1);

namespace OWC\My_Services;

/**
 * OWC Mijn Services.
 *
 * @package OWC_My_Services
 *
 * @author  Yard | Digital Agency
 *
 * @since   1.0.0
 *
 * Plugin Name:       OWC | Mijn Services
 * Plugin URI:        https://github.com/OpenWebconcept/plugin-owc-mijn-services
 * Description:       Toon mijn zaken
 * Version:           1.0.0
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
if (! defined('ABSPATH')) {
	exit;
}

const VERSION = '1.0.0';
define('OWC_MY_SERVICES_FILE', __FILE__);
define('OWC_MY_SERVICES_DIR_PATH', plugin_dir_path(OWC_MY_SERVICES_FILE));
define('OWC_MY_SERVICES_PLUGIN_URL', plugins_url('/', OWC_MY_SERVICES_FILE));
define('OWC_MY_SERVICES_SETTINGS_PREFIX', 'owc-my-services');
define('OWC_MY_SERVICES_PLUGIN_SLUG', 'owc-mijn-services');

$autoload = __DIR__ . '/vendor/autoload.php';

if (file_exists($autoload)) {
	require_once $autoload;
}

require_once __DIR__ . '/src/autoload.php';
require_once __DIR__ . '/src/Bootstrap.php';

add_action(
	'plugins_loaded',
	function () {
		$init = new \OWC\My_Services\Bootstrap();
	}
);
