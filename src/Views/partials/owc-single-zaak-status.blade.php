@php
	/**
	 * Exit when accessed directly.
	 *
	 * @package OWC_Mijn_Services
	 */
	if (!defined('ABSPATH')) {
	    exit();
	}

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

<h2 class="nl-heading nl-heading--level-2">{{ __('Status', 'owc-mijn-services') }}</h2>

@if (empty($steps) || $zaak?->status?->statustype?->omschrijving === 'Niet Beschikbaar')
	<p class="nl-paragraph">{{ __('Er is (momenteel) geen status beschikbaar.', 'owc-mijn-services') }}</p>
@else
	@include('partials.nlds.denhaag.status', ['steps' => $stepsData])
@endif
