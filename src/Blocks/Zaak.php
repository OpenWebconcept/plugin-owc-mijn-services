<?php

declare(strict_types=1);

namespace OWC\My_Services\Blocks;

use OWC\My_Services\Providers\BlockServiceProvider;
use OWC\ZGW\Entities\Zaak as ZaakEntity;

class Zaak extends Block
{
	protected function renderBlock(array $attributes, string $block_content, \WP_Block $block): string
	{
		$zaaknummer = sanitize_text_field(get_query_var(BlockServiceProvider::QUERY_VAR_ZAAKNUMMER));

		$this->zaken_filter->add('identificatie', $zaaknummer);
		$zaken = $this->getZaken();
		if ($zaken->isEmpty()) {
			return '<p>' . __('Zaak niet gevonden.', 'owc-mijn-services') . '</p>';
		}

		return $this->renderZaak($zaken->first());
	}

	protected function renderZaak(ZaakEntity $zaak): string
	{
		//TODO: naar template
		$output = '<h1>' . $zaak->identificatie . '</h1>';

		$output .= '<h2>' . __('Details', 'owc-mijn-services') . '</h2>';
		$output .= '<p>' . __('Datum aanvraag: ', 'owc-mijn-services') . $zaak->registratiedatum->format('Y-m-d') . '</p>';
		$output .= '<hr>';
		$output .= '<p>' . __('Startdatum: ', 'owc-mijn-services') . $zaak->startdatum->format('Y-m-d') . '</p>';
		$output .= '<hr>';
		if ($zaak->einddatum) {
			$output .= '<p>' . __('Einddatum: ', 'owc-mijn-services') . $zaak->einddatum->format('Y-m-d') . '</p>';
		} else {
			$output .= '<p>' . __('Einddatum: ', 'owc-mijn-services') . __('Niet beschikbaar', 'owc-mijn-services') . '</p>';
		}
		$output .= '<hr>';
		$output .= '<p>' . __('Zaaknummer: ', 'owc-mijn-services') . $zaak->identificatie . '</p>';
		$output .= '<hr>';

		$output .= '<h2>' . __('Documenten', 'owc-mijn-services') . '</h2>';

		foreach ($this->getZaakInformatieObjecten($zaak) as $zaakInformatieObject) {
			$output .= '<p>' . $zaakInformatieObject->informatieobject->bestandsnaam . '</p>';
			$output .= '<p>' . size_format($zaakInformatieObject->informatieobject->bestandsomvang) . '</p>';
			$output .= '<p>' . $zaakInformatieObject->informatieobject->creatiedatum->format('Y-m-d') . '</p>';
			//TODO: link naar document
			$output .= '<hr>';
		}

		$output .= '<h2>' . __('Status', 'owc-mijn-services') . '</h2>';
		$output .= '<p>' . __('Geregistreerd', 'owc-mijn-services') .'</p>';
		foreach ($zaak->statussen as $status) {
			$output .= '<p>' . $status->statustype->statustekst . ' (' . $status->datumStatusGezet->format('Y-m-d') . ')' . '</p>';
		}

		$output .= '<h2>' . __('Originele aanvraag', 'owc-mijn-services') . '</h2>';
		$output .= '<p>' . __('Datum aanvraag: ', 'owc-mijn-services') . $zaak->registratiedatum->format('Y-m-d') . '</p>';
		$output .= '<hr>';
		$output .= '<p>' . __('Zaaktype: ', 'owc-mijn-services') . $zaak->zaaktype->omschrijvingGeneriek . '</p>';

		return $output;
	}
}
