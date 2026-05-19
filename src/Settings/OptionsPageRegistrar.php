<?php

declare(strict_types=1);

/**
 * Options page registrar for settings.
 *
 * @package OWC_Mijn_Services
 * @author  Yard | Digital Agency
 * @since   0.1.0
 */

namespace OWC\My_Services\Settings;

/**
 * Exit when accessed directly.
 */
if ( ! defined( 'ABSPATH' )) {
	exit;
}

use OWC\My_Services\Services\LoggerService;

/**
 * Options page registrar for settings.
 *
 * @since 0.1.0
 */
class OptionsPageRegistrar
{
	/**
	 * Add settings fields.
	 */
	public function addSettingsFields(): void
	{
		if ( ! function_exists( 'new_cmb2_box' )) {
			LoggerService::log( 'error', 'CMB2 is not installed or activated. Settings fields cannot be added.' );

			return;
		}

		$options = new_cmb2_box(
			array(
				'id'           => 'owc-mijn-services-settings',
				'title'        => __( 'OWC Mijn Services', 'owc-mijn-services' ),
				'object_types' => array( 'options-page' ),

				'option_key'   => 'owc_mijn_services_settings',
				'parent_slug'  => 'options-general.php',
				'capability'   => 'manage_options',
			)
		);

		$options->add_field(
			array(
				'name'            => __( 'Logboekinstellingen', 'owc-mijn-services' ),
				'desc'            => __( 'Schakel deze optie in om het loggen van systeemactiviteiten en foutmeldingen te activeren. Dit kan nuttig zijn voor het opsporen en oplossen van problemen binnen de plug-in.', 'owc-mijn-services' ),
				'id'              => 'owc-mijn-services-enable-logging',
				'type'            => 'checkbox',
				'sanitization_cb' => function ( $value ) {
					return $this->handle_unchecked_checkbox( $value );
				},
			)
		);

		$options->add_field(
			array(
				'name'            => __( 'DOC- en DOCX-documenten uitsluiten', 'owc-mijn-services' ),
				'desc'            => __( 'Schakel deze optie in om DOC- en DOCX-documenten niet op te halen bij het tonen van een zaak.', 'owc-mijn-services' ),
				'id'              => 'owc-mijn-services-exclude-doc-docx',
				'type'            => 'checkbox',
				'sanitization_cb' => function ( $value ) {
					return $this->handle_unchecked_checkbox( $value );
				},
			)
		);

		$options->add_field(
			array(
				'name'            => __( 'Productiecontroles uitschakelen', 'owc-mijn-services' ),
				'desc'            => __( 'Schakel deze optie in om de verplichting van het gebruik van de blokattributen \'Filter op BSN\' of \'Filter op KVK\' uit te zetten. Standaard zijn productiecontroles ingeschakeld en is minimaal één van beide filterattributen vereist.', 'owc-mijn-services' ),
				'id'              => 'owc-mijn-services-disable-production-checks',
				'type'            => 'checkbox',
				'sanitization_cb' => function ( $value ) {
					return $this->handle_unchecked_checkbox( $value );
				},
			)
		);

		$options->add_field(
			array(
				'name'            => __( 'Filtering op KVK uitschakelen', 'owc-mijn-services' ),
				'desc'            => __( 'Schakel deze optie in als de leverancier het filteren op KVK (eHerkenning) niet ondersteunt. Gebruikers die via eHerkenning zijn ingelogd kunnen dan geen zaken ophalen.', 'owc-mijn-services' ),
				'id'              => 'owc-mijn-services-disable-kvk-filtering',
				'type'            => 'checkbox',
				'sanitization_cb' => function ( $value ) {
					return $this->handle_unchecked_checkbox( $value );
				},
			)
		);
	}

	private function handle_unchecked_checkbox( mixed $value ): ?string
	{
		if ( ! is_string( $value ) || 'on' !== $value) {
			return '0';
		}

		return $value;
	}
}
