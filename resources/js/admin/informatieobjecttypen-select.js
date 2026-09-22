/**
 * Turns the grouped 'Toegestane informatieobjecttypen' select into a searchable,
 * multi-select Select2 field so a long, per-supplier list stays easy to use.
 *
 * @package OWC_Mijn_Services
 */
( function ( $ ) {
	'use strict';

	$( function () {
		$( '.owcms-informatieobjecttypen-select' ).each( function () {
			const $select = $( this );

			$select.select2( {
				width: '100%',
				allowClear: true,
				placeholder: $select.data( 'placeholder' ) || '',
			} );
		} );
	} );
} )( jQuery );
