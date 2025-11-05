@php
	$zaak ??= null;
@endphp

@if ($zaak)
	<div class="js-nlds-denhaag-case-card-component" data-appearance="{{ $appearance ?? '' }}"
		data-title="{{ $zaak->title() ?? '' }}" data-sub-title="{{ $subTitle ?? '' }}"
		data-context="{{ $zaak->startDate('j F Y') ?? '' }}" data-href="{{ $zaak->permalink() ?? '' }}"
		@if (!empty($zaak->startDate())) data-datetime="{{ $zaak->startDate('Y-m-d') }}" @endif></div>
@endif
