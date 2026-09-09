@php
	/**
	 * Exit when accessed directly.
	 *
	 * @package OWC_Mijn_Services
	 */
	if (!defined('ABSPATH')) {
	    exit();
	}

	$steps ??= [];
	$collapsible ??= true;

@endphp

<div class="js-nlds-denhaag-status-component" data-steps='@json($steps)'
	data-collapsible="{{ $collapsible }}">
</div>
