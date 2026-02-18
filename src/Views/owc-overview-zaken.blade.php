@php
	/**
	 * Exit when accessed directly.
	 *
	 * @package OWC_Mijn_Services
	 */
	if (!defined('ABSPATH')) {
	    exit();
	}

	$tabs = [
	    [
	        'label' => 'Lopende zaken',
	        // Uses partials/nlds/denhaag/card to render each card.
			'cards' => $current_zaken,
	    ],
		[
	        'label' => 'Afgeronde zaken',
	        'cards' => $completed_zaken,
	    ],
	];
@endphp

<div class="js-nlds-denhaag-tab-component" data-tabs='@json($tabs)'></div>
