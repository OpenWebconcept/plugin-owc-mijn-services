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
	<h1>{{ $zaak->title }}</h1>
	<div class="zaak-details">
		<h2>Details</h2>
		<table class="zaak-details-table">
			@if ($registerDate = $zaak->registerDate('j F Y'))
				<tr>
					<th>Datum aanvraag</th>
					<td>{{ $registerDate }}</td>
				</tr>
			@endif

			@if ($startDate = $zaak->startDate('j F Y'))
				<tr>
					<th>Startdatum</th>
					<td>{{ $startDate }}</td>
				</tr>
			@endif

			@if (($endDatePlanned = $zaak->endDatePlanned()) && empty($zaak->endDate()))
				<tr>
					<th>Einddatum gepland</th>
					<td>{{ $endDatePlanned }}</td>
				</tr>
			@endif

			@if ($endDate = $zaak->endDate())
				<tr>
					<th>Einddatum</th>
					<td>{{ $endDate }}</td>
				</tr>
			@endif

			@if ($identification = $zaak->getValue('identificatie', ''))
				<tr>
					<th>Zaaknummer</th>
					<td>{{ $identification }}</td>
				</tr>
			@endif
		</table>
	</div>

	@if (isset($information_objects) && $information_objects->count() > 0)
		<div>
			<ul class="zaak-documents">
				@foreach ($information_objects as $document)
					@if (
						$document->informatieobject->isDisplayAllowed() &&
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
		</div>
	@endif

	<div class="zaak-process">
		<h2>Status</h2>
		@if (empty($steps) || $zaak?->status?->statustype?->omschrijving === 'Niet Beschikbaar')
			<p>Momenteel is er geen status beschikbaar.</p>
		@else
			<ol class="zaak-process-steps">
				@foreach ($steps as $step)
					@php
						$statusUpdate = null;
						if (!empty($zaak->statussen)) {
						    $statusUpdate = $zaak->statussen
						        ->filter(function ($status) use ($step) {
						            return $status->statustype->url === $step->url;
						        })
						        ->first();
						}
						$isPastIcon = '<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path d="M17.2203 4.37701C17.5643 4.68277 17.5953 5.2095 17.2895 5.55348L8.40063 15.5535C8.24249 15.7314 8.01582 15.8332 7.77779 15.8332C7.53975 15.8332 7.31309 15.7314 7.15495 15.5535L2.7105 10.5535C2.40474 10.2095 2.43572 9.68277 2.77971 9.37701C3.12369 9.07124 3.65042 9.10222 3.95618 9.44621L7.77779 13.7455L16.0438 4.44621C16.3496 4.10222 16.8763 4.07124 17.2203 4.37701Z" fill="currentColor"/>
							<path d="M17.2203 4.37701C17.5643 4.68277 17.5953 5.2095 17.2895 5.55348L8.40063 15.5535C8.24249 15.7314 8.01582 15.8332 7.77779 15.8332C7.53975 15.8332 7.31309 15.7314 7.15495 15.5535L2.7105 10.5535C2.40474 10.2095 2.43572 9.68277 2.77971 9.37701C3.12369 9.07124 3.65042 9.10222 3.95618 9.44621L7.77779 13.7455L16.0438 4.44621C16.3496 4.10222 16.8763 4.07124 17.2203 4.37701Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>';
					@endphp

					<li
						class="zaak-process-steps__step {{ $step->isCurrent() ? 'zaak-process-steps__step--current' : '' }} {{ $step->isPast() ? 'zaak-process-steps__step--past' : '' }}"
						aria-current="">
						<span class="zaak-process-steps__step-marker">
							{!! $step->isPast() ? $isPastIcon : $step->volgnummer !!}
						</span>
						<span class="zaak-process-steps__step-heading-label">
							{{ $step->getValue('omschrijving', '') }}
							@if (!empty($statusUpdate))
								<small>({{ $statusUpdate?->datumStatusGezet?->format('d-m-Y') }})</small>
							@endif
						</span>
					</li>
				@endforeach
			</ol>
		@endif
	</div>

	<div class="zaak-details">
		<table class="zaak-details-table">
			@if (($result = $zaak->getValue('resultaat')?->toelichting) && isset($endDate))
				<tr>
					<th>Zaak resultaat</th>
					<td>{{ $result }}</td>
				</tr>
			@endif
		</table>
	</div>

	<div class="zaak-process">
		<h2>Originele aanvraag</h2>
		<table class="zaak-details-table">
			@if ($registerDate = $zaak->registerDate())
				<tr>
					<th>Datum aanvraag</th>
					<td>{{ $registerDate }}</td>
				</tr>
			@endif
			@if ($zaaktypeDesc = $zaak?->zaaktype?->omschrijvingGeneriek)
				<tr>
					<th>Zaaktype</th>
					<td>{{ $zaaktypeDesc }}</td>
				</tr>
			@endif
			@if ($clarification = $zaak->getValue('toelichting', ''))
				<tr>
					<th>Aanvraag</th>
					<td>{{ $clarification }}</td>
				</tr>
			@endif
		</table>
	</div>

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
