<?php

declare(strict_types=1);
/**
 * Register settings service provider.
 *
 * @package OWC_GravityForms_ZGW
 *
 * @author  Yard | Digital Agency
 *
 * @since   1.0.0
 */

namespace OWC\My_Services\Providers;

/**
 * Exit when accessed directly.
 */
if (! defined('ABSPATH')) {
	exit;
}

use OWC\ZGW\ApiClientManager;
use OWC\ZGW\WordPress\ClientProvider;

use OWC\ZGW\WordPress\SettingsProvider;

/**
 * Register settings service provider.
 *
 * @since 1.0.0
 */
class SettingsServiceProvider extends ServiceProvider
{
	/**
	 * @inheritDoc
	 */
	public function register(): void
	{
		$manager = new ApiClientManager();
		$manager->container()->get(SettingsProvider::class)->register();
		$manager->container()->get(ClientProvider::class)->register();

		$manager = new ApiClientManager();
		$manager->container()->get(SettingsProvider::class)->register();
		$manager->container()->get(ClientProvider::class)->register();
	}

	public function boot(): void
	{
	}
}
