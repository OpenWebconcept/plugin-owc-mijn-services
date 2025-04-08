<?php

declare(strict_types=1);

namespace OWC\My_Services\Blocks;

use OWC\ZGW\Entities\Zaak;

class MijnZaken extends Block
{
	protected function renderBlock(array $attributes, string $block_content, \WP_Block $block): string
	{
		$this->zaken_filter->orderBy('registratiedatum');

		$zaken = $this->getZaken();

		if ($zaken->isEmpty()) {
			return '<p>' . __('Er zijn geen zaken gevonden.', 'owc-mijn-services') . '</p>';
		}

		$output = '';

		/** @var Zaak */
		foreach ($zaken->take(100) as $zaak) {
			$output .= '<h2>' . $zaak->zaaktype->omschrijvingGeneriek . '</h2></p>';
			$output .= '<p>' . $zaak->identificatie . '</p>';
			$output .= '<p>' . $zaak->registratiedatum->format('Y-m-d') . '</p>';
			$output .= '<p>' . home_url('/zaak/' . $zaak->identificatie) . '</p>'; //TODO: make path configurable
		}

		return $output;
	}
}
