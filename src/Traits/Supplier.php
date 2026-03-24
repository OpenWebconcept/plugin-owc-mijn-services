<?php

declare(strict_types=1);

/**
 * Supplier trait.
 *
 * @package OWC_My_Services
 * @author  Yard | Digital Agency
 * @since   0.1.0
 */

namespace OWC\My_Services\Traits;

/**
 * Exit when accessed directly.
 */
if ( ! defined( 'ABSPATH' )) {
	exit;
}

use OWC\My_Services\ContainerResolver;

/**
 * Supplier trait.
 *
 * @since 0.1.0
 */
trait Supplier
{
	/**
	 * Translates a supplier key to its corresponding name.
	 * e.g. 'openzaak' to 'OpenZaak'.
	 * The name is mainly used for matching the correct API client.
	 */
	public function supplier_key_to_name(string $supplier_key ): string
	{
		$allowed = $this->get_configured_suppliers();

		foreach ( $allowed as $supplier ) {
			if ( strtolower( $supplier['name'] ) !== strtolower( $supplier_key ) ) {
				continue;
			}

			return $supplier['name'];
		}

		return '';
	}

	public function get_configured_suppliers(): array
	{
		$clients = (array) get_option( 'zgw_api_settings', array() );
		$clients = $clients['zgw-api-configured-clients'] ?? array();
		$clients = array_filter(
			$clients,
			function ( $client ) {
				return isset( $client['name'] );
			}
		);

		return array_values( $clients );
	}
}
