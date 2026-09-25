@php
	/**
	 * Exit when accessed directly.
	 *
	 * @package OWC_Mijn_Services
	 */
	if (!defined('ABSPATH')) {
	    exit();
	}

	$hideStatusStepsWithoutDate ??= false;
	$hideVolgnummers ??= false;

	$stepsData = [];
	$hasZaakStatussen = $zaak->statussen->isNotEmpty();
	$statussenByStatustype = [];

	if ($hasZaakStatussen) {
	    foreach ($zaak->statussen->all() as $status) {
	        $statustype = $status->getAttributeValue('statustype');

	        if (!isset($statussenByStatustype[$statustype])) {
	            $statussenByStatustype[$statustype] = $status;
	        }
	    }
	}

	// The next step is only marked as current once the current step is actually checked (has a date).
	$currentStepChecked = false;

	foreach ($steps as $step) {
	    $statusUpdate = null;

	    if ($hasZaakStatussen) {
	        $statusUpdate = $statussenByStatustype[$step->url] ?? null;
			$statusUpdate = is_object($statusUpdate) && $statusUpdate->datumStatusGezet ? $statusUpdate : null;

			if ($statusUpdate) {
				$statusUpdate = date_i18n(get_option('date_format'), $statusUpdate->datumStatusGezet->getTimestamp());
			} elseif ($hideStatusStepsWithoutDate) {
				continue; // Skip steps without a date.
			}
	    }

	    // Determine step status
	    if ($step->isPast() && $statusUpdate) {
	        $status = 'checked';
	    } elseif ($step->isCurrent() && $statusUpdate) {
	        $status = 'checked';
	        $currentStepChecked = true;
	    } elseif ($step->isNext() && $currentStepChecked) {
	        $status = 'current';
	    } else {
	        $status = 'not-checked';
	    }

	    $stepItem = [
	        'id' => 'step-' . $step->volgnummer,
	        'title' => $step->getValue('omschrijving', ''),
	        'status' => $status,
	        'date' => $statusUpdate ?? null,
	        'meta' => !$hideVolgnummers && ($step->isPast() || $step->isCurrent()) ? 'Volgnummer: ' . $step->volgnummer : null,
	    ];

	    $stepsData[] = $stepItem;
	}
@endphp

<h2 class="nl-heading nl-heading--level-2">{{ __('Status', 'owc-mijn-services') }}</h2>

@if ($steps->isEmpty() || $zaak?->status?->statustype?->omschrijving === 'Niet Beschikbaar')
	<p class="nl-paragraph">{{ __('Er is (momenteel) geen status beschikbaar.', 'owc-mijn-services') }}</p>
@else
	@include('partials.nlds.denhaag.status', ['steps' => $stepsData])
@endif
