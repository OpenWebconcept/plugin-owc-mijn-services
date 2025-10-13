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

<div class="zaak-documents">
	<h3>Documenten</h3>
	@if (empty($documents))
		<p>Er zijn geen documenten gevonden.</p>
	@else
		<ul>
			@foreach ($documents as $document)
				@if (
					$downloadUrl = $document->informatieobject->downloadUrl(
						$zaak->getValue('identificatie', ''),
						$zaak->getValue('supplier', '')))
					<li>
						<a href="{{ $downloadUrl }}">
							{{ $document->informatieobject->getValue('bestandsnaam', '') }}
							@if ($metaData = $document->informatieobject->formattedMetaData())
								({{ $metaData }})
							@endif
						</a>
					</li>
				@endif
			@endforeach
		</ul>
	@endif
</div>
