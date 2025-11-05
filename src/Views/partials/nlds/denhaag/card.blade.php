@php
	$appearance ??= null;
	$title ??= null;
	$subTitle ??= null;
	$context ??= null;
	$contextIsDate ??= false;
	$datetime ??= null;
	$href ??= null;
@endphp

<div class="js-nlds-denhaag-case-card-component" data-appearance="{{ $appearance }}" data-title="{{ $title }}"
	data-sub-title="{{ $subTitle }}" data-context="{{ $context }}" data-href="{{ $href }}"></div>
