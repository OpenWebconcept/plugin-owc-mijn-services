@php
	$object = $document->informatieobject;

	// Only render if allowed and download URL exists
	$downloadUrl = $object->isDisplayAllowed()
	    ? $object->downloadUrl($zaak->getValue('identificatie', ''), $zaak->getValue('supplier', ''))
	    : null;
@endphp

@if ($downloadUrl)
	<div class="js-nlds-denhaag-file-component" data-name="{{ $object->getValue('bestandsnaam', '') }}"
		data-href="{{ $downloadUrl }}" @if ($metaData = $object->formattedMetaData()) data-size="{{ $metaData }}" @endif
		@if ($lastUpdated = $object->getValue('lastUpdated', null)) data-last-updated="{{ $lastUpdated }}" @endif></div>
@endif
