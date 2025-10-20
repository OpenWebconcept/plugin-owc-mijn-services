@php
	/**
	 * Exit when accessed directly.
	 *
	 * @package OWC_Mijn_Services
	 */
	if (!defined('ABSPATH')) {
	    exit();
	}

	$message = $message ?? __('Er is een onbekende fout opgetreden. Probeer het later opnieuw.', 'owc-mijn-services');
@endphp

@if (isset($message))
	<div class="owc-error">
		<h2>Er is een fout opgetreden</h2>
		<p>{{ $message }}</p>
	</div>
@endif
