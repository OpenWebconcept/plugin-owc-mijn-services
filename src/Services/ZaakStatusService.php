<?php

declare(strict_types=1);

/**
 * Zaak status service.
 *
 * @package OWC_Mijn_Services
 * @author  Yard | Digital Agency
 * @since   NEXT
 */

namespace OWC\My_Services\Services;

/**
 * Exit when accessed directly.
 */
if ( ! defined( 'ABSPATH' )) {
	exit;
}

use OWC\ZGW\Entities\Status;
use OWC\ZGW\Entities\Statustype;
use OWC\ZGW\Entities\Zaak;
use OWC\ZGW\Support\Collection;

/**
 * Builds the status step data of a 'Zaak', ready to be rendered by the view.
 *
 * A status type can occur 0, 1 or multiple times for a 'Zaak' (e.g. when a step back
 * occurs), while every individual status always has exactly one status type.
 *
 * @since NEXT
 */
class ZaakStatusService
{
	/**
	 * Builds the list of status steps for the given 'Zaak'.
	 *
	 * Every passed status is shown, including duplicates, sorted by date/time. When the
	 * last status is not the final status type, the final status type is appended as an
	 * open (not yet reached) step. When there are no statuses yet, the first status type
	 * is shown instead, also as an open step.
	 *
	 * @return array<int, array<string, mixed>>
	 */
	public static function get_steps( Zaak $zaak, bool $hide_volgnummers = false, bool $filter_by_informeren = false, bool $hide_status_steps_without_date = false ): array
	{
		$statustypen        = $zaak->zaaktype?->statustypen;
		$statustypen_by_url = self::map_statustypen_by_url( $statustypen );
		$statussen          = self::get_sorted_relevant_statussen( $zaak, $statustypen_by_url, $filter_by_informeren );

		$steps = array();

		foreach ($statussen->all() as $index => $status) {
			$steps[] = self::build_checked_step( $index, $status, $statustypen_by_url[ $status->getAttributeValue( 'statustype' ) ], $hide_volgnummers );
		}

		if ($hide_status_steps_without_date) {
			return $steps;
		}

		$open_step = $statussen->isEmpty()
			? self::build_first_statustype_step( $statustypen )
			: self::build_end_statustype_step( $statussen, $statustypen_by_url, $statustypen );

		if (null !== $open_step) {
			$steps[] = $open_step;
		}

		return $steps;
	}

	/**
	 * Maps every statustype of the 'Zaak' zaaktype by its URL, so statuses can be linked
	 * to their statustype without triggering a lazy fetch per status.
	 *
	 * @return array<string, Statustype>
	 */
	private static function map_statustypen_by_url( ?Collection $statustypen ): array
	{
		$by_url = array();

		if ( ! $statustypen) {
			return $by_url;
		}

		foreach ($statustypen->all() as $statustype) {
			$by_url[ $statustype->url ] = $statustype;
		}

		return $by_url;
	}

	/**
	 * Filters out statuses without a known statustype or date, then sorts the remainder by
	 * date/time. When $filter_by_informeren is enabled, statuses whose statustype has
	 * 'informeren' explicitly set to false are filtered out too; keep this disabled for
	 * suppliers that don't reliably populate this field, since it would otherwise hide
	 * every status.
	 *
	 * @param array<string, Statustype> $statustypen_by_url
	 */
	private static function get_sorted_relevant_statussen( Zaak $zaak, array $statustypen_by_url, bool $filter_by_informeren ): Collection
	{
		$statussen = $zaak->statussen->filter(
			function ( $status ) use ( $statustypen_by_url, $filter_by_informeren ) {
				$statustype = $statustypen_by_url[ $status->getAttributeValue( 'statustype' ) ] ?? null;

				if ( ! $statustype || ! $status->datumStatusGezet) {
						return false;
				}

				if ( ! $filter_by_informeren) {
					return true;
				}

				return false !== $statustype->getValue( 'informeren', true ); // Default is true so statuses are shown unless explicitly hidden.
			}
		);

		return $statussen->sort(
			function ( $a, $b ) {
				return $a->datumStatusGezet->getTimestamp() <=> $b->datumStatusGezet->getTimestamp();
			}
		);
	}

	/**
	 * Builds a single step for a status that has already been reached.
	 */
	private static function build_checked_step( int $index, Status $status, Statustype $statustype, bool $hide_volgnummers ): array
	{
		return array(
			'id'     => 'step-' . $index,
			'title'  => $statustype->getValue( 'omschrijving', '' ),
			'status' => 'checked',
			'date'   => wp_date( get_option( 'date_format' ), $status->datumStatusGezet->getTimestamp() ),
			'meta'   => $hide_volgnummers ? null : 'Volgnummer: ' . $statustype->volgnummer(),
		);
	}

	/**
	 * Shows the first statustype as an open step, used when there are no statuses yet.
	 */
	private static function build_first_statustype_step( ?Collection $statustypen ): ?array
	{
		if ( ! $statustypen) {
			return null;
		}

		$first_statustype = $statustypen->sortByAttribute( 'volgnummer' )->first();

		if ( ! $first_statustype) {
			return null;
		}

		return self::build_open_step( 'step-first', $first_statustype );
	}

	/**
	 * Shows the final statustype as an open step, used when the last reached status is
	 * not the final status yet.
	 *
	 * @param array<string, Statustype> $statustypen_by_url
	 */
	private static function build_end_statustype_step( Collection $statussen, array $statustypen_by_url, ?Collection $statustypen ): ?array
	{
		if ( ! $statustypen) {
			return null;
		}

		$end_status              = $statussen->last();
		$last_reached_statustype = $end_status ? ( $statustypen_by_url[ $end_status->getAttributeValue( 'statustype' ) ] ?? null ) : null;

		if ($last_reached_statustype && (bool) $last_reached_statustype->getValue( 'isEindstatus', false )) {
			return null;
		}

		$end_statustype = $statustypen->first(
			function ( $key, Statustype $statustype ) {
				return (bool) $statustype->getValue( 'isEindstatus', false ) ? $statustype : null;
			}
		);

		if ( ! $end_statustype) {
			return null;
		}

		return self::build_open_step( 'step-end', $end_statustype );
	}

	private static function build_open_step( string $id, Statustype $statustype ): array
	{
		return array(
			'id'     => $id,
			'title'  => $statustype->getValue( 'omschrijving', '' ),
			'status' => 'not-checked',
			'date'   => null,
			'meta'   => null,
		);
	}
}
