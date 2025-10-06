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

<div class="zaak-meta-item">
	{!! $icon !!}
	<div class="zaak-meta-item__label">{!! $label !!}</div>
	<div class="zaak-meta-item__value">{!! $value !!}</div>
</div>
