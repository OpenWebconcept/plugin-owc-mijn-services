@php
	$session_type = $session_type ?? '';
	$redirect_no_session = $redirect_no_session ?? '';
	$redirect_options = $redirect_options ?? [];
@endphp
<div class="owcms-field-group">
	<label for="owcms_protected_page_session_type" class="owcms-label">
		<strong>{{ __('Vereiste authenticatie', 'owc-my-services') }}</strong>
	</label>

	<select id="owcms_protected_page_session_type" name="owcms_protected_page_session_type" class="owcms-select">
		<option value="" @selected($session_type === '')>{{ __('Maak een keuze', 'owc-my-services') }}</option>
		<option value="digid" @selected($session_type === 'digid')>{{ __('DigiD', 'owc-my-services') }}</option>
		<option value="eherkenning" @selected($session_type === 'eherkenning')>{{ __('eHerkenning', 'owc-my-services') }}</option>
		<option value="both" @selected($session_type === 'both')>{{ __('DigiD of eHerkenning', 'owc-my-services') }}</option>
		<option value="none" @selected($session_type === 'none')>{{ __('Geen sessie toegestaan', 'owc-my-services') }}</option>
	</select>

	<small class="owcms-description">
		{{ __('Voorwaarde om toegang te krijgen tot deze pagina', 'owc-my-services') }}
	</small>
</div>

<div class="owcms-field-group">
	<label for="owcms_protected_page_redirect_post_id" class="owcms-label">
		<strong>{{ __('Redirect naar pagina', 'owc-my-services') }}</strong>
	</label>

	<select id="owcms_protected_page_redirect_post_id" name="owcms_protected_page_redirect_post_id" class="owcms-select">
		<option value="">{{ __('Selecteer een pagina', 'owc-my-services') }}</option>
		@foreach ($redirect_options as $post)
			<option value="{{ esc_attr($post->ID) }}" @selected($redirect_no_session == $post->ID)>
				{{ esc_html($post->post_title) }}
			</option>
		@endforeach
	</select>

	<small class="owcms-description">
		{{ __('Pagina waarheen gebruikers worden gestuurd als ze niet de vereiste authenticatie hebben.', 'owc-my-services') }}
	</small>
</div>
