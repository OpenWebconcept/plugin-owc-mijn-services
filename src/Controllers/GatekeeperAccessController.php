<?php

declare(strict_types=1);

/**
 * Gatekeeper controller which handles access restrictions for pages.
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

use OWC\My_Services\Auth\DigiD;
use OWC\My_Services\Auth\eHerkenning;
use WP_Post;

/**
 * Gatekeeper access controller.
 *
 * @since NEXT
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

	protected function validate_post_type(WP_Post $post ): bool
	{
		$allowed_post_types = apply_filters( 'owcms::gatekeeper/metabox_post_types', array( 'page' ) );

		return in_array( $post->post_type, $allowed_post_types, true );
	}

	protected function validate_required_session( WP_Post $post ): bool
	{
		$session_type = (string) ( get_post_meta( $post->ID, 'owcms_protected_page_session_type', true ) ?: '' );

		return match ($session_type) {
			'digid' => '' !== DigiD::make()->bsn(), // User has DigiD session.
			'eherkenning' => '' !== eHerkenning::make()->kvk(), // User has eHerkenning session.
			'both' => '' !== DigiD::make()->bsn() || '' !== eHerkenning::make()->kvk(), // User has either DigiD or eHerkenning session.
			'none' => '' === DigiD::make()->bsn() && '' === eHerkenning::make()->kvk(), // User has neither DigiD nor eHerkenning session.
			default => true, // No condition met means access is allowed.
		};
	}

	protected function redirect_to_post(int $post_id ): void
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
