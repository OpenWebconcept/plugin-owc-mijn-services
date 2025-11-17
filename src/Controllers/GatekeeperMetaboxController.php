<?php

declare(strict_types=1);

/**
 * Gatekeeper metabox controller.
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

use WP_Post;

/**
 * Gatekeeper metabox controller.
 *
 * @since NEXT
 */
class GatekeeperMetaboxController
{
	public function register_metaboxes(): void
	{
		add_meta_box(
			'owcms_page_gatekeeper_access',
			__( 'Beveiliging', 'owc-my-services' ),
			$this->render_access_metabox( ... ),
			apply_filters( 'owcms::gatekeeper/metabox_post_types', array( 'page' ) ),
			'side',
			'high'
		);
	}

	public function render_access_metabox(WP_Post $post ): void
	{
		$session_type        = get_post_meta( $post->ID, 'owcms_protected_page_session_type', true );
		$redirect_no_session = get_post_meta( $post->ID, 'owcms_protected_page_redirect_post_id', true );

		wp_nonce_field( 'owcms_page_gatekeeper_save', 'owcms_page_gatekeeper_nonce' );

		echo owc_mijn_services_render_view(
			'editor.metaboxes.gatekeeper-access-metabox',
			array(
				'session_type'        => $session_type,
				'redirect_no_session' => $redirect_no_session,
				'redirect_options'    => $this->get_redirect_options(),
			)
		);
	}

	protected function get_redirect_options(): array
	{
		$posts = get_posts(
			array(
				'post_type'   => apply_filters( 'owcms::gatekeeper/metabox_post_types', array( 'page' ) ),
				'numberposts' => (int) ( apply_filters( 'owcms::gatekeeper/metabox_number_of_redirect_options', -1 ) ?: -1 ),
				'post_status' => 'publish',
				'orderby'     => 'title',
				'order'       => 'ASC',
			)
		);

		return $posts;
	}

	public function save_metabox_data(int $post_id ): void
	{
		$page_gatekeeper_nonce = (string) ( $_POST['owcms_page_gatekeeper_nonce'] ?? '' );

		if ( '' === $page_gatekeeper_nonce || ! wp_verify_nonce( $page_gatekeeper_nonce, 'owcms_page_gatekeeper_save' )) {
			return;
		}

		if (defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE) {
			return;
		}

		$fields = array(
			'owcms_protected_page_session_type',
			'owcms_protected_page_redirect_post_id',
		);

		foreach ($fields as $field) {
			if (isset( $_POST[ $field ] )) {
				update_post_meta( $post_id, $field, sanitize_text_field( $_POST[ $field ] ) );

				continue;
			}

			delete_post_meta( $post_id, $field );
		}
	}
}
