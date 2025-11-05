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

	@include('partials.owc-single-zaak-details', ['zaak' => $zaak])

	@include('partials.owc-single-zaak-documents', [
		'zaak' => $zaak,
		'information_objects' => $information_objects,
	])

	@include('partials.owc-single-zaak-status', [
		'zaak' => $zaak,
		'steps' => $steps,
	])

	@include('partials.owc-single-zaak-result', [
		'zaak' => $zaak,
		'endDate' => $endDate ?? null,
	])

	@include('partials.owc-single-zaak-original-application', [
		'zaak' => $zaak,
	])
@else
	<p>{{ __('Zaak niet gevonden.', 'owc-mijn-services') }}</p>
@endif
