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

@if (isset($zaak) && $zaak instanceof \OWC\ZGW\Entities\Zaak)
	<h1 class="nl-heading nl-heading--level-1">{{ $zaak->title }}</h1>

	@php
		$fields = [
		    'Datum aanvraag' => $zaak->registerDate('j F Y'),
		    'Startdatum' => $zaak->startDate('j F Y'),
		    'Einddatum gepland' => $zaak->endDatePlanned() && empty($zaak->endDate()) ? $zaak->endDatePlanned() : null,
		    'Einddatum' => $zaak->endDate(),
		    'Zaaknummer' => $zaak->getValue('identificatie', ''),
		];

		$zaakMeta = [];

		foreach ($fields as $title => $detail) {
		    if (!empty($detail)) {
		        $zaakMeta[] = compact('title', 'detail');
		    }
		}
	@endphp

	<h2 class="nl-heading nl-heading--level-2">Details</h2>
	@include('partials.nlds.denhaag.description-list', ['items' => $zaakMeta])

	@if (isset($information_objects) && $information_objects->count() > 0)
		<h2 class="nl-heading nl-heading--level-2">Documenten</h2>

		@foreach ($information_objects as $document)
			@include('partials.nlds.denhaag.file', ['document' => $document, 'zaak' => $zaak])
		@endforeach
	@endif

	@if (empty($steps) || $zaak?->status?->statustype?->omschrijving === 'Niet Beschikbaar')
		<p>Momenteel is er geen status beschikbaar.</p>
	@else
		<h2 class="nl-heading nl-heading--level-2">Status</h2>
		@include('partials.nlds.denhaag.status', ['steps' => $steps, 'zaak' => $zaak])
	@endif

	@if (($result = $zaak->getValue('resultaat')?->toelichting) && isset($endDate))
		<h2 class="nl-heading nl-heading--level-2">Zaak resultaat</h2>
		<p class="nl-paragraph">{{ $result }}</p>
	@endif

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
		<ul class="zaak-documents">
			@foreach ($information_objects as $document)
				@if (
					$document->informatieobject->isConfidential() &&
						($downloadUrl = $document->informatieobject->downloadUrl(
							$zaak->getValue('identificatie', ''),
							$zaak->getValue('supplier', ''))))
					<li class="zaak-documents-item">
						<svg class="zaak-documents-item-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
							width="24" height="24">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-7-7Z" />
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 2v7h7" />
						</svg>

						<a class="zaak-documents-item-link" href="{{ $downloadUrl }}">
							<span>
								{{ $document->informatieobject->getValue('bestandsnaam', '') }}
								@if ($metaData = $document->informatieobject->formattedMetaData())
									<div class="zaak-documents-item-download-size">({{ $metaData }})</div>
								@endif
							</span>
							<div class="zaak-documents-item-download-button">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" width="20" height="20">
									<path fill="currentColor" fill-rule="evenodd"
										d="M2.5013 11.6665a.8333.8333 0 0 1 .8333.8333v3.3334a.8333.8333 0 0 0 .8334.8333h11.6666a.8334.8334 0 0 0 .8334-.8333v-3.3334a.8333.8333 0 0 1 1.6666 0v3.3334a2.5 2.5 0 0 1-2.5 2.5H4.168a2.4998 2.4998 0 0 1-2.5-2.5v-3.3334c0-.4602.373-.8333.8333-.8333Z"
										clip-rule="evenodd" />
									<path fill="currentColor" fill-rule="evenodd"
										d="M5.244 7.744a.8333.8333 0 0 1 1.1786 0L10 11.3216l3.5774-3.5774a.8333.8333 0 0 1 1.1785 0 .8332.8332 0 0 1 0 1.1785l-4.1666 4.1667a.8335.8335 0 0 1-1.1786 0L5.2441 8.9226a.8333.8333 0 0 1 0-1.1785Z"
										clip-rule="evenodd" />
									<path fill="currentColor" fill-rule="evenodd"
										d="M10.0013 1.6665a.8333.8333 0 0 1 .8333.8333v10a.8333.8333 0 1 1-1.6666 0v-10c0-.4602.373-.8333.8333-.8333Z"
										clip-rule="evenodd" />
								</svg>
								Download
							</div>
						</a>
					</li>
				@endif
			@endforeach
		</ul>
	@endif
@else
	<p>{{ __('Zaak niet gevonden.', 'owc-mijn-services') }}</p>
@endif
