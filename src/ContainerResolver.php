<?php

declare(strict_types=1);

/**
 * Resolve entries from the DI-container.
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

use DI\Container;

/**
 * Class ContainerResolver
 *
 * @since 1.0.0
 */
class ContainerResolver
{
	protected Container $container;

	final private function __construct()
	{
		$this->container = Bootstrap::get_container();
	}

	/**
	 * @since 1.0.0
	 */
	public static function make(): self
	{
		return new static();
	}

	/**
	 * @since 1.0.0
	 */
	public function get(string $key )
	{
		return $this->container->get( $key ) ?? null;
	}

	/**
	 * @since 1.0.0
	 */
	public function set(string $key, mixed $value ): void
	{
		$this->container->set( $key, $value );
	}
}
