@php
	/**
	 * Exit when accessed directly.
	 *
	 * @package OWC_Mijn_Services
	 */
	if (!defined('ABSPATH')) {
	    exit();
	}

	$steps ??= [];
	$collapsible ??= false;

	// Example steps data structure with sub steps.
	// $steps = [
	//     [
	//         'id' => 'step-1',
	//         'title' => 'Stap 1: Aanvraag ingediend',
	//         'status' => 'checked',
	//         'date' => '6 januari 2025',
	//         'meta' => 'Door: John Doe',
	//     ],
	//     [
	//         'id' => 'step-2',
	//         'title' => 'Stap 2: Controle gegevens',
	//         'status' => 'current',
	//         'date' => '16 januari 2025',
	//         'steps' => [
	//             [
	//                 'id' => 'step-2a',
	//                 'title' => 'Substap 2a: Controle adres',
	//                 'status' => 'checked',
	//                 'date' => '20 januari 2025',
	//             ],
	//             [
	//                 'id' => 'step-2b',
	//                 'title' => 'Substap 2b: Controle identiteitsbewijs',
	//                 'status' => 'current',
	//             ],
	//         ],
	//     ],
	//     [
	//         'id' => 'step-3',
	//         'title' => 'Stap 3: Goedkeuring',
	//         'status' => 'not-checked',
	//         'date' => '6 februari 2025',
	//     ],
	//     [
	//         'id' => 'step-4',
	//         'title' => 'Stap 4: Afronden',
	//         'status' => 'not-checked',
	//         'date' => '6 februari 2025',
	//     ],
	// ];

@endphp

<div class="js-nlds-denhaag-status-component" data-steps='@json($steps)'
	data-collapsible="{{ $collapsible }}">
</div>
