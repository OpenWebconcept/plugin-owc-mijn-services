<?php

declare(strict_types=1);

/**
 * Authentication filter trait.
 *
 * @package OWC_My_Services
 * @author  Yard | Digital Agency
 * @since   NEXT
 */

namespace OWC\My_Services\Traits;

/**
 * Exit when accessed directly.
 */
if ( ! defined( 'ABSPATH' )) {
	exit;
}

use OWC\My_Services\ContainerResolver;
use OWC\ZGW\Endpoints\Filter\ZakenFilter;

/**
 * Authentication filter trait.
 *
 * @since 0.10.0
 */
trait AuthenticationFilter
{
	/**
	 * Applies exactly one KVK-based identification filter, preferring RSIN, then
	 * vestigingsNummer, then the plain kvkNummer, so only one is ever active.
	 *
	 * RSIN and vestigingsNummer are not supported by every supplier, so they are
	 * only used when explicitly enabled via the 'display.enable-extended-kvk-filtering' setting.
	 */
	protected function add_kvk_filter( ZakenFilter $filter, string $rsin, string $vestigingsNummer, string $kvk ): bool
	{
		$extended_filtering_enabled = (bool) ContainerResolver::make()->get( 'display.enable-extended-kvk-filtering' );

		if ($extended_filtering_enabled && '' !== $rsin) {
			$filter->add( 'rol__betrokkeneIdentificatie__nietNatuurlijkPersoon__innNnpId', $rsin );

			return true;
		}

		if ($extended_filtering_enabled && '' !== $vestigingsNummer) {
			$filter->add( 'rol__betrokkeneIdentificatie__vestiging__vestigingsNummer', $vestigingsNummer );

			return true;
		}

		if ('' !== $kvk) {
			$filter->add( 'rol__betrokkeneIdentificatie__vestiging__kvkNummer', $kvk );

			return true;
		}

		return false;
	}
}
