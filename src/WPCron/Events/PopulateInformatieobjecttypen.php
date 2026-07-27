<?php

declare(strict_types=1);

/**
 * Cron event that pre-fetches informatieobjecttypen for all configured suppliers.
 *
 * @package OWC_Mijn_Services
 * @author  Yard | Digital Agency
 * @since   NEXT
 */

namespace OWC\My_Services\WPCron\Events;

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
 * Cron event that pre-fetches informatieobjecttypen for all configured suppliers.
 *
 * Runs early in the morning so the cache is warm before anyone opens the settings page,
 * meaning nobody has to wait for the informatieobjecttypen to be fetched from the API.
 *
 * @since NEXT
 */
class PopulateInformatieobjecttypen
{
	use Supplier;

	public function init(): void
	{
		foreach ($this->get_configured_suppliers() as $supplier) {
			$this->populate_for_supplier( $supplier );
		}
	}

	private function populate_for_supplier( array $supplier ): void
	{
		try {
			$client = apiClientManager()->getClient( $supplier['name'] );
		} catch (Exception $e) {
			LoggerService::log( 'error', sprintf( 'Error initializing API client for supplier %s: %s', $supplier['name'], $e->getMessage() ) );

			return;
		}

		if ( ! $client->supports( 'informatieobjecttypen' )) {
			return;
		}

		( new InformatieobjecttypeAdapter( client: $client, supplier_name: $supplier['name'], is_cron: true ) )->handle();
	}
}
