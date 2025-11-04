@php
	$title ??= null;
	$subtitle ??= null;
	$context ??= null;
	$contextIsDate ??= false;
	$datetime ??= null;
	$href ??= null;
	$ariaLabel ??= null;
@endphp

<div class="denhaag-case-card">
	<div class="denhaag-case-card__wrapper">
		<div class="denhaag-case-card__background"></div>

		<div>
			@if ($title)
				<p class="nl-paragraph denhaag-case-card__title nl-paragraph">{{ $title }}</p>
			@endif

			@if ($subtitle)
				<p class="nl-paragraph denhaag-case-card__subtitle">{{ $subtitle }}</p>
			@endif
		</div>

		<div class="denhaag-case-card__footer">
			<div class="denhaag-case-card__context">
				@if ($context)
					@if ($contextIsDate && $datetime)
						<time datetime="{{ $datetime }}">
							{{ $context }}
						</time>
					@else
						{{ $context }}
					@endif
				@endif
			</div>

			@if ($href)
				<a href="{{ $href }}" class="nl-link denhaag-case-card__action" aria-label="{{ $ariaLabel ?? $title }}">
					<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24"
						class="denhaag-icon denhaag-case-card__arrow" focusable="false" aria-hidden="true">
						<path fill="currentColor"
							d="M12.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L16.586 13H5a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414" />
					</svg>
				</a>
			@endif
		</div>
	</div>
</div>
