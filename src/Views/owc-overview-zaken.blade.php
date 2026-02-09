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
			'cards' => array_map(
				function ($zaak) {
					return [
						'appearance' => '',
						'title' => $zaak->title(),
						'subTitle' => '',
						'context' => $zaak->startDate('j F Y'),
						'datetime' => $zaak->startDate('Y-m-d'),
						'href' => $zaak->permalink(),
					];
				},
				$zaken
			),
	    ],
	    [
	        'label' => 'Afgeronde zaken',
	        // Todo
	        'html' => '',
	    ],
	];
@endphp

<div class="js-nlds-denhaag-tab-component" data-tabs='@json($tabs)'></div>
