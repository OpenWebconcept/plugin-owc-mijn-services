/**
 * Turns the zaaktype select of every 'Startdatum per zaaktype' row into a searchable
 * Select2 field, so a long, per-supplier list of zaaktypen stays easy to use.
 *
 * A zaaktype can only be configured once, so zaaktypen already chosen in another row are
 * shown greyed out and can't be selected. The server removes any duplicates left on save.
 *
 * @package OWC_Mijn_Services
 */
( function ( $ ) {
	'use strict';

	const SELECTOR = '.owcms-zaaktype-select';

	/**
	 * Whether the zaaktype is selected in a row other than the one of the given select.
	 */
	function isChosenElsewhere( value, $select ) {
		return $( SELECTOR )
			.not( $select )
			.toArray()
			.some( ( select ) => select.value === value );
	}

	function init( $selects ) {
		$selects.each( function () {
			const $select = $( this );

			$select.select2( {
				width: '100%',
				allowClear: true,
				placeholder: $select.data( 'placeholder' ) || '',
				templateResult( data ) {
					if ( ! data.id || ! isChosenElsewhere( data.id, $select ) ) {
						return data.text;
					}

					return $( '<span>' )
						.css( 'opacity', 0.5 )
						.text( data.text + ' (al toegevoegd)' );
				},
			} );

			$select.on( 'select2:selecting', function ( event ) {
				if ( isChosenElsewhere( event.params.args.data.id, $select ) ) {
					event.preventDefault();
				}
			} );
		} );
	}

	$( function () {
		init( $( SELECTOR ) );

		// CMB2 adds a group row by copying the HTML of the last row, including the Select2
		// widget markup of its zaaktype select. Strip that copy and re-initialise Select2.
		//
		// Select2 looks up the data of the select, its <optgroup>s and <option>s by their
		// 'data-select2-id' attribute. The copied attributes still point at the data of the
		// previous row, so selecting in the new row would select the option of the previous
		// row instead. Remove them all, so Select2 builds fresh data for the new row.
		$( document ).on( 'cmb2_add_row', function ( event, $row ) {
			const $selects = $( $row ).find( SELECTOR );

			if ( 0 === $selects.length ) {
				return;
			}

			$( $row ).find( '.select2-container' ).remove();
			$selects
				.removeClass( 'select2-hidden-accessible' )
				.removeAttr( 'aria-hidden tabindex' );
			$selects
				.add( $selects.find( '[data-select2-id]' ) )
				.removeAttr( 'data-select2-id' );
			$selects.val( '' );

			init( $selects );
		} );
	} );
} )( jQuery );
