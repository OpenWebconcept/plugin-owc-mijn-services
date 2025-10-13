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

@if (is_array($zaken ?? false) && count($zaken) > 0)
	<div class="zaak-card-wrapper">
		@foreach ($zaken as $zaak)
			<div class="zaak" data-identifier="{{ $zaak->uuid }}">
				@include('partials.owc-zaak-collapse-button', [
					'title' => $zaak->title,
					'id' => $zaak->getValue('identificatie', ''),
				])
				<div class="collapse" id="collapse-{{ $zaak->getValue('identificatie', '') }}">
					<div class="zaak-content">
						@include('partials.owc-zaak-meta', [
							'zaak' => $zaak,
						])

						@include('partials.owc-zaak-process-steps', [
							'steps' => $zaak->steps,
							'statusHistory' => $zaak->statussen,
							'currentStep' => $zaak?->resultaat?->toelichting,
							'hasNoStatus' => $zaak?->status?->statustype?->omschrijving === 'Niet Beschikbaar',
						])

						@if ($zaak?->zaakinformatieobjecten && $zaak?->zaakinformatieobjecten->count() > 0)
							@include('partials.owc-zaak-documents', [
								'documents' => $zaak?->zaakinformatieobjecten,
								'zaak' => $zaak,
							])
						@endif

					</div>
					<a href="{{ $zaak->permalink() }}" class="button">Detailpagina</a>
				</div>
			</div>
		@endforeach
	</div>
@endif
