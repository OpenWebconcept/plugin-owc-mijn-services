@php
    /**
     * Exit when accessed directly.
     *
     * @package OWC_Mijn_Services
     */
    if (!defined('ABSPATH')) {
        exit();
    }

    /**
     * @var string $extension
     * @var string $href
     * @var string $id
     * @var string $name
     * @var string $meta
     */

    $nameId = 'name-' . $id;
    $descriptionId = 'description-' . $id;
@endphp

@if ($href)
    <a href="{{ $href }}" download="{{ $name }}" class="denhaag-file" aria-labelledby="{{ $nameId }}" @if ($meta) aria-describedby="{{ $descriptionId }}" @endif>
        <div class="denhaag-file__left">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 25" class="denhaag-icon denhaag-file__icon" focusable="false" aria-hidden="true" shape-rendering="auto">
                @if ($extension === 'pdf')
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 2.5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-11z"></path>
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 2.5v7h7"></path>
                @else
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 3.5H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-14a2 2 0 0 0-2-2"></path>
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 10.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M21 15.5l-5-5-11 11"></path>
                @endif
            </svg>
        </div>
        <div class="denhaag-file__right">
            <div class="denhaag-file__label">
                <span id="{{ $nameId }}"><bdi translate="no" class="utrecht-url-data">{{ $name }}</bdi></span>
                @if ($meta)
                    <span id="{{ $descriptionId }}">({{ $meta }})</span>
                @endif
            </div>
            <div class="denhaag-file__link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" class="denhaag-icon denhaag-file__link__icon" focusable="false" aria-hidden="true" shape-rendering="auto">
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13v4a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-4M5 8l5 5 5-5M10 13V1"></path>
                </svg>
                <div class="utrecht-link" tabindex="-1">{{ __('Download', 'owc-mijn-services') }}</div>
            </div>
        </div>
    </a>
@endif
