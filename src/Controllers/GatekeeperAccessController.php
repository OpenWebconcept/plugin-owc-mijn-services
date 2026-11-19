<?php

declare(strict_types=1);

/**
 * Gatekeeper controller which handles access restrictions for pages.
 *
 * @package OWC_Mijn_Services
 * @author  Yard | Digital Agency
 * @since   0.4.0
 */

namespace OWC\My_Services\Controllers;

/**
 * Exit when accessed directly.
 */
if ( ! defined( 'ABSPATH' )) {
	exit;
}

use OWC\My_Services\Auth\DigiD;
use OWC\My_Services\Auth\eHerkenning;
use OWC\My_Services\Auth\eIDAS;
use WP_Post;

/**
 * Gatekeeper access controller.
 *
 * @since 0.4.0
 */
class GatekeeperAccessController
{
	public function handle_gatekeeper_restrictions(): void
	{
		global $post;

		if ( ! $post instanceof WP_Post || ! $this->validate_post_type( $post ) ) {
			return;
		}

		if ( $this->validate_required_session( $post ) ) {
			return;
		}

		$redirect_post_id = (int) ( get_post_meta( $post->ID, 'owcms_protected_page_redirect_post_id', true ) ?: 0 );

		$this->redirect_to_post( $redirect_post_id );
	}

	protected function validate_post_type( WP_Post $post ): bool
	{
		$allowed_post_types = apply_filters( 'owcms::gatekeeper/metabox_post_types', array( 'page' ) );

		return in_array( $post->post_type, $allowed_post_types, true );
	}

	protected function validate_required_session( WP_Post $post ): bool
	{
		$session_type = (string) ( get_post_meta( $post->ID, 'owcms_protected_page_session_type', true ) ?: '' );

		return match ($session_type) {
			'digid' => $this->has_digid_session(),
			'eherkenning' => $this->has_eherkenning_session(),
			'eidas' => $this->has_eidas_session(),
			'both' => $this->has_digid_session() || $this->has_eherkenning_session(), // User has either DigiD or eHerkenning session.
			'any' => $this->has_digid_session() || $this->has_eherkenning_session() || $this->has_eidas_session(), // User has a DigiD, eHerkenning or eIDAS session.
			'none' => ! $this->has_digid_session() && ! $this->has_eherkenning_session() && ! $this->has_eidas_session(), // User has no session at all.
			default => true, // No condition met means access is allowed.
		};
	}

	/**
	 * @since NEXT
	 */
	protected function has_digid_session(): bool
	{
		return '' !== DigiD::make()->bsn();
	}

	/**
	 * @since NEXT
	 */
	protected function has_eherkenning_session(): bool
	{
		return '' !== eHerkenning::make()->kvk();
	}

	/**
	 * An eIDAS session does not necessarily provide a BSN, the session itself grants access.
	 *
	 * @since NEXT
	 */
	protected function has_eidas_session(): bool
	{
		return eIDAS::make()->is_logged_in();
	}

	protected function redirect_to_post( int $post_id ): void
	{
		$redirect_url = $post_id ? get_permalink( $post_id ) : false;

		if ( false === $redirect_url || ! wp_http_validate_url( $redirect_url ) ) {
			wp_safe_redirect( home_url() );
			exit;
		}

		wp_safe_redirect( $redirect_url );
		exit;
	}
}
