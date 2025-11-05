@php
	$items ??= null;
	$caption ??= null;
@endphp

<div class="js-nlds-denhaag-description-list-component" data-caption="{{ $caption }}"
	data-items='@json($items)'>
</div>
