@php
	/**
	 * Exit when accessed directly.
	 *
	 * @package owc-mijn-services
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
				@if (!empty($document->informatieobject->downloadUrl($zaak->identification(), $zaak->getSupplier())))
					<li>
						<a href="{{ $document->informatieobject->downloadUrl($zaak->identification(), $zaak->getSupplier()) }}">
							{{ $document->informatieobject->fileName() }}
							@if ($document->informatieobject->formattedMetaData())
								({{ $document->informatieobject->formattedMetaData() }})
							@endif
						</a>
					</li>
				@endif
			@endforeach
		</ul>
	@endif
</div>
