<?php

declare(strict_types=1);

/**
 * Bootstrap providers and containers.
 *
 * @package OWC_Mijn_Services
 * @author  Yard | Digital Agency
 * @since   0.1.0
 */

namespace OWC\My_Services;

/**
 * Exit when accessed directly.
 */
if ( ! defined( 'ABSPATH' )) {
	exit;
}

use DI\ContainerBuilder;
use OWC\My_Services\Macros\ZgwApiMacros;
use OWC\My_Services\Providers\BladeServiceProvider;
use OWC\My_Services\Providers\BlockServiceProvider;
use OWC\My_Services\Providers\GatekeeperServiceProvider;
use OWC\My_Services\Providers\SettingsServiceProvider;
use Psr\Container\ContainerInterface;

require_once __DIR__ . '/helpers.php';

/**
 * Bootstrap providers and containers.
 *
 * @since 0.1.0
 */
final class Bootstrap
{
	/**
	 * Dependency Injection container.
	 */
	private static ContainerInterface $container;

	/**
	 * Dependency providers.
	 */
	private array $providers;

	/**
	 * Plugin constructor.
	 */
	public function __construct()
	{
		self::$container = $this->build_container();
		$this->providers = $this->get_providers();
		$this->register_providers();
		$this->boot_providers();
		ZgwApiMacros::register();
	}

	/**
	 * Gets all providers
	 */
	protected function get_providers(): array
	{
		$providers = array(
			SettingsServiceProvider::class,
			BladeServiceProvider::class,
			BlockServiceProvider::class,
			GatekeeperServiceProvider::class,
		);

		foreach ($providers as &$provider) {
			$provider = self::$container->get( $provider );
		}

		return $providers;
	}

	/**
	 * Registers all providers.
	 */
	protected function register_providers(): void
	{
		foreach ($this->providers as $provider) {
			$provider->register();
		}
	}

	/**
	 * Boots all providers.
	 */
	protected function boot_providers(): void
	{
		foreach ($this->providers as $provider) {
			$provider->boot();
		}
	}

	/**
	 * Builds the container.
	 */
	protected function build_container(): ContainerInterface
	{
		$builder = new ContainerBuilder();

		// Use DIRECTORY_SEPARATOR to ensure the path works on both Windows and Unix-like systems.
		$config_path = __DIR__ . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . 'config' . DIRECTORY_SEPARATOR . 'php-di.php';

		// Add definitions using the correct path.
		$builder->addDefinitions( $config_path );

		return $builder->build();
	}

	public static function get_container(): ContainerInterface
	{
		return self::$container;
	}
}
