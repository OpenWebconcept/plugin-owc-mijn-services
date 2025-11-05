@if (isset($information_objects) && $information_objects->count() > 0)
	<h2 class="nl-heading nl-heading--level-2">Documenten</h2>

	@foreach ($information_objects as $document)
		@php
			$object = $document->informatieobject;

			$href = $object->isDisplayAllowed()
			    ? $object->downloadUrl($zaak->getValue('identificatie', ''), $zaak->getValue('supplier', ''))
			    : null;

			$name = $object->getValue('bestandsnaam', '');
			$size = $object->formattedMetaData() ?: null;
			$lastUpdated = $object->getValue('lastUpdated', null);
		@endphp

		@include('partials.nlds.denhaag.file', [
			'name' => $name,
			'href' => $href,
			'size' => $size,
			'lastUpdated' => $lastUpdated,
		])
	@endforeach
@endif
