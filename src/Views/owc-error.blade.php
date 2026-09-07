@php
	/**
	 * Exit when accessed directly.
	 *
	 * @package OWC_Mijn_Services
	 */
	if (!defined('ABSPATH')) {
	    exit();
	}

	$header_text = $header_text ?? __('Mijn zaken', 'owc-mijn-services');
	$message = $message ?? __('Er is een onbekende fout opgetreden. Probeer het later opnieuw.', 'owc-mijn-services');
@endphp

@if (isset($message))
	<div class="owc-mijn-services owc-error">
		<h2 class="owc-mijn-services-error__heading">{{ $header_text }}</h2>
		<p class="owc-mijn-services-error__message">{{ $message }}</p>
	</div>
@endif
