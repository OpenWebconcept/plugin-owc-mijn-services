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

<div class="zaak-meta-item">
	{!! $icon !!}
	<div class="zaak-meta-item__label">{!! $label !!}</div>
	<div class="zaak-meta-item__value">{!! $value !!}</div>
</div>
