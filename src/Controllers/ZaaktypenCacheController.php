<?php

declare(strict_types=1);

/**
 * Controller for manually re-fetching the cached zaaktypen.
 *
 * @package OWC_Mijn_Services
 * @author  Yard | Digital Agency
 * @since   NEXT
 */

namespace OWC\My_Services\Controllers;

/**
 * Exit when accessed directly.
 */
if ( ! defined( 'ABSPATH' )) {
	exit;
}

use OWC\My_Services\Settings\OptionsPageRegistrar;
use OWC\My_Services\WPCron\Events\PopulateZaaktypen;

/**
 * Controller for manually re-fetching the cached zaaktypen.
 *
 * @since NEXT
 */
class ZaaktypenCacheController
{
	public const ACTION      = 'owcms-refetch-zaaktypen-cache';
	public const NONCE_QUERY = 'owcms-refetch-zaaktypen-cache-nonce';
	public const NOTICE_FLAG = 'owcms-zaaktypen-cache-refetched';

	/**
	 * Renders the button used to manually re-fetch the cached zaaktypen.
	 *
	 * Meant to be used as the 'after' callback of a settings field gated the same way, so it's
	 * only shown to users who are also allowed to manage that field.
	 */
	public function render_refetch_button(): void
	{
		$url = wp_nonce_url( admin_url( sprintf( 'admin-post.php?action=%s', self::ACTION ) ), self::ACTION, self::NONCE_QUERY );

		printf(
			'<p><a href="%s" class="button">%s</a></p>',
			esc_url( $url ),
			esc_html__( 'Zaaktypen opnieuw ophalen', 'owc-mijn-services' )
		);
	}

	/**
	 * Handles the request to manually re-fetch the zaaktypen of all configured suppliers.
	 *
	 * Fetches live rather than merely clearing the cache, since this is an explicit,
	 * user-initiated action where waiting for the request to finish is expected.
	 */
	public function handle_refetch_request(): void
	{
		$capability = OptionsPageRegistrar::get_allowed_settings_capability();

		if ( ! current_user_can( 'manage_options' ) && ! current_user_can( $capability )) {
			wp_die( esc_html__( 'Je hebt geen toestemming om deze actie uit te voeren.', 'owc-mijn-services' ) );
		}

		check_admin_referer( self::ACTION, self::NONCE_QUERY );

		( new PopulateZaaktypen() )->init();

		wp_safe_redirect( add_query_arg( self::NOTICE_FLAG, '1', wp_get_referer() ?: admin_url() ) );
		exit;
	}

	/**
	 * Shows an admin notice right after the zaaktypen have been re-fetched.
	 */
	public function render_refetched_notice(): void
	{
		if ( ! isset( $_GET[ self::NOTICE_FLAG ] )) {
			return;
		}

		printf(
			'<div class="notice notice-success is-dismissible"><p>%s</p></div>',
			esc_html__( 'De zaaktypen zijn opnieuw opgehaald.', 'owc-mijn-services' )
		);
	}
}
