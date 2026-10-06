@php
	/**
	 * Exit when accessed directly.
	 *
	 * @package OWC_Mijn_Services
	 */
	if (!defined('ABSPATH')) {
	    exit();
	}
@endphp

@if ($information_objects->isNotEmpty())
	<h2 class="nl-heading nl-heading--level-2">{{ __('Documenten', 'owc-mijn-services') }}</h2>

	@foreach ($information_objects as $document)
		@php
			$object = $document->informatieobject;

			if (!$object->isDisplayAllowed()) {
			    continue;
			}

			$href = $object->downloadUrl($zaak->getValue('identificatie', ''), $zaak->getValue('supplier', ''));
			$name = $object->getValue('bestandsnaam', '');
			$id = $object->identification();
			$meta = $object->formattedMetaData();
			$extension = $object->formatType();
		@endphp

		@include('partials.components.file', compact('extension', 'href', 'id', 'meta', 'name'))
	@endforeach
@endif
