@php
	$fields = [
	    'Datum aanvraag' => $zaak->registerDate(),
	    'Zaaktype' => $zaak?->zaaktype?->omschrijvingGeneriek,
	    'Aanvraag' => $zaak->getValue('toelichting', ''),
	];

	$origineleAanvraag = [];

	foreach ($fields as $title => $detail) {
	    if (!empty($detail)) {
	        $origineleAanvraag[] = compact('title', 'detail');
	    }
	}
@endphp

<h2 class="nl-heading nl-heading--level-2">Originele aanvraag</h2>

@include('partials.nlds.denhaag.description-list', [
	'items' => $origineleAanvraag,
])

@if ($information_objects && $information_objects->count() > 0)
	@foreach ($information_objects as $document)
		@php
			$object = $document->informatieobject;

			// Only render if confidential and download URL exists
			$href = $object->isConfidential()
			    ? $object->downloadUrl($zaak->getValue('identificatie', ''), $zaak->getValue('supplier', ''))
			    : null;

			$name = $object->getValue('bestandsnaam', '');
			$size = $object->formattedMetaData() ?? null;
			$lastUpdated = $object->getValue('lastUpdated', null);
		@endphp

		@include('partials.nlds.denhaag.file', compact('name', 'href', 'size', 'lastUpdated'))
	@endforeach
@endif
