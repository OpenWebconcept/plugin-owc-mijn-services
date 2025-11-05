<h2 class="nl-heading nl-heading--level-2">Status</h2>

@if (empty($steps) || $zaak?->status?->statustype?->omschrijving === 'Niet Beschikbaar')
	<p class="nl-paragraph">Er is (momenteel) geen status beschikbaar.</p>
@else
	@include('partials.nlds.denhaag.status', ['steps' => $steps, 'zaak' => $zaak])
@endif
