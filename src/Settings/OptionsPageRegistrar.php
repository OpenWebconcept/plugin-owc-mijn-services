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

use Exception;
use OWC\My_Services\CMB2\SelectOptgroupType;
use OWC\My_Services\Controllers\InformatieobjecttypenCacheController;
use OWC\My_Services\Services\LoggerService;
use OWC\My_Services\Settings\Adapters\InformatieobjecttypeAdapter;
use OWC\My_Services\Traits\Supplier;

use function OWC\ZGW\apiClientManager;

/**
 * Options page registrar for settings.
 *
 * @since 0.1.0
 */
class OptionsPageRegistrar
{
	use Supplier;

	/**
	 * Add settings fields.
	 */
	public function addSettingsFields(): void
	{
		if ( ! function_exists( 'new_cmb2_box' )) {
			LoggerService::log( 'error', 'CMB2 is not installed or activated. Settings fields cannot be added.' );

			return;
		}

		/**
		 * Filters the capability required to manage the 'Toegestane informatieobjecttypen' setting.
		 *
		 * Defaults to 'manage_options', in which case only administrators can see or edit the
		 * setting. Filtering this to a different capability additionally exposes the settings
		 * page (and only this one field on it) to any user with that capability.
		 *
		 * @since 0.11.0
		 */
		$allowed_informatieobjecttypen_capability = apply_filters( 'owcms::settings/allowed_informatieobjecttypen_capability', 'manage_options' );

		$options = new_cmb2_box(
			array(
				'id'           => 'owc-mijn-services-settings',
				'title'        => __( 'OWC Mijn Services', 'owc-mijn-services' ),
				'object_types' => array( 'options-page' ),

				'option_key'   => 'owc_mijn_services_settings',
				'parent_slug'  => 'options-general.php',
				'capability'   => $allowed_informatieobjecttypen_capability,
			)
		);

		$admin_only_show_on_cb = function () {
			return current_user_can( 'manage_options' );
		};

		$options->add_field(
			array(
				'name'            => __( 'Logboekinstellingen', 'owc-mijn-services' ),
				'desc'            => __( 'Schakel deze optie in om het loggen van systeemactiviteiten en foutmeldingen te activeren. Dit kan nuttig zijn voor het opsporen en oplossen van problemen binnen de plug-in.', 'owc-mijn-services' ),
				'id'              => 'owc-mijn-services-enable-logging',
				'type'            => 'checkbox',
				'sanitization_cb' => function ( $value ) {
					return $this->handle_unchecked_checkbox( $value );
				},
				'show_on_cb'      => $admin_only_show_on_cb,
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
				'show_on_cb'      => $admin_only_show_on_cb,
			)
		);

		$options->add_field(
			array(
				'name'         => __( 'Toegestane informatieobjecttypen', 'owc-mijn-services' ),
				'desc'         => __( 'Selecteer de informatieobjecttypen die mogen worden gebruikt voor het ophalen van informatieobjecten bij een zaak. Laat dit veld leeg om alle informatieobjecten te tonen.', 'owc-mijn-services' ),
				'id'           => 'owc-mijn-services-allowed-informatieobjecttypen',
				'type'         => 'select',
				'repeatable'   => true,
				'render_class' => SelectOptgroupType::class,
				'options_cb'   => function () {
					return $this->get_informatieobjecttype_options();
				},
				'after'        => function () {
					( new InformatieobjecttypenCacheController() )->render_clear_cache_button();
				},
				'attributes'   => array(
					'style' => 'width: 100%;',
				),
				'text'         => array(
					'add_row_text' => __( 'Informatieobjecttype toevoegen', 'owc-mijn-services' ),
				),
				'show_on_cb'   => function () use ( $allowed_informatieobjecttypen_capability ) {
					return current_user_can( 'manage_options' ) || current_user_can( $allowed_informatieobjecttypen_capability );
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
				'show_on_cb'      => $admin_only_show_on_cb,
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
				'show_on_cb'      => $admin_only_show_on_cb,
			)
		);

		$options->add_field(
			array(
				'name'            => __( 'Uitgebreide KVK-filtering inschakelen', 'owc-mijn-services' ),
				'desc'            => __( 'Schakel deze optie in om bij het filteren op KVK (eHerkenning) ook te filteren op RSIN of vestigingsnummer, indien beschikbaar. Niet elke leverancier ondersteunt deze filterparameters.', 'owc-mijn-services' ),
				'id'              => 'owc-mijn-services-enable-extended-kvk-filtering',
				'type'            => 'checkbox',
				'sanitization_cb' => function ( $value ) {
					return $this->handle_unchecked_checkbox( $value );
				},
				'show_on_cb'      => $admin_only_show_on_cb,
			)
		);

		$options->add_field(
			array(
				'name'            => __( 'Statusstappen zonder datum verbergen', 'owc-mijn-services' ),
				'desc'            => __( 'Schakel deze optie in om statusstappen zonder gezette datum te verbergen in het statusoverzicht van een zaak. Dit verbergt ook nog niet bereikte (toekomstige) stappen. Standaard worden alle statusstappen getoond.', 'owc-mijn-services' ),
				'id'              => 'owc-mijn-services-hide-status-steps-without-date',
				'type'            => 'checkbox',
				'sanitization_cb' => function ( $value ) {
					return $this->handle_unchecked_checkbox( $value );
				},
				'show_on_cb'      => $admin_only_show_on_cb,
			)
		);

		$options->add_field(
			array(
				'name'            => __( 'Volgnummers verbergen', 'owc-mijn-services' ),
				'desc'            => __( 'Schakel deze optie in om de volgnummers van statusstappen te verbergen in het statusoverzicht van een zaak. Standaard worden volgnummers getoond.', 'owc-mijn-services' ),
				'id'              => 'owc-mijn-services-hide-volgnummers',
				'type'            => 'checkbox',
				'sanitization_cb' => function ( $value ) {
					return $this->handle_unchecked_checkbox( $value );
				},
				'show_on_cb'      => $admin_only_show_on_cb,
			)
		);
	}

	/**
	 * Builds the list of informatieobjecttypen of all configured suppliers, grouped per supplier,
	 * to use as options for the SelectOptgroupType field.
	 *
	 * @return array<string, string|array<string, string>>
	 * @since 0.12.0
	 */
	private function get_informatieobjecttype_options(): array
	{
		$options = array(
			'' => __( 'Selecteer een informatieobjecttype', 'owc-mijn-services' ),
		);

		foreach ($this->get_configured_suppliers() as $supplier) {
			try {
				$client = apiClientManager()->getClient( $supplier['name'] );
			} catch (Exception $e) {
				LoggerService::log( 'error', $e->getMessage() );

				continue;
			}

			if ( ! $client->supports( 'informatieobjecttypen' )) {
				continue;
			}

			$types = ( new InformatieobjecttypeAdapter( $client, $supplier['name'] ) )->handle();

			if (array() === $types) {
				continue;
			}

			$options[ $supplier['name'] ] = $types;
		}

		return $options;
	}

	private function handle_unchecked_checkbox( mixed $value ): ?string
	{
		if ( ! is_string( $value ) || 'on' !== $value) {
			return '0';
		}

		return $value;
	}
}
