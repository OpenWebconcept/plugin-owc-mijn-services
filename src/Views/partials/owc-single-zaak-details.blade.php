@php
	/**
	 * Exit when accessed directly.
	 *
	 * @package OWC_Mijn_Services
	 */
	if (!defined('ABSPATH')) {
	    exit();
	}

	$fields = [
	    'Datum aanvraag' => $zaak->registerDate('j F Y'),
	    'Startdatum' => $zaak->startDate('j F Y'),
	    'Einddatum gepland' => $zaak->endDatePlanned() && empty($zaak->endDate()) ? $zaak->endDatePlanned() : null,
	    'Einddatum' => $zaak->endDate(),
	    'Zaaknummer' => $zaak->getValue('identificatie', ''),
	];

	$zaakMeta = [];

	foreach ($fields as $title => $detail) {
	    if (!empty($detail)) {
	        $zaakMeta[] = compact('title', 'detail');
	    }
	}
@endphp

<h2 class="nl-heading nl-heading--level-2">{{ __('Details', 'owc-mijn-services') }}</h2>

@include('partials.nlds.denhaag.description-list', ['items' => $zaakMeta])
