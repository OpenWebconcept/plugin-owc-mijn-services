<?php

declare(strict_types=1);

/**
 * Authentication filter trait.
 *
 * @package OWC_My_Services
 * @author  Yard | Digital Agency
 * @since   0.10.0
 */

namespace OWC\My_Services\Traits;

/**
 * Exit when accessed directly.
 */
if ( ! defined( 'ABSPATH' )) {
	exit;
}

use OWC\ZGW\Endpoints\Filter\ZakenFilter;

/**
 * Authentication filter trait.
 *
 * @since 0.10.0
 */
trait AuthenticationFilter
{
	/**
	 * Applies exactly one KVK-based identification filter, preferring vestigingsNummer,
	 * then RSIN, so only one is ever active.
	 *
	 * The plain kvkNummer filter is not supported by every supplier and is deprecated,
	 * so it is no longer used.
	 */
	protected function add_kvk_filter( ZakenFilter $filter, string $rsin, string $vestigings_nummer, string $kvk ): bool
	{
		if ('' !== $vestigings_nummer) {
			$filter->add( 'rol__betrokkeneIdentificatie__vestiging__vestigingsNummer', $vestigings_nummer );

			return true;
		}

		if ('' !== $rsin) {
			$filter->add( 'rol__betrokkeneIdentificatie__nietNatuurlijkPersoon__innNnpId', $rsin );

			return true;
		}

		return false;
	}
}
