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
	<section class="denhaag-card-group">
		@foreach ($zaken as $zaak)
			@include('partials.nlds.denhaag.card', ['zaak' => $zaak])
		@endforeach
	</section>
@endif
