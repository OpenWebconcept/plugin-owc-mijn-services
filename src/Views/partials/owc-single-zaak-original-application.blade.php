@php
	/**
	 * Exit when accessed directly.
	 *
	 * @package OWC_Mijn_Services
	 */
	if (!defined('ABSPATH')) {
	    exit();
	}

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

<h2 class="nl-heading nl-heading--level-2">{{ __('Originele aanvraag', 'owc-mijn-services') }}</h2>

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
			$id = $object->identification();
			$meta = $object->formattedMetaData();
			$extension = $object->formatType();
		@endphp

		@include('partials.components.file', compact('extension', 'href', 'id', 'meta', 'name'))
	@endforeach
@endif
