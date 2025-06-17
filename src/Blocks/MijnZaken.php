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

		$output .= '<div class="wp-block-owc-my-services-mijn-zaken-wrapper">';
		/** @var Zaak */
		foreach ($zaken->take(100) as $zaak) {
			$date = $zaak->registratiedatum?->format('Y-m-d');
			$link = home_url('/zaak/' . $zaak->identificatie); //TODO: make path configurable
			$title = $zaak->zaaktype?->omschrijvingGeneriek;

			$output .= '<denhaag-case-card datetime="' . esc_attr($date) . '" href="' . esc_url($link) . '" linkLabel="' . esc_attr($title) . '">';
			$output .= '<span slot="heading">' . esc_html($title) . '</span>';
			$output .= '<span slot="subtitle">' . esc_html($zaak->identificatie) . '</span>';
			$output .= '</denhaag-case-card>';
		}

		$output .= '</div>';

		return $output;
	}
}
