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

			$name = $object->getValue('bestandsnaam', '');
			$href = $object->downloadUrl($zaak->getValue('identificatie', ''), $zaak->getValue('supplier', ''));
			$size = $object->sizeFormatted() ?: null;
			$lastUpdated = $object->getValue('lastUpdated', null);
			$creationDate = $object->getValue('creatiedatum', null);

			if (null === $lastUpdated && $creationDate instanceof DateTimeImmutable) {
			    $lastUpdated = $creationDate->format('Y-m-d');
			}
		@endphp

		@include('partials.nlds.denhaag.file', [
			'name' => $name,
			'href' => $href,
			'size' => $size,
			'lastUpdated' => $lastUpdated,
		])
	@endforeach
@endif
