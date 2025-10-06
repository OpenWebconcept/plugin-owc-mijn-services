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

@if (!empty($zaken) && count($zaken) > 0)
	<div class="zaak-card-wrapper">
		@foreach ($zaken as $zaak)
			<div class="zaak" data-identifier="{{ $zaak->uuid }}">
				@include('partials.owc-zaak-collapse-button', [
					'title' => $zaak->title(),
					'id' => $zaak->identification(),
				])
				<div class="collapse" id="collapse-{{ $zaak->identification() }}">
					<div class="zaak-content">
						@include('partials.owc-zaak-meta', [
							'zaak' => $zaak,
						])

						@include('partials.owc-zaak-process-steps', [
							'steps' => $zaak->steps(),
							'status_history' => $zaak->statusHistory(),
							'currentStep' => $zaak->statusExplanation(),
							'hasNoStatus' => $zaak->hasNoStatus(),
						])

						@if ($zaak->informationObjects() && $zaak->informationObjects()->count() > 0)
							@include('partials.owc-zaak-documents', [
								'documents' => $zaak->informationObjects(),
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
