<?php
/**
 * A wrapper class for the Monolog Logger.
 * This class integrates with the application's container to check if logging is enabled before processing log entries.
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

use Monolog\Logger;
use Monolog\Level;
use OWCGravityFormsZGW\ContainerResolver;

/**
 * A wrapper class for the Monolog Logger.
 *
 * @since 1.0.0
 */
class LoggerZGW
{
	protected Logger $logger;

	public function __construct(Logger $logger )
	{
		$this->logger = $logger;
	}

	/**
	 * @since 1.0.0
	 */
	public function debug($message, array $context = array() ): void
	{
		$this->add_record( Level::fromName( 'debug' )->value, $message, $context );
	}

	/**
	 * @since 1.0.0
	 */
	public function info($message, array $context = array() ): void
	{
		$this->add_record( Level::fromName( 'info' )->value, $message, $context );
	}

	/**
	 * @since 1.0.0
	 */
	public function notice($message, array $context = array() ): void
	{
		$this->add_record( Level::fromName( 'notice' )->value, $message, $context );
	}

	/**
	 * @since 1.0.0
	 */
	public function warning($message, array $context = array() ): void
	{
		$this->add_record( Level::fromName( 'warning' )->value, $message, $context );
	}

	/**
	 * @since 1.0.0
	 */
	public function error($message, array $context = array() ): void
	{
		$this->add_record( Level::fromName( 'error' )->value, $message, $context );
	}

	/**
	 * @since 1.0.0
	 */
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
