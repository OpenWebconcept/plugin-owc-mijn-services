<?php

declare(strict_types=1);

/**
 * Plugin lifecycle hooks for activation and deactivation.
 *
 * @package owc-mijn-services
 * @author  Yard | Digital Agency
 * @since   1.0.0
 */

namespace OWC\My_Services;

/**
 * Exit when accessed directly.
 */
if ( ! defined( 'ABSPATH' )) {
	exit;
}

use RecursiveDirectoryIterator;
use RecursiveIteratorIterator;
use StdClass;
use WP_Filesystem_Direct;

class PluginLifecycle
{
	/**
	 * @since 1.0.0
	 */
	public function activate(): void
	{
		// maybe for later use?
	}

	/**
	 * Executes actions on plugin deactivation.
	 *
	 * @since 1.0.0
	 */
	public function deactivate(): void
	{
		$this->remove_blade_cache_dir();
	}

	/**
	 * Removal of the Blade cache directory on plugin deactivation.
	 *
	 * @since 1.0.0
	 */
	private function remove_blade_cache_dir(): void
	{
		$uploads   = wp_upload_dir();
		$cache_dir = trailingslashit( $uploads['basedir'] ) . 'owc-mijn-services-blade';

		if ( ! is_dir( $cache_dir )) {
			return;
		}

		global $wp_filesystem;

		if ( ! $wp_filesystem instanceof WP_Filesystem_Direct) {
			require_once ABSPATH . 'wp-admin/includes/file.php';
			WP_Filesystem();
		}

		if ($wp_filesystem instanceof WP_Filesystem_Direct) {
			$wp_filesystem->delete( file: $cache_dir, recursive: true );
		} elseif (class_exists( 'WP_Filesystem_Direct' )) {
			// Force direct fallback.
			$fs = new WP_Filesystem_Direct( new StdClass() );
			$fs->delete( file: $cache_dir, recursive: true );
		} elseif (is_dir( $cache_dir )) {
			// Ultimate fallback. (plain PHP)
			$iterator = new RecursiveDirectoryIterator( $cache_dir, RecursiveDirectoryIterator::SKIP_DOTS );
			$files    = new RecursiveIteratorIterator( $iterator, RecursiveIteratorIterator::CHILD_FIRST );

			// First, delete all files and subdirectories, which is required before removing the cache directory itself.
			foreach ($files as $file) {
				$file->isDir() ? rmdir( $file ) : unlink( $file );
			}

			rmdir( $cache_dir );
		}
	}
}
