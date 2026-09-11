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

<h2 class="nl-heading nl-heading--level-2">{{ __('Status', 'owc-mijn-services') }}</h2>

@if (empty($steps) || $zaak?->status?->statustype?->omschrijving === 'Niet Beschikbaar')
	<p class="nl-paragraph">{{ __('Er is (momenteel) geen status beschikbaar.', 'owc-mijn-services') }}</p>
@else
	@include('partials.nlds.denhaag.status', ['steps' => $steps])
@endif
