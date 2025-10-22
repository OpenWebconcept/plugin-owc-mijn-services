<?php

declare(strict_types=1);

/**
 * A wrapper class for the Monolog Logger.
 * This class integrates with the application's container to check if logging is enabled before processing log entries.
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

use Monolog\Level;
use Monolog\Logger;

class LoggerZGW
{
	protected Logger $logger;

	public function __construct(Logger $logger )
	{
		$this->logger = $logger;
	}

	public function debug($message, array $context = array() ): void
	{
		$this->add_record( Level::fromName( 'debug' )->value, $message, $context );
	}

	public function info($message, array $context = array() ): void
	{
		$this->add_record( Level::fromName( 'info' )->value, $message, $context );
	}

	public function notice($message, array $context = array() ): void
	{
		$this->add_record( Level::fromName( 'notice' )->value, $message, $context );
	}

	public function warning($message, array $context = array() ): void
	{
		$this->add_record( Level::fromName( 'warning' )->value, $message, $context );
	}

	public function error($message, array $context = array() ): void
	{
		$this->add_record( Level::fromName( 'error' )->value, $message, $context );
	}

	protected function add_record(int $level, string $message, array $context = array() ): void
	{
		if ( ! ( (bool) ContainerResolver::make()->get( 'message.logger.active' ) )) {
			return;
		}

		$this->logger->addRecord(
			$level,
			sprintf( 'OWC\My_Services: %s', $message ),
			$context
		);
	}
}
