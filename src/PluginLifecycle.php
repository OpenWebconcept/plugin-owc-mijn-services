<?php

declare(strict_types=1);

/**
 * Plugin lifecycle hooks for activation and deactivation.
 *
 * @package OWC_Mijn_Services
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

use OWC\My_Services\Services\LoggerService;
use RecursiveDirectoryIterator;
use RecursiveIteratorIterator;
use StdClass;
use WP_Filesystem_Direct;
use WP_Post;

class PluginLifecycle
{
	public function activate(): void
	{
		$this->insert_required_pages();
	}

	/**
	 * Executes actions on plugin deactivation.
	 */
	public function deactivate(): void
	{
		$this->remove_blade_cache_dir();
	}

	/**
	 * Inserts required pages into WordPress upon plugin activation.
	 */
	private function insert_required_pages(): void
	{
		$pages = array(
			array(
				'title'   => 'Zaak',
				'slug'    => 'zaak',
				'content' => '<!-- wp:owc-my-services/zaak /-->',
			),
			array(
				'title'   => 'Zaak download',
				'slug'    => 'zaak-download',
				'content' => '',
			),
		);

		foreach ($pages as $page) {
			$this->insert_page( $page );
		}
	}

	private function insert_page(array $pageData )
	{
		$page = get_page_by_path( $pageData['slug'] );

		if ($page instanceof WP_Post || is_array( $page )) {
			return; // Page already exists, do nothing.
		}

		$result = wp_insert_post(
			array(
				'post_title'   => $pageData['title'],
				'post_name'    => $pageData['slug'],
				'post_content' => $pageData['content'],
				'post_status'  => 'publish',
				'post_type'    => 'page',
			)
		);

		if (is_wp_error( $result )) {
			LoggerService::log(
				'error',
				sprintf(
					'Failed to create required page \'%s\' on plugin activation: %s',
					$pageData['title'],
					$result->get_error_message()
				)
			);
		}
	}

	/**
	 * Removal of the Blade cache directory on plugin deactivation.
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
