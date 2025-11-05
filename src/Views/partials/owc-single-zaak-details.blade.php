<h2 class="nl-heading nl-heading--level-2">Details</h2>
@php
	$fields = [
	    'Datum aanvraag' => $zaak->registerDate('j F Y'),
	    'Startdatum' => $zaak->startDate('j F Y'),
	    'Einddatum gepland' => $zaak->endDatePlanned() && empty($zaak->endDate()) ? $zaak->endDatePlanned() : null,
	    'Einddatum' => $zaak->endDate(),
	    'Zaaknummer' => $zaak->getValue('identificatie', ''),
	];

	$zaakMeta = [];

	foreach ($fields as $title => $detail) {
	    if (!empty($detail)) {
	        $zaakMeta[] = compact('title', 'detail');
	    }
	}
@endphp

@include('partials.nlds.denhaag.description-list', ['items' => $zaakMeta])
