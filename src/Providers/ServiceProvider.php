<?php

declare(strict_types=1);

/**
 * Register service provider.
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

/**
 * Register service provider.
 *
 * @since 0.1.0
 */
class ServiceProvider
{
	protected array $services = array();

	/**
	 * Registers the services.
	 */
	public function register(): void
	{
		foreach ($this->services as $service) {
			$service->register();
		}
	}

	/**
	 * Boots the services.
	 */
	public function boot(): void
	{
		foreach ($this->services as $service) {
			if (false === $service) {
				continue;
			}
			$service->boot();
		}
	}
}
