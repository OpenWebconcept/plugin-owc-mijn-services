@php
	// Example steps data structure with sub steps.
	// $stepsData = [
	//     [
	//         'id' => 'step-1',
	//         'title' => 'Stap 1: Aanvraag ingediend',
	//         'status' => 'checked',
	//         'date' => $zaak->registerDate('j F Y'),
	//         'meta' => 'Door: John Doe',
	//     ],
	//     [
	//         'id' => 'step-2',
	//         'title' => 'Stap 2: Controle gegevens',
	//         'status' => 'current',
	//         'date' => $zaak->startDate('j F Y'),
	//         'steps' => [
	//             [
	//                 'id' => 'step-2a',
	//                 'title' => 'Substap 2a: Controle adres',
	//                 'status' => 'checked',
	//                 'date' => $zaak->startDate('j F Y'),
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
	//         'date' => $zaak->endDatePlanned(),
	//     ],
	//     [
	//         'id' => 'step-4',
	//         'title' => 'Stap 4: Afronden',
	//         'status' => 'not-checked',
	//         'date' => $zaak->endDate(),
	//     ],
	// ];

	$stepsData = [];

	foreach ($steps as $step) {
	    $statusUpdate = null;

	    if (!empty($zaak->statussen)) {
	        $statusUpdate = $zaak->statussen->filter(fn($status) => $status->statustype->url === $step->url)->first();
	    }

	    // Determine step status
	    if ($step->isPast()) {
	        $status = 'checked';
	    } elseif ($step->isCurrent()) {
	        $status = 'current';
	    } else {
	        $status = 'not-checked';
	    }

	    $stepItem = [
	        'id' => 'step-' . $step->volgnummer,
	        'title' => $step->getValue('omschrijving', ''),
	        'status' => $status,
	        'date' => $statusUpdate?->datumStatusGezet?->format('j F Y') ?? null,
	        'meta' => $step->isPast() ? 'Volgnummer: ' . $step->volgnummer : null,
	    ];

	    $stepsData[] = $stepItem;
	}

@endphp

<div class="js-nlds-denhaag-status-component" data-steps='@json($stepsData)' data-collapsible="true">
</div>
