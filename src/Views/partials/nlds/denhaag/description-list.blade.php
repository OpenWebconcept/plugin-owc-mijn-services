@php
	$fields = [
	    'Datum aanvraag' => $zaak->registerDate('j F Y'),
	    'Startdatum' => $zaak->startDate('j F Y'),
	    'Einddatum gepland' => $zaak->endDatePlanned() && empty($zaak->endDate()) ? $zaak->endDatePlanned() : null,
	    'Einddatum' => $zaak->endDate(),
	    'Zaaknummer' => $zaak->getValue('identificatie', ''),
	];

	$items = [];

	foreach ($fields as $title => $detail) {
	    if (!empty($detail)) {
	        $items[] = compact('title', 'detail');
	    }
	}
@endphp

<div class="js-nlds-denhaag-description-list-component" data-caption="Details" data-items='@json($items)'>
</div>
