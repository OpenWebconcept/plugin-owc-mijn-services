@php
	/**
	 * Exit when accessed directly.
	 *
	 * @package OWC_Mijn_Services
	 */
	if (!defined('ABSPATH')) {
	    exit();
	}

	$result = $zaak->getValue('resultaat')?->toelichting;
	$endDate = $endDate ?? null;
@endphp

@if (isset($endDate))
	<h2 class="nl-heading nl-heading--level-2">{{ __('Zaak resultaat', 'owc-mijn-services') }}</h2>
	<p class="nl-paragraph">{{ $result }}</p>
@endif
