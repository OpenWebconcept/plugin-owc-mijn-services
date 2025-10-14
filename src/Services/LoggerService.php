<?php

declare(strict_types=1);

/**
 * Logger service.
 *
 * @package OWC_Mijn_Services
 * @author  Yard | Digital Agency
 * @since   1.0.0
 */

namespace OWC\My_Services\Services;

/**
 * Exit when accessed directly.
 */
if ( ! defined( 'ABSPATH' )) {
	exit;
}

use Exception;
use Monolog\Level;
use OWC\My_Services\ContainerResolver;

/**
 * Logger service.
 *
 * @since 1.0.0
 */
class LoggerService
{
	/**
	 * @since 1.0.0
	 */
	public static function log(string $level, string $message, array $context = array() ): void
	{
		$logger = ContainerResolver::make()->get( 'logger.zgw' );

		switch (strtolower( $level )) {
			case 'debug':
				$logger->debug( $message, $context );
				break;
			case 'info':
				$logger->info( $message, $context );
				break;
			case 'notice':
				$logger->notice( $message, $context );
				break;
			case 'warning':
				$logger->warning( $message, $context );
				break;
			case 'error':
				$logger->error( $message, $context );
				break;
		}
	}

	/**
	 * @since 1.0.0
	 */
	public static function log_exception(Exception $exception, array $context = array() ): void
	{
		try {
			$level  = Level::from( $exception->getCode() );
			$method = $level->toPsrLogLevel();
		} catch (Exception $e) {
			$method = 'error';
		}

		$logger = ContainerResolver::make()->get( 'logger.zgw' );

		if ( ! method_exists( $logger, $method )) {
			$method = 'error';
		}

		/**
		 * Intercept the exception for further processing, such as logging to e.g. Sentry from the project itself.
		 *
		 * @param Exception $exception The exception to intercept.
		 * @param string $method PSR‑3 log level name (e.g. 'error', 'debug').
		 *
		 * @since 1.0.0
		 */
		do_action( 'owcms::exception/intercept', $exception, $method );

		$logger->$method( $exception->getMessage(), $context );
	}
}
