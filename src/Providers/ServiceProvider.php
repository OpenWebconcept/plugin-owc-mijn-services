<?php
/**
 * Register service provider.
 *
 * @author  Yard | Digital Agency
 * @since   1.0.0
 */

namespace OWC\My_Services\Providers;

/**
 * Register service provider.
 *
 * @since 1.0.0
 */
class ServiceProvider
{
	protected array $services = [];

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
