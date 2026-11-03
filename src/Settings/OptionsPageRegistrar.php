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

use OWC\My_Services\CMB2\SelectOptgroupType;
use OWC\My_Services\Controllers\InformatieobjecttypenCacheController;
use OWC\My_Services\Controllers\ZaaktypenCacheController;
use CMB2_Field;
use OWC\My_Services\Services\LoggerService;
use OWC\My_Services\Settings\Adapters\ZaaktypeAdapter;
use OWC\My_Services\Traits\Supplier;

/**
 * Options page registrar for settings.
 *
 * @since 0.1.0
 */
class OptionsPageRegistrar
{
	use Supplier;

	/**
	 * @since NEXT
	 */
	public const ZAAKTYPE_START_DATES_FIELD_ID = 'owc-mijn-services-zaaktype-start-dates';

	/**
	 * Transient prefix (suffixed with the user ID) holding what the last save of the
	 * 'Startdatum per zaaktype' rows has to report, to show it as notices after the redirect.
	 *
	 * @since NEXT
	 */
	private const START_DATES_NOTICE_TRANSIENT = 'owcms-zaaktype-start-dates-notice-';

	/**
	 * Zaaktypen per filtering supplier, cached for the 'Startdatum per zaaktype' rows.
	 *
	 * @since NEXT
	 * @var array<string, array<string, string>>|null
	 */
	private ?array $zaaktype_catalog = null;

	/**
	 * Add settings fields.
	 */
	public function addSettingsFields(): void
	{
		if ( ! function_exists( 'new_cmb2_box' )) {
			LoggerService::log( 'error', 'CMB2 is not installed or activated. Settings fields cannot be added.' );

			return;
		}

		$allowed_settings_capability = self::get_allowed_settings_capability();

		$options = new_cmb2_box(
			array(
				'id'           => 'owc-mijn-services-settings',
				'title'        => __( 'OWC Mijn Services', 'owc-mijn-services' ),
				'object_types' => array( 'options-page' ),

				'option_key'   => 'owc_mijn_services_settings',
				'parent_slug'  => 'options-general.php',
				'capability'   => $allowed_settings_capability,
			)
		);

		$admin_only_show_on_cb = function () {
			return current_user_can( 'manage_options' );
		};

		$allowed_settings_show_on_cb = function () use ( $allowed_settings_capability ) {
			return current_user_can( 'manage_options' ) || current_user_can( $allowed_settings_capability );
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
				'render_class' => SelectOptgroupType::class,
				'options_cb'   => function () {
					return $this->get_informatieobjecttype_options();
				},
				'after'        => function () {
					( new InformatieobjecttypenCacheController() )->render_clear_cache_button();
				},
				'attributes'   => array(
					'class'            => 'cmb2_select owcms-informatieobjecttypen-select',
					'style'            => 'width: 100%;',
					'data-placeholder' => __( 'Zoek en selecteer informatieobjecttypen…', 'owc-mijn-services' ),
				),
				'show_on_cb'   => $allowed_settings_show_on_cb,
			)
		);

		$options->add_field(
			array(
				'name'              => __( 'Zaaktypefiltering ondersteunde leveranciers', 'owc-mijn-services' ),
				'desc'              => __( 'Selecteer de leveranciers waarvan de Zaken API filteren op zaaktype ondersteunt. Alleen voor geselecteerde leveranciers wordt gefilterd op de zaaktypen die in het \'Mijn zaken\'-blok zijn geselecteerd; voor niet geselecteerde leveranciers worden altijd alle zaken opgehaald.', 'owc-mijn-services' ),
				'id'                => 'owc-mijn-services-zaaktype-filtering-suppliers',
				'type'              => 'multicheck',
				'select_all_button' => false,
				'options_cb'        => function () {
					return $this->get_supplier_options();
				},
				'sanitization_cb'   => function ( $value ) {
					return is_array( $value ) ? array_values( array_filter( $value, 'is_string' ) ) : array();
				},
				'show_on_cb'        => $allowed_settings_show_on_cb,
			)
		);

		$options->add_field(
			array(
				'name'       => '', // Left blank to avoid duplicating the label_cb heading below.
				'desc'       => __( 'De zaaktypen die gebruikt worden voor de zaaktypefilter in het \'Mijn zaken\'-blok worden dagelijks automatisch ververst. Gebruik onderstaande knop om ze direct opnieuw op te halen.', 'owc-mijn-services' ),
				'id'         => 'owc-mijn-services-zaaktypen-cache',
				'type'       => 'title',
				'label_cb'   => function () {
					// 'title' fields have no label_cb by default, so restore it to match other rows.
					return sprintf( '<label>%s</label>', esc_html__( 'Zaaktypen', 'owc-mijn-services' ) );
				},
				'after'      => function () {
					( new ZaaktypenCacheController() )->render_refetch_button();
				},
				'show_on_cb' => $allowed_settings_show_on_cb,
			)
		);

		$start_dates_group = $options->add_field(
			array(
				'name'            => __( 'Startdatum per zaaktype', 'owc-mijn-services' ),
				'desc'            => __( 'Voeg een zaaktype toe en kies vanaf welke startdatum zaken van dat zaaktype getoond worden. Dit geldt alleen voor \'Mijn zaken\'-blokken waarin dat zaaktype is geselecteerd; blokken zonder zaaktypeselectie tonen altijd alle zaken. Alleen zaaktypen van leveranciers met zaaktypefiltering zijn beschikbaar. Elk zaaktype kan maar één keer worden toegevoegd.', 'owc-mijn-services' ),
				'id'              => self::ZAAKTYPE_START_DATES_FIELD_ID,
				'type'            => 'group',
				'repeatable'      => true,
				'sanitization_cb' => function ( $rows ) {
					return $this->sanitize_zaaktype_start_dates( $rows );
				},
				'options'         => array(
					'group_title'   => __( 'Zaaktype {#}', 'owc-mijn-services' ),
					'add_button'    => __( 'Zaaktype toevoegen', 'owc-mijn-services' ),
					'remove_button' => __( 'Verwijderen', 'owc-mijn-services' ),
					'sortable'      => false,
				),
				'show_on_cb'      => $allowed_settings_show_on_cb,
			)
		);

		$options->add_group_field(
			$start_dates_group,
			array(
				'name'          => __( 'Zaaktype', 'owc-mijn-services' ),
				'id'            => ZaaktypeStartDates::KEY_ZAAKTYPE,
				'type'          => 'select',
				'render_class'  => SelectOptgroupType::class,
				'select_single' => true,
				'options_cb'    => function ( $field ) {
					return $this->get_zaaktype_start_date_options( $field );
				},
				'attributes'    => array(
					'class'            => 'cmb2_select owcms-zaaktype-select',
					'style'            => 'width: 100%;',
					'data-placeholder' => __( 'Zoek en selecteer een zaaktype…', 'owc-mijn-services' ),
				),
			)
		);

		$options->add_group_field(
			$start_dates_group,
			array(
				'name'        => __( 'Tonen vanaf', 'owc-mijn-services' ),
				'desc'        => __( 'Zaken met een startdatum vóór deze datum worden niet getoond.', 'owc-mijn-services' ),
				'id'          => ZaaktypeStartDates::KEY_START_DATE,
				'type'        => 'text_date',
				'date_format' => ZaaktypeStartDates::DATE_FORMAT,
				'attributes'  => array(
					'autocomplete' => 'off',
				),
			)
		);

		// Resolved from the selected zaaktype on save (see sanitize_zaaktype_start_dates()), so
		// the start date keeps applying to new versions of the zaaktype, even when the saved
		// version disappears from the ZTC. Registered as fields because CMB2 only saves the
		// registered sub fields of a group.
		foreach (array( ZaaktypeStartDates::KEY_IDENTIFICATIE, ZaaktypeStartDates::KEY_SUPPLIER ) as $resolved_field_id) {
			$options->add_group_field(
				$start_dates_group,
				array(
					'id'   => $resolved_field_id,
					'type' => 'hidden',
				)
			);
		}

		$options->add_field(
			array(
				'name'              => __( 'Initiatorrolfiltering uitschakelen', 'owc-mijn-services' ),
				'desc'              => __( 'Standaard worden alleen zaken getoond waarbij de ingelogde gebruiker de rol \'initiator\' heeft. Selecteer de leveranciers die dit niet ondersteunen, bijvoorbeeld omdat \'omschrijvingGeneriek\' van de rol niet wordt gevuld; voor geselecteerde leveranciers wordt niet op de initiatorrol gefilterd.', 'owc-mijn-services' ),
				'id'                => 'owc-mijn-services-initiator-filtering-excluded-suppliers',
				'type'              => 'multicheck',
				'select_all_button' => false,
				'options_cb'        => function () {
					return $this->get_supplier_options();
				},
				'sanitization_cb'   => function ( $value ) {
					return is_array( $value ) ? array_values( array_filter( $value, 'is_string' ) ) : array();
				},
				'show_on_cb'        => $admin_only_show_on_cb,
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
				'name'            => __( 'Statusstappen zonder datum verbergen', 'owc-mijn-services' ),
				'desc'            => __( 'Schakel deze optie in om statusstappen zonder gezette datum te verbergen in het statusoverzicht van een zaak. Dit verbergt ook nog niet bereikte (toekomstige) stappen. Standaard worden alle statusstappen getoond.', 'owc-mijn-services' ),
				'id'              => 'owc-mijn-services-hide-status-steps-without-date',
				'type'            => 'checkbox',
				'sanitization_cb' => function ( $value ) {
					return $this->handle_unchecked_checkbox( $value );
				},
				'show_on_cb'      => $allowed_settings_show_on_cb,
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
				'show_on_cb'      => $allowed_settings_show_on_cb,
			)
		);
	}

	/**
	 * Builds the list of informatieobjecttypen of all configured suppliers, grouped per supplier,
	 * to use as options for the SelectOptgroupType field.
	 *
	 * @return array<string, array<string, string>>
	 * @since 0.12.0
	 */
	private function get_informatieobjecttype_options(): array
	{
		return ( new InformatieobjecttypeCatalog() )->per_supplier();
	}

	/**
	 * Sanitizes the 'Startdatum per zaaktype' rows on save:
	 *
	 * 1. Resolves the identificatie and supplier of each row's zaaktype and stores them with
	 *    the row, overwriting whatever was submitted. The identificatie is shared by all versions
	 *    of a zaaktype, so the start date keeps applying after the zaaktype is re-versioned, even
	 *    when the saved version disappears from the ZTC or the zaaktypen cache is empty.
	 * 2. Keeps a single row per zaaktype.
	 *
	 * Remembers removed duplicates and unresolvable zaaktypen, so a notice can explain them
	 * after the settings page redirect.
	 *
	 * @since NEXT
	 */
	private function sanitize_zaaktype_start_dates( mixed $rows ): mixed
	{
		if ( ! is_array( $rows )) {
			return $rows;
		}

		$catalog    = new ZaaktypeCatalog();
		$previous   = $this->get_saved_zaaktype_identities();
		$unresolved = array();
		$keys       = array();

		foreach ($rows as $index => $row) {
			$url = is_array( $row ) ? trim( (string) ( $row[ ZaaktypeStartDates::KEY_ZAAKTYPE ] ?? '' ) ) : '';

			if ('' === $url) {
				continue;
			}

			// A zaaktype URL always belongs to the same identificatie, so when it can't be resolved
			// right now (e.g. the ZTC is unreachable), what was resolved on an earlier save still holds.
			$identity = $catalog->identify( $url ) ?? $previous[ $url ] ?? null;

			$rows[ $index ][ ZaaktypeStartDates::KEY_IDENTIFICATIE ] = $identity['identificatie'] ?? '';
			$rows[ $index ][ ZaaktypeStartDates::KEY_SUPPLIER ]      = $identity['supplier'] ?? '';

			if (null === $identity) {
				$unresolved[] = $url;

				continue;
			}

			$keys[ $url ] = $identity['supplier'] . '|' . $identity['identificatie'];
		}

		$result = ZaaktypeStartDates::deduplicate_rows( $rows, $keys );

		if (0 < $result['removed'] || array() !== $unresolved) {
			set_transient(
				self::START_DATES_NOTICE_TRANSIENT . get_current_user_id(),
				array(
					'removed'    => $result['removed'],
					'unresolved' => array_values( array_unique( $unresolved ) ),
				),
				MINUTE_IN_SECONDS
			);
		}

		return $result['rows'];
	}

	/**
	 * Returns the identificatie and supplier saved with each zaaktype URL on the previous save.
	 *
	 * @since NEXT
	 *
	 * @return array<string, array{supplier: string, identificatie: string}>
	 */
	private function get_saved_zaaktype_identities(): array
	{
		$rows       = Settings::make( 'owc_mijn_services_settings' )->get( self::ZAAKTYPE_START_DATES_FIELD_ID );
		$identities = array();

		foreach (is_array( $rows ) ? $rows : array() as $row) {
			$url           = is_array( $row ) ? trim( (string) ( $row[ ZaaktypeStartDates::KEY_ZAAKTYPE ] ?? '' ) ) : '';
			$identificatie = is_array( $row ) ? trim( (string) ( $row[ ZaaktypeStartDates::KEY_IDENTIFICATIE ] ?? '' ) ) : '';

			if ('' !== $url && '' !== $identificatie) {
				$identities[ $url ] = array(
					'supplier'      => trim( (string) ( $row[ ZaaktypeStartDates::KEY_SUPPLIER ] ?? '' ) ),
					'identificatie' => $identificatie,
				);
			}
		}

		return $identities;
	}

	/**
	 * Shows notices on the settings page after saving the 'Startdatum per zaaktype' rows removed
	 * duplicates, or found zaaktypen whose identificatie couldn't be resolved.
	 *
	 * @since NEXT
	 */
	public function render_zaaktype_start_dates_notices(): void
	{
		$screen = function_exists( 'get_current_screen' ) ? get_current_screen() : null;

		if (null === $screen || 'settings_page_owc_mijn_services_settings' !== $screen->id) {
			return;
		}

		$transient = self::START_DATES_NOTICE_TRANSIENT . get_current_user_id();
		$notice    = get_transient( $transient );

		if ( ! is_array( $notice )) {
			return;
		}

		delete_transient( $transient );

		$removed    = (int) ( $notice['removed'] ?? 0 );
		$unresolved = array_filter( (array) ( $notice['unresolved'] ?? array() ), 'is_string' );

		if (0 < $removed) {
			printf(
				'<div class="notice notice-warning is-dismissible"><p>%s</p></div>',
				esc_html(
					sprintf(
						/* translators: %d: number of removed rows. */
						_n(
							'Bij \'Startdatum per zaaktype\' stond een zaaktype dubbel. Er is %d rij verwijderd; per zaaktype is de vroegste datum bewaard.',
							'Bij \'Startdatum per zaaktype\' stonden zaaktypen dubbel. Er zijn %d rijen verwijderd; per zaaktype is de vroegste datum bewaard.',
							$removed,
							'owc-mijn-services'
						),
						$removed
					)
				)
			);
		}

		if (array() !== $unresolved) {
			printf(
				'<div class="notice notice-error is-dismissible"><p>%s</p><ul style="list-style: disc; padding-left: 1.5em;">',
				esc_html__( 'Van de volgende zaaktypen bij \'Startdatum per zaaktype\' kon de identificatie niet worden opgehaald. De startdatum wordt daardoor mogelijk niet toegepast. Controleer de verbinding met de leverancier en sla de instellingen opnieuw op.', 'owc-mijn-services' )
			);

			foreach ($unresolved as $url) {
				printf( '<li><code>%s</code></li>', esc_html( $url ) );
			}

			echo '</ul></div>';
		}
	}

	/**
	 * Builds the zaaktype options for a 'Startdatum per zaaktype' row, grouped per supplier.
	 *
	 * When the row's saved zaaktype is no longer offered, because it has since been superseded
	 * by a newer version, it is added under its supplier so the row keeps showing (and saving)
	 * its selection; the start date still applies to the latest version.
	 *
	 * @since NEXT
	 *
	 * @return array<string, array<string, string>|string>
	 */
	private function get_zaaktype_start_date_options( CMB2_Field $field ): array
	{
		// Built once per request, as this runs for every row of the repeatable group.
		$this->zaaktype_catalog ??= ( new ZaaktypeCatalog() )->per_filtering_supplier();

		$options = $this->zaaktype_catalog;
		$saved   = $field->value();

		if ( ! is_string( $saved ) || '' === $saved) {
			return $options;
		}

		foreach ($options as $supplier_name => $types) {
			if (isset( $types[ $saved ] )) {
				return $options;
			}

			$latest_url = ZaaktypeAdapter::url_migrations( $supplier_name )[ $saved ] ?? '';

			if ('' !== $latest_url && isset( $types[ $latest_url ] )) {
				/* translators: %s: zaaktype label. */
				$options[ $supplier_name ][ $saved ] = sprintf( __( '%s (oudere versie)', 'owc-mijn-services' ), $types[ $latest_url ] );

				return $options;
			}
		}

		// Unknown zaaktype, e.g. of a supplier for which zaaktype filtering has been disabled.
		$options[ $saved ] = $saved;

		return $options;
	}

	/**
	 * Builds the list of configured suppliers as a name => name map, to use as options for the
	 * 'Zaaktypefiltering ondersteunde leveranciers' multicheck field.
	 *
	 * @return array<string, string>
	 * @since 0.17.0
	 */
	private function get_supplier_options(): array
	{
		$options = array();

		foreach ($this->get_configured_suppliers() as $supplier) {
			$options[ $supplier['name'] ] = $supplier['name'];
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

	/**
	 * Resolves the capability required to manage the non-administrator-only settings.
	 *
	 * @since 0.15.0
	 */
	public static function get_allowed_settings_capability(): string
	{
		/**
		 * Filters the capability required to manage the non-administrator-only settings.
		 *
		 * Defaults to 'manage_options', in which case only administrators can see or edit these
		 * settings. Filtering this to a different capability additionally exposes the settings
		 * page (and only these fields on it) to any user with that capability.
		 *
		 * @since 0.15.0
		 */
		$capability = apply_filters( 'owcms::settings/allowed_settings_capability', 'manage_options' );

		if ( has_filter( 'owcms::settings/allowed_informatieobjecttypen_capability' ) ) {
			/**
			 * Deprecated: use the `owcms::settings/allowed_settings_capability` filter instead,
			 * which now also governs the 'Statusstappen zonder datum verbergen' and
			 * 'Volgnummers verbergen' settings.
			 *
			 * @deprecated 0.15.0 Use `owcms::settings/allowed_settings_capability` instead.
			 */
			$capability = apply_filters_deprecated(
				'owcms::settings/allowed_informatieobjecttypen_capability',
				array( $capability ),
				'0.15.0',
				'owcms::settings/allowed_settings_capability'
			);
		}

		return $capability;
	}
}
