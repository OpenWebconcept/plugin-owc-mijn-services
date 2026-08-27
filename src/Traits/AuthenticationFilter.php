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

use OWC\My_Services\ContainerResolver;
use OWC\ZGW\Endpoints\Filter\ZakenFilter;
use OWC\ZGW\Entities\Attributes\SubjectType;
use OWC\ZGW\Entities\Rol;
use OWC\ZGW\Entities\Zaak;

/**
 * Authentication filter trait.
 *
 * @since 0.10.0
 */
trait AuthenticationFilter
{
	/**
	 * The expand resources needed to verify, without extra API calls, that a single
	 * zaak actually belongs to the authenticated user. Include on top of the resources
	 * already expanded by default (currently 'zaaktype' and 'status').
	 *
	 * @since 0.15.0
	 */
	protected const EXPAND_WITH_ROLLEN = array( 'zaaktype', 'status', 'rollen' );

	/**
	 * Applies exactly one KVK-based identification filter, preferring vestigingsNummer, then
	 * RSIN, then the plain kvkNummer, so only one is ever active.
	 *
	 * RSIN and vestigingsNummer are not supported by every supplier, so they are
	 * only used when explicitly enabled via the 'display.enable-extended-kvk-filtering' setting.
	 */
	protected function add_kvk_filter( ZakenFilter $filter, string $rsin, string $vestigings_nummer, string $kvk ): bool
	{
		$extended_filtering_enabled = (bool) ContainerResolver::make()->get( 'display.enable-extended-kvk-filtering' );

		if ($extended_filtering_enabled && '' !== $vestigings_nummer) {
			$filter->add( 'rol__betrokkeneIdentificatie__vestiging__vestigingsNummer', $vestigings_nummer );

			return true;
		}

		if ($extended_filtering_enabled && '' !== $rsin) {
			$filter->add( 'rol__betrokkeneIdentificatie__nietNatuurlijkPersoon__innNnpId', $rsin );

			return true;
		}

		if ('' !== $kvk) {
			$filter->add( 'rol__betrokkeneIdentificatie__vestiging__kvkNummer', $kvk );

			return true;
		}

		return false;
	}

	/**
	 * Verifies that the given zaak has a role with 'omschrijvingGeneriek' 'initiator' whose
	 * betrokkene identification matches the authenticated user.
	 *
	 * The query filters used to retrieve a single zaak (byBsn/add_kvk_filter combined with
	 * a 'rol__omschrijvingGeneriek' filter) each match against the zaak's rollen independently,
	 * so they don't guarantee both conditions are satisfied by the same role. This performs
	 * that check in code instead, using the same identification precedence as add_kvk_filter,
	 * against roles already available on the zaak (see EXPAND_WITH_ROLLEN).
	 *
	 * @since NEXT
	 */
	protected function zaak_has_authenticated_initiator( Zaak $zaak, string $bsn, string $kvk, string $vestigings_nummer, string $rsin ): bool
	{
		if ('' !== $bsn && $zaak->isInitiatedBy( $bsn )) {
			return true;
		}

		if ( (bool) ContainerResolver::make()->get( 'display.disable-kvk-filtering' )) {
			return false;
		}

		$extended_filtering_enabled = (bool) ContainerResolver::make()->get( 'display.enable-extended-kvk-filtering' );

		if ($extended_filtering_enabled && '' !== $vestigings_nummer) {
			return $this->zaak_has_initiator_role( $zaak, SubjectType::VESTIGING, 'vestigingsNummer', $vestigings_nummer );
		}

		if ($extended_filtering_enabled && '' !== $rsin) {
			return $this->zaak_has_initiator_role( $zaak, SubjectType::NIET_NATUURLIJK_PERSOON, 'innNnpId', $rsin );
		}

		if ('' !== $kvk) {
			return $this->zaak_has_initiator_role( $zaak, SubjectType::VESTIGING, 'kvkNummer', $kvk );
		}

		return false;
	}

	/**
	 * @since 0.15.0
	 */
	private function zaak_has_initiator_role( Zaak $zaak, SubjectType $betrokkene_type, string $identificatie_key, string $identificatie_value ): bool
	{
		return $zaak->rollen->filter(
			function ( Rol $rol ) use ( $betrokkene_type, $identificatie_key, $identificatie_value ) {
				// ZGW entity property names below follow the ZGW API spec, not our naming convention.
				return $rol->isInitiator()
					&& $rol->betrokkeneType?->is( $betrokkene_type ) // phpcs:ignore WordPress.NamingConventions.ValidVariableName.UsedPropertyNotSnakeCase
					&& ( ( (array) $rol->betrokkeneIdentificatie )[ $identificatie_key ] ?? null ) === $identificatie_value; // phpcs:ignore WordPress.NamingConventions.ValidVariableName.UsedPropertyNotSnakeCase
			}
		)->isNotEmpty();
	}
}
