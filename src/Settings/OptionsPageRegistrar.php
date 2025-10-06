<?php

declare(strict_types=1);

/**
 * Options page registrar for settings.
 *
 * @package owc-mijn-services
 * @author  Yard | Digital Agency
 * @since   1.0.0
 */

namespace OWC\My_Services\Settings;

/**
 * Exit when accessed directly.
 */
if ( ! defined( 'ABSPATH' )) {
	exit;
}

use OWC\My_Services\ContainerResolver;
use OWC\My_Services\LoggerZGW;

/**
 * Options page registrar for settings.
 *
 * @since 1.0.0
 */
class OptionsPageRegistrar
{
	protected LoggerZGW $logger;

	public function __construct()
	{
		$this->logger = ContainerResolver::make()->get( 'logger.zgw' );
	}

	/**
	 * Add settings fields.
	 *
	 * @since 1.0.0
	 */
	public function addSettingsFields(): void
	{
		if ( ! function_exists( 'new_cmb2_box' )) {
			$this->logger->error( 'CMB2 is not installed or activated. Settings fields cannot be added.' );

			return;
		}

		$options = new_cmb2_box(
			array(
				'id'           => 'owc-mijn-services-settings',
				'title'        => __( 'OWC Mijn Services', 'mijn-services' ),
				'object_types' => array( 'options-page' ),

				'option_key'   => 'owc_mijn_services_settings',
				'parent_slug'  => 'options-general.php',
				'capability'   => 'manage_options',
			)
		);

		$options->add_field(
			array(
				'name' => __( 'Logboekinstellingen', 'mijn-services' ),
				'desc' => __( 'Schakel deze optie in om het loggen van systeemactiviteiten en foutmeldingen te activeren. Dit kan nuttig zijn voor het opsporen en oplossen van problemen binnen de plug-in.', 'mijn-services' ),
				'id'   => 'owc-mijn-services-enable-logging',
				'type' => 'checkbox',
			)
		);
	}
}
