<?php

declare(strict_types=1);

/**
 * Controller for manually clearing the cached informatieobjecttypen.
 *
 * @package OWC_Mijn_Services
 * @author  Yard | Digital Agency
 * @since   0.12.0
 */

namespace OWC\My_Services\Controllers;

/**
 * Exit when accessed directly.
 */
if ( ! defined( 'ABSPATH' )) {
	exit;
}

use OWC\My_Services\Settings\Adapters\InformatieobjecttypeAdapter;
use OWC\My_Services\Settings\OptionsPageRegistrar;
use OWC\My_Services\Traits\Supplier;

/**
 * Controller for manually clearing the cached informatieobjecttypen.
 *
 * @since 0.12.0
 */
class InformatieobjecttypenCacheController
{
	use Supplier;

	public const ACTION      = 'owcms-clear-informatieobjecttypen-cache';
	public const NONCE_QUERY = 'owcms-clear-informatieobjecttypen-cache-nonce';
	public const NOTICE_FLAG = 'owcms-informatieobjecttypen-cache-cleared';

	/**
	 * Renders the button used to manually clear the cached informatieobjecttypen.
	 *
	 * Meant to be used as the 'after' callback of the 'Toegestane informatieobjecttypen' field,
	 * so it's only shown to users who are also allowed to manage that field.
	 */
	public function render_clear_cache_button(): void
	{
		$url = wp_nonce_url( admin_url( sprintf( 'admin-post.php?action=%s', self::ACTION ) ), self::ACTION, self::NONCE_QUERY );

		printf(
			'<p><a href="%s" class="button">%s</a></p>',
			esc_url( $url ),
			esc_html__( 'Informatieobjecttypen opnieuw ophalen', 'owc-mijn-services' )
		);
	}

	/**
	 * Handles the request to manually clear the cached informatieobjecttypen of all configured suppliers.
	 */
	public function handle_clear_cache_request(): void
	{
		$capability = OptionsPageRegistrar::get_allowed_settings_capability();

		if ( ! current_user_can( 'manage_options' ) && ! current_user_can( $capability )) {
			wp_die( esc_html__( 'Je hebt geen toestemming om deze actie uit te voeren.', 'owc-mijn-services' ) );
		}

		check_admin_referer( self::ACTION, self::NONCE_QUERY );

		foreach ($this->get_configured_suppliers() as $supplier) {
			delete_transient( InformatieobjecttypeAdapter::transient_key( $supplier['name'] ) );
		}

		wp_safe_redirect( add_query_arg( self::NOTICE_FLAG, '1', wp_get_referer() ?: admin_url() ) );
		exit;
	}

	/**
	 * Shows an admin notice right after the cache has been cleared.
	 */
	public function render_cache_cleared_notice(): void
	{
		if ( ! isset( $_GET[ self::NOTICE_FLAG ] )) {
			return;
		}

		printf(
			'<div class="notice notice-success is-dismissible"><p>%s</p></div>',
			esc_html__( 'De cache van de informatieobjecttypen is geleegd. Ze worden opnieuw opgehaald bij het volgende gebruik of bij de volgende geplande taak.', 'owc-mijn-services' )
		);
	}
}
