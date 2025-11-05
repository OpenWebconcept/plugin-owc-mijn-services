@php
	/**
	 * Exit when accessed directly.
	 *
	 * @package OWC_Mijn_Services
	 */
	if (!defined('ABSPATH')) {
	    exit();
	}

	$appearance ??= '';
	$title ??= '';
	$subTitle ??= '';
	$href ??= '';
	$context ??= '';
	$datetime ??= '';
@endphp

@if ($zaak)
	<div class="js-nlds-denhaag-case-card-component" data-appearance="{{ $appearance }}" data-title="{{ $title }}"
		data-sub-title="{{ $subTitle }}" data-context="{{ $context }}" data-href="{{ $href }}"
		@if ($datetime) data-datetime="{{ $datetime }}" @endif>
	</div>
@endif
