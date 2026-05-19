<?php

declare(strict_types=1);

/**
 * Autoloader for classes.
 *
 * @package OWC_Mijn_Services
 * @author  Yard | Digital Agency
 * @since   0.1.0
 */

/**
 * Exit when accessed directly.
 */
if ( ! defined( 'ABSPATH' )) {
	exit;
}

spl_autoload_register(
	function ( string $candidate_autoload_class ): void {
		// Namespace => base directory mapping.
		$prefixes = array(
			'OWC\\My_Services\\' => trailingslashit( OWC_MY_SERVICES_DIR_PATH ) . 'src/',
		);

		foreach ($prefixes as $prefix => $base_dir) {
			// Check if class uses this namespace prefix.
			if (str_starts_with( $candidate_autoload_class, $prefix )) {
				// Relative class name (remove namespace prefix)
				$relative_class = substr( $candidate_autoload_class, strlen( $prefix ) );

				// Replace namespace separators with directory separators.
				$relative_path = str_replace( '\\', DIRECTORY_SEPARATOR, $relative_class ) . '.php';

				$file = $base_dir . $relative_path;

				if (file_exists( $file )) {
					require_once $file;
				}
			}
		}
	}
);
