<?php

declare(strict_types=1);

/**
 * Retrieve the Chamber of Commerce number (KVK) by integrating with eHerkenning authentication.
 *
 * @package OWC_Mijn_Services
 * @author  Yard | Digital Agency
 * @since   0.4.0
 */

namespace OWC\My_Services\Auth;

/**
 * Exit when accessed directly.
 */
if ( ! defined( 'ABSPATH' )) {
	exit;
}

/**
 * Retrieve the Chamber of Commerce number (KVK) by integrating with eHerkenning authentication.
 *
 * @since 0.4.0
 */
class eHerkenning
{
	public static function make(): self
	{
		return new static();
	}

	public function kvk(): string
	{
		if ( ! class_exists( '\OWC\IdpUserData\eHerkenningSession' )) {
			return '';
		}

		if ( ! \OWC\IdpUserData\eHerkenningSession::isLoggedIn() || is_null( \OWC\IdpUserData\eHerkenningSession::getUserData() )) {
			return '';
		}

		$userData = \OWC\IdpUserData\eHerkenningSession::getUserData();

		return ! is_null( $userData ) ? $userData->getKvk() : '';
	}
}
