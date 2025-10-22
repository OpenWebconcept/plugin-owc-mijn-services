<?php

declare(strict_types=1);

/**
 * Resolve entries from the DI-container.
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

use DI\Container;

/**
 * Class ContainerResolver
 *
 * @since 0.1.0
 */
class ContainerResolver
{
	protected Container $container;

	final private function __construct()
	{
		$this->container = Bootstrap::get_container();
	}

	public static function make(): self
	{
		return new static();
	}

	public function get(string $key )
	{
		return $this->container->get( $key ) ?? null;
	}

	public function set(string $key, mixed $value ): void
	{
		$this->container->set( $key, $value );
	}
}
