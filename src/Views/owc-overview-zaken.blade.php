@php
	/**
	 * Exit when accessed directly.
	 *
	 * @package OWC_Mijn_Services
	 */
	if (!defined('ABSPATH')) {
	    exit();
	}

	$show_tabs = $show_tabs ?? true;
	$all_zaken = $all_zaken ?? [];

	$tabs = [
	    [
	        'label' => __('Lopende zaken', 'owc-mijn-services'),
	        // Uses partials/nlds/denhaag/card to render each card.
	        'cards' => $current_zaken,
	        'emptyMessage' => __('U heeft op dit moment geen lopende zaken.', 'owc-mijn-services'),
	    ],
	    [
	        'label' => __('Afgeronde zaken', 'owc-mijn-services'),
	        'cards' => $completed_zaken,
	        'emptyMessage' => __('U heeft nog geen afgeronde zaken.', 'owc-mijn-services'),
	    ],
	];
@endphp

@if ($show_tabs)
	<div class="js-nlds-denhaag-tab-component" data-tabs-enabled="true" data-tabs='@json($tabs)'></div>
@else
	<div class="js-nlds-denhaag-tab-component" data-tabs-enabled="false" data-cards='@json($all_zaken)'></div>
@endif
