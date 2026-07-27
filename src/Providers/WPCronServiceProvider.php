<?php

declare(strict_types=1);

/**
 * Register WP-Cron service provider.
 *
 * @package OWC_Mijn_Services
 * @author  Yard | Digital Agency
 * @since   NEXT
 */

namespace OWC\My_Services\Providers;

/**
 * Exit when accessed directly.
 */
if ( ! defined( 'ABSPATH' )) {
	exit;
}

use DateTime;
use DateTimeZone;
use OWC\My_Services\WPCron\Events\PopulateInformatieobjecttypen;

/**
 * Register WP-Cron service provider.
 *
 * @since NEXT
 */
class WPCronServiceProvider extends ServiceProvider
{
	private const POPULATE_INFORMATIEOBJECTTYPEN_HOOK = 'owc-mijn-services-populate-informatieobjecttypen-cron';

	/**
	 * @inheritDoc
	 */
	public function register(): void
	{
		add_action( self::POPULATE_INFORMATIEOBJECTTYPEN_HOOK, ( new PopulateInformatieobjecttypen() )->init( ... ) );

		if ( ! wp_next_scheduled( self::POPULATE_INFORMATIEOBJECTTYPEN_HOOK )) {
			wp_schedule_event( $this->time_to_execute( 'tomorrow 04:00:00' ), 'daily', self::POPULATE_INFORMATIEOBJECTTYPEN_HOOK );
		}
	}

	/**
	 * @inheritDoc
	 */
	public function boot(): void
	{
	}

	private function time_to_execute( string $datetime = 'now' ): int
	{
		$current_date_time = new DateTime( $datetime, new DateTimeZone( wp_timezone_string() ) );

		return $current_date_time->getTimestamp();
	}
}
