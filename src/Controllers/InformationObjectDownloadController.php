<?php

declare(strict_types=1);

/**
 * Information object download controller.
 *
 * @package OWC_Mijn_Services
 * @author  Yard | Digital Agency
 * @since   0.4.0
 */

namespace OWC\My_Services\Controllers;

/**
 * Exit when accessed directly.
 */
if ( ! defined( 'ABSPATH' )) {
	exit;
}

use OWC\My_Services\Services\InformatieObjectDownloadService;
use function OWC\ZGW\container;

/**
 * Information object download controller.
 *
 * @since 0.4.0
 */
class InformationObjectDownloadController
{
	public function handle(): void
	{
		$service = new InformatieObjectDownloadService();

		$file = $service->download_file_from_request();

		if ( ! $file || ! file_exists( $file )) {
			wp_die( __( 'Het informatieobject kon niet worden gedownload.', 'owc-mijn-services' ) );
		}

		$this->initiate_file_download( $file );
	}

	/**
	 * Send headers, read file and finish with removing the file from temporary location.
	 */
	protected function initiate_file_download(string $file ): void
	{
		header( 'Content-Description: File Transfer' );
		header( sprintf( 'Content-Disposition: attachment; filename="%s"', $this->format_file_name( basename( $file ) ) ) );
		header( 'Expires: 0' );
		header( 'Cache-Control: must-revalidate' );
		header( 'Pragma: public' );
		header( 'Content-Length: ' . filesize( $file ) );
		readfile( $file );
		unlink( $file );
		exit;
	}

	/**
	 * Adds an extension to the file name.
	 */
	protected function format_file_name(string $file ): string
	{
		$parts = array(
			$file,
			$this->get_file_extension( $file ),
		);

		return implode( '.', array_filter( $parts ) );
	}

	protected function get_file_extension(string $file ): string
	{
		$finfo    = finfo_open( FILEINFO_MIME_TYPE );
		$mimeType = finfo_file( $finfo, $file );

		if ( ! is_string( $mimeType ) || 1 > strlen( $mimeType )) {
			return '';
		}

		$mimeMap = container()->get( 'mime.mapping' );

		return is_array( $mimeMap ) ? ( $mimeMap[ $mimeType ] ?? '' ) : '';
	}
}
