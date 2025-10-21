<?php

declare(strict_types=1);

use DI\Container;
use OWC\My_Services\Auth\DigiD;
use OWC\My_Services\Settings\Settings;

return array(
	/**
	 * Suppliers
	 *
	 * Best kept in sync with:
	 * https://github.com/OpenWebconcept/owc-zgw-api/blob/main/src/WordPress/SettingsProvider.php#L50
	 */
	'suppliers'                   => array(
		'openzaak'  => 'OpenZaak',
		'xxllnc'    => 'XXLLNC',
		'rxmission' => 'RxMission',
		'decosjoin' => 'Decos JOIN',
		'procura'   => 'Procura',
	),

	/**
	 * Specific client settings.
	 */
	'oz.enabled'                  => function (Container $container ) {
		return (bool) $container->make( 'zgw.get-configured-client', array( 'openzaak' ) );
	},
	'oz.api-client-settings'      => function (Container $container ) {
		return $container->make( 'zgw.get-configured-client', array( 'openzaak' ) );
	},
	'xxllnc.enabled'              => function (Container $container ) {
		return (bool) $container->make( 'zgw.get-configured-client', array( 'xxllnc' ) );
	},
	'xxllnc.api-client-settings'  => function (Container $container ) {
		return $container->make( 'zgw.get-configured-client', array( 'xxllnc' ) );
	},
	'dj.enabled'                  => function (Container $container ) {
		return (bool) $container->make( 'zgw.get-configured-client', array( 'decosjoin' ) );
	},
	'dj.api-client-settings'      => function (Container $container ) {
		return $container->make( 'zgw.get-configured-client', array( 'decosjoin' ) );
	},
	'rx.enabled'                  => function (Container $container ) {
		return (bool) $container->make( 'zgw.get-configured-client', array( 'rxmission' ) );
	},
	'rx.api-client-settings'      => function (Container $container ) {
		return $container->make( 'zgw.get-configured-client', array( 'rxmission' ) );
	},
	'procura.enabled'             => function (Container $container ) {
		return (bool) $container->make( 'zgw.get-configured-client', array( 'procura' ) );
	},
	'procura.api-client-settings' => function (Container $container ) {
		return $container->make( 'zgw.get-configured-client', array( 'procura' ) );
	},

	/**
	 * Generic client settings.
	 */
	'zgw.get-configured-client'   => function (Container $container, string $type, string $name ) {
		$clients = $container->make( 'zgw.api.settings', array( 'zgw-api-configured-clients' ) ) ?: array();
		$clients = array_filter(
			$clients,
			function ($client ) use ($name ) {
				return $name === $client['client_type'];
			}
		);
		$client  = reset( $clients );

		return is_array( $client ) && 0 < count( $client ) ? $client : array();
	},
	'zgw.api-configured-clients'  => function (Container $container ) {
		return $container->make( 'zgw.api.settings', array( 'zgw-api-configured-clients' ) );
	},
	'zgw.api.settings'            => function (Container $container, string $type, string $name ) {
		return Settings::make( 'zgw_api_settings' )->get( $name );
	},
	'zgw.settings'                => function (Container $container, string $type, string $name ) {
		return Settings::make( 'owc_mijn_services_settings' )->get( $name );
	},
	'digid.current_user_bsn'      => DigiD::make()->bsn(),

	/**
	 * ZGW error logging.
	 */
	'message.logger.active'       => function (Container $container ) {
		return (bool) $container->make( 'zgw.settings', array( 'owc-mijn-services-enable-logging' ) );
	},
	'message.logger.path'         => sprintf( '%s/owc-my-services-log.json', dirname( ABSPATH ) ),
	'message.logger'              => function (Container $container ) {
		$logger   = new \Monolog\Logger( 'owc_my_services_log' );
		$maxFiles = apply_filters( 'owcms::logger/rotating_filer_handler_max_files', OWC_MY_SERVICES_LOGGER_DEFAULT_MAX_FILES );

		$handler = ( new \Monolog\Handler\RotatingFileHandler(
			filename: $container->get( 'message.logger.path' ),
			maxFiles: is_int( $maxFiles ) && 0 < $maxFiles ? $maxFiles : OWC_MY_SERVICES_LOGGER_DEFAULT_MAX_FILES,
			level: \Monolog\Level::Debug
		) )->setFormatter( new \Monolog\Formatter\JsonFormatter() );

		$logger->pushHandler( $handler );
		$logger->pushProcessor( new \Monolog\Processor\IntrospectionProcessor() );

		return $logger;
	},

	'logger.zgw'                  => function (Container $container ) {
		return new \OWC\My_Services\LoggerZGW( $container->get( 'message.logger' ) );
	},
);
