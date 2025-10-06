<?php

declare(strict_types=1);

/**
 * Plugin helpers.
 *
 * @package OWC_Mijn_Services
 * @author Yard | Digital Agency
 * @since 1.0.0
 */

/**
 * Exit when accessed directly.
 */
if ( ! defined( 'ABSPATH' )) {
	exit;
}

use OWC\My_Services\ContainerResolver;

/**
 * Add prefix for the given string.
 *
 * @package OWC_Mijn_Services
 * @author Yard | Digital Agency
 * @since 1.0.0
 */
if ( ! function_exists( 'owc_mijn_services_prefix' )) {
	function owc_mijn_services_prefix(string $name ): string
	{
		return 'owc-mijn-services-' . $name;
	}
}

/**
 * Generates a full plugin URL by appending the given path to the base plugin URL.
 *
 * @package OWC_Mijn_Services
 * @author Yard | Digital Agency
 * @since   1.0.0
 */
if ( ! function_exists( 'owc_mijn_services_url' )) {
	function owc_mijn_services_url(string $path ): string
	{
		return OWC_MY_SERVICES_PLUGIN_URL . $path;
	}
}

/**
 * Generates a full asset URL by appending the given path to the plugin's asset directory.
 *
 * @package OWC_Mijn_Services
 * @author Yard | Digital Agency
 * @since   1.0.0
 */
if ( ! function_exists( 'owc_mijn_services_asset_url' )) {
	function owc_mijn_services_asset_url(string $path ): string
	{
		return owc_mijn_services_url( 'build/' . $path );
	}
}

/**
 * Generates a full asset path by appending the given path to the plugin's asset directory.
 *
 * @package OWC_Mijn_Services
 * @author Yard | Digital Agency
 * @since   1.0.0
 */
if ( ! function_exists( 'owc_mijn_services_asset_path' )) {
	function owc_mijn_services_asset_path(string $path ): string
	{
		return OWC_MY_SERVICES_DIR_PATH . 'build/' . $path;
	}
}

/**
 * Render a view file.
 *
 * @package OWC_Mijn_Services
 * @author Yard | Digital Agency
 * @since 1.0.0
 */
if ( ! function_exists( 'owc_mijn_services_render_view' )) {
	function owc_mijn_services_render_view(string $file_path, $data = array() )
	{
		$view = ContainerResolver::make()->get( 'view' );

		try {
			return $view->run( $file_path, $data );
		} catch (Throwable $e) {
			if (defined( 'WP_DEBUG' ) && WP_DEBUG) {
				error_log( 'Blade render error: ' . $e->getMessage() );
			}

			return '';
		}
	}
}
