<?php

declare(strict_types=1);

/**
 * Register blade service provider.
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

use OWC\My_Services\ContainerResolver;
use eftec\bladeone\BladeOne;

/**
 * Register blade service provider.
 *
 * @since 0.1.0
 */
class BladeServiceProvider extends ServiceProvider
{
	/**
	 * @inheritDoc
	 */
	public function register(): void
	{
		$container = ContainerResolver::make();

		$container->set(
			'view',
			function () {
				$default_views = array( OWC_MY_SERVICES_DIR_PATH . 'src/Views' );
				$views         = apply_filters( 'owcms::view/template-paths', $default_views );

				if ( ! is_array( $views ) || array() === $views) {
					$views = $default_views;
				}

				$views = array_filter( $views, 'is_dir' );

				$uploads   = wp_upload_dir();
				$cache_dir = trailingslashit( $uploads['basedir'] ) . 'owc-mijn-services-blade';

				if ( ! file_exists( $cache_dir )) {
					wp_mkdir_p( $cache_dir );
				}

				$blade = new BladeOne(
					$views,
					$cache_dir,
					BladeOne::MODE_AUTO
				);

				if (defined( 'WP_DEBUG' ) && WP_DEBUG) {
					$blade->setMode( BladeOne::MODE_DEBUG );
				}

				return $blade;
			}
		);
	}
}
