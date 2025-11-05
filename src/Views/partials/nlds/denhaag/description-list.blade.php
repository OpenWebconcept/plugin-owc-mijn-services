@php
	/**
	 * Exit when accessed directly.
	 *
	 * @package OWC_Mijn_Services
	 */
	if (!defined('ABSPATH')) {
	    exit();
	}

	$items ??= [];
	$caption ??= null;
@endphp

<div class="js-nlds-denhaag-description-list-component" data-items='@json($items)'
	@if ($caption) data-caption="{{ $caption }}" @endif>
</div>
