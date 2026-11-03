<?php

declare(strict_types=1);

/**
 * Catalog of zaaktypen per supplier that supports zaaktype filtering.
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
use OWC\My_Services\ContainerResolver;
use OWC\My_Services\Services\LoggerService;
use OWC\My_Services\Settings\Adapters\ZaaktypeAdapter;
use OWC\My_Services\Traits\Supplier;
use OWC\ZGW\Contracts\Client;
use Throwable;

use function OWC\ZGW\apiClientManager;

/**
 * Catalog of zaaktypen per supplier that supports zaaktype filtering.
 *
 * Reads the cached zaaktypen (kept warm by a daily cron), so listing them never triggers a
 * live ZTC request and is safe to use while rendering the settings page. Only identify()
 * falls back to a live request, for a zaaktype that isn't cached.
 *
 * @since NEXT
 */
class ZaaktypeCatalog
{
	use Supplier;

	/**
	 * Returns the zaaktypen of every supplier selected under 'Zaaktypefiltering ondersteunde
	 * leveranciers', grouped per supplier as a url => label map.
	 *
	 * @return array<string, array<string, string>>
	 */
	public function per_filtering_supplier(): array
	{
		$catalog = array();

		foreach ($this->filtering_clients() as $supplier_name => $client) {
			$types = ( new ZaaktypeAdapter( $client, $supplier_name ) )->handle();

			if (array() !== $types) {
				$catalog[ $supplier_name ] = $types;
			}
		}

		return $catalog;
	}

	/**
	 * Resolves the supplier and identificatie of a zaaktype URL. Looks the URL up in the cached
	 * URL => identificatie map of every filtering supplier first, which covers all versions of
	 * their zaaktypen, and falls back to fetching the zaaktype from each supplier's ZTC.
	 *
	 * @return array{supplier: string, identificatie: string}|null Null when it can't be resolved.
	 */
	public function identify( string $url ): ?array
	{
		$clients = $this->filtering_clients();

		foreach (array_keys( $clients ) as $supplier_name) {
			$identificatie = ZaaktypeAdapter::url_identificaties( $supplier_name )[ $url ] ?? '';

			if ('' !== $identificatie) {
				return array(
					'supplier'      => $supplier_name,
					'identificatie' => $identificatie,
				);
			}
		}

		foreach ($clients as $supplier_name => $client) {
			$identificatie = $this->fetch_identificatie( $client, $supplier_name, $url );

			if ('' !== $identificatie) {
				return array(
					'supplier'      => $supplier_name,
					'identificatie' => $identificatie,
				);
			}
		}

		return null;
	}

	/**
	 * Fetches the zaaktype from the supplier's ZTC. Only accepts it when the fetched zaaktype has
	 * the requested URL, so a zaaktype of another supplier with the same UUID isn't mistaken for it.
	 */
	private function fetch_identificatie( Client $client, string $supplier_name, string $url ): string
	{
		try {
			$zaaktype = $client->zaaktypen()->get( basename( (string) wp_parse_url( $url, PHP_URL_PATH ) ) );
		} catch (Throwable $e) {
			LoggerService::log_exception( $e, array( 'context' => "Error fetching zaaktype '{$url}' from supplier '{$supplier_name}'" ) );

			return '';
		}

		if (untrailingslashit( trim( (string) ( $zaaktype?->url ?? '' ) ) ) !== untrailingslashit( $url )) {
			return '';
		}

		return trim( (string) ( $zaaktype?->identificatie ?? '' ) );
	}

	/**
	 * Returns the API clients of the suppliers selected under 'Zaaktypefiltering ondersteunde
	 * leveranciers' that support zaaktypen, keyed by supplier name.
	 *
	 * @return array<string, Client>
	 */
	private function filtering_clients(): array
	{
		$filtering_suppliers = ContainerResolver::make()->get( 'display.zaaktype-filtering-suppliers' );

		if (array() === $filtering_suppliers) {
			return array();
		}

		$clients = array();

		foreach ($this->get_configured_suppliers() as $supplier) {
			if ( ! in_array( $supplier['name'], $filtering_suppliers, true )) {
				continue;
			}

			try {
				$client = apiClientManager()->getClient( $supplier['name'] );
			} catch (Exception $e) {
				continue;
			}

			if ($client->supports( 'zaaktypen' )) {
				$clients[ $supplier['name'] ] = $client;
			}
		}

		return $clients;
	}
}
