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

<div class="zaak-process">
	<h2>Status</h2>
	@if (empty($steps) || $hasNoStatus)
		<p>Momenteel is er geen status beschikbaar.</p>
	@else
		<ol class="zaak-process-steps">
			@foreach ($steps as $step)
				@php
					$statusUpdate = null;
					if (!empty($vars['status_history'])) {
					    $statusUpdate = $vars['status_history']
					        ->filter(function ($status) use ($step) {
					            return $status->statustype->url === $step->url;
					        })
					        ->first();
					}
				@endphp
				@include('partials.owc-zaak-process-step', [
					'step' => $step,
					'isCurrent' => $step->isCurrent(),
					'isPast' => $step->isPast(),
					'stepUpdate' => $statusUpdate ?? false,
				])
			@endforeach
		</ol>
	@endif
</div>
