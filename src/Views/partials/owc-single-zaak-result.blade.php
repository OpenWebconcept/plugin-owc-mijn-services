@php
	$result = $zaak->getValue('resultaat')?->toelichting;
	$endDate = $endDate ?? null;
@endphp

@if (isset($endDate))
	<h2 class="nl-heading nl-heading--level-2">Zaak resultaat</h2>
	<p class="nl-paragraph">{{ $result }}</p>
@endif
