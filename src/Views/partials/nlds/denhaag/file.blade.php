@php
	$name ??= null;
	$href ??= null;
	$size ??= null;
	$lastUpdated ??= null;
@endphp

@if ($href)
	<div class="js-nlds-denhaag-file-component" data-name="{{ $name }}" data-href="{{ $href }}"
		@if ($size) data-size="{{ $size }}" @endif
		@if ($lastUpdated) data-last-updated="{{ $lastUpdated }}" @endif></div>
@endif
