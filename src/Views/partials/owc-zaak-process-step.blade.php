@php
	/**
	 * Exit when accessed directly.
	 *
	 * @package OWC_Mijn_Services
	 */
	if (!defined('ABSPATH')) {
	    exit();
	}

	$isPastIcon =
	    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"/></svg>';
@endphp

<li
	class="zaak-process-steps__step {{ $isCurrent ? 'zaak-process-steps__step--current' : '' }}{{ $isPast ? 'zaak-process-steps__step--past' : '' }}"
	aria-current="">
	<span class="zaak-process-steps__step-marker">
		{!! $isPast ? $isPastIcon : $step->volgnummer() !!}
	</span>
	<span class="zaak-process-steps__step-heading-label">
		{{ $step->omschrijving }}
		@if ($stepUpdate)
			<small>({{ $stepUpdate?->datumStatusGezet?->format('d-m-Y') }})</small>
		@endif
	</span>
</li>
