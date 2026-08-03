@php
	/**
	 * Exit when accessed directly.
	 *
	 * @package OWC_Mijn_Services
	 */
	if (!defined('ABSPATH')) {
	    exit();
	}

	$tabs = array_values(array_filter([
	    [
	        'label' => 'Lopende zaken',
	        // Uses partials/nlds/denhaag/card to render each card.
			'cards' => $current_zaken,
	    ],
		[
	        'label' => 'Afgeronde zaken',
	        'cards' => $completed_zaken,
	    ],
	], fn (array $tab): bool => !empty($tab['cards'])));
@endphp

<div class="js-nlds-denhaag-tab-component" data-tabs='@json($tabs)'></div>
