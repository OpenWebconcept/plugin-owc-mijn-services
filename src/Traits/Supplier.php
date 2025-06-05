<?php
/**
 * Supplier trait.
 *
 * @package OWC_My_Services
 * @author  Yard | Digital Agency
 * @since   1.0.0
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
 * @since 1.0.0
 */
trait Supplier
{
	/**
	 * Translates a supplier key to its corresponding name.
	 * e.g. 'openzaak' to 'OpenZaak'.
	 * The name is mainly used for matching the correct API client.
	 *
	 * @since 1.0.0
	 */
	public function supplierKeyToName(string $supplier_key): string
	{
		$allowed  = ContainerResolver::make()->get( 'suppliers' );

		if ( ! is_array( $allowed ) || 1 > count( $allowed ) || 1 > strlen( $supplier_key )) {
			return '';
		}

		if ( ! in_array( $supplier_key, array_keys( $allowed ), true )) {
			return '';
		}

		return $allowed[ $supplier_key ] ?? '';
	}
}
