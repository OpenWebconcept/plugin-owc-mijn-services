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

@if (isset($confidential_information_objects) && $confidential_information_objects->isNotEmpty())
	@foreach ($confidential_information_objects as $document)
		@php
			$object = $document->informatieobject;
			$href = $object->downloadUrl($zaak->getValue('identificatie', ''), $zaak->getValue('supplier', ''));

			$name = $object->getValue('bestandsnaam', '');
			$id = $object->identification();
			$meta = $object->formattedMetaData();
			$extension = $object->formatType();
		@endphp

		@include('partials.components.file', compact('extension', 'href', 'id', 'meta', 'name'))
	@endforeach
@endif
