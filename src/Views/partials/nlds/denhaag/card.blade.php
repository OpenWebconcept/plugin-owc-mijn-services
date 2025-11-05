@php
	/**
	 * Exit when accessed directly.
	 *
	 * @package OWC_Mijn_Services
	 */
	if (!defined('ABSPATH')) {
	    exit();
	}

	$zaak ??= null;
	$appearance ??= '';
	$subTitle ??= '';
@endphp

@if ($zaak)
	<div class="js-nlds-denhaag-case-card-component" data-appearance="{{ $appearance }}"
		data-title="{{ $zaak->title() ?? '' }}" data-sub-title="{{ $subTitle }}"
		data-context="{{ $zaak->startDate('j F Y') ?? '' }}" data-href="{{ $zaak->permalink() ?? '' }}"
		@if ($zaak->startDate()) data-datetime="{{ $zaak->startDate('Y-m-d') }}" @endif>
	</div>
@endif
