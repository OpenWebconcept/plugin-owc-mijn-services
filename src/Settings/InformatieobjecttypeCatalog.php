<?php

declare(strict_types=1);

/**
 * Catalog of informatieobjecttypen per configured supplier.
 *
 * @package OWC_Mijn_Services
 * @author  Yard | Digital Agency
 * @since   NEXT
 */

namespace OWC\My_Services\Settings;

/**
 * Exit when accessed directly.
 */
if ( ! defined( 'ABSPATH' )) {
	exit;
}

use Exception;
use OWC\My_Services\Services\LoggerService;
use OWC\My_Services\Settings\Adapters\InformatieobjecttypeAdapter;
use OWC\My_Services\Traits\Supplier;

use function OWC\ZGW\apiClientManager;

/**
 * Catalog of informatieobjecttypen per configured supplier.
 *
 * Used both to build the grouped options for the 'Toegestane informatieobjecttypen' setting
 * and to resolve which supplier a previously selected informatieobjecttype url belongs to,
 * so filtering can be scoped per supplier.
 *
 * @since NEXT
 */
class InformatieobjecttypeCatalog
{
	use Supplier;

	/**
	 * Returns the informatieobjecttypen of the given supplier as a url => label map.
	 *
	 * @return array<string, string>
	 */
	public function for_supplier( string $supplier_name ): array
	{
		try {
			$client = apiClientManager()->getClient( $supplier_name );
		} catch (Exception $e) {
			LoggerService::log( 'error', $e->getMessage() );

			return array();
		}

		if ( ! $client->supports( 'informatieobjecttypen' )) {
			return array();
		}

		return ( new InformatieobjecttypeAdapter( $client, $supplier_name ) )->handle();
	}

	/**
	 * Returns the informatieobjecttypen of all configured suppliers, grouped per supplier.
	 *
	 * @return array<string, array<string, string>>
	 */
	public function per_supplier(): array
	{
		$catalog = array();

		foreach ($this->get_configured_suppliers() as $supplier) {
			$types = $this->for_supplier( $supplier['name'] );

			if (array() === $types) {
				continue;
			}

			$catalog[ $supplier['name'] ] = $types;
		}

		return $catalog;
	}

	/**
	 * Splits a flat list of allowed informatieobjecttype urls into the suppliers that actually
	 * own each url, so filtering can be scoped per supplier instead of applied globally.
	 *
	 * @param string[] $allowed_urls
	 * @return array<string, string[]>
	 */
	public function group_by_supplier( array $allowed_urls ): array
	{
		if (array() === $allowed_urls) {
			return array();
		}

		$grouped = array();

		foreach ($this->per_supplier() as $supplier_name => $types) {
			$matching = array_values( array_intersect( $allowed_urls, array_keys( $types ) ) );

			if (array() !== $matching) {
				$grouped[ $supplier_name ] = $matching;
			}
		}

		return $grouped;
	}
}
