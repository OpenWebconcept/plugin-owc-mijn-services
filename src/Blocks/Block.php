<?php

declare(strict_types=1);

namespace OWC\My_Services\Blocks;

use OWC\My_Services\ContainerResolver;
use OWC\My_Services\Traits\Supplier;
use OWC\ZGW\Contracts\Client;

use OWC\ZGW\Endpoints\Filter\ZaakinformatieobjectenFilter;
use OWC\ZGW\Endpoints\Filter\ZakenFilter;
use OWC\ZGW\Entities\Zaak;
use OWC\ZGW\Support\Collection;
use function OWC\ZGW\apiClientManager;

abstract class Block
{
	use Supplier;

	private Client $client;

	protected ZakenFilter $zaken_filter;

	protected string $bsn;

	final public function render(array $attributes, string $block_content, \WP_Block $block): string
	{
		try {
			$this->bsn = ContainerResolver::make()->get('digid.current_user_bsn');
		} catch (\TypeError $e) {
			//return '<p>' . __('Je moet ingelogd zijn om deze informatie te kunnen zien.', 'owc-mijn-services') . '</p>';
		}

		//DELETE ME LATER
		$this->bsn = '900198424';

		$this->zaken_filter = new ZakenFilter();
		$this->zaken_filter->byBsn($this->bsn);

		$client_name = $this->supplierKeyToName($attributes['zaakClient'] ?? 'openzaak');

		try {
			$this->client = apiClientManager()->getClient($client_name);
		} catch (\DI\NotFoundException $e) {
			return '<p>' . sprintf(__('De %s client is niet geconfigureerd.', 'owc-mijn-services'), $client_name) . '</p>';
		}

		if (! $this->client->supports('zaken')) {
			return '<p>' . __('Deze client ondersteunt geen zaken.', 'owc-mijn-services') . '</p>';
		}

		return $this->renderBlock($attributes, $block_content, $block);
	}

	abstract protected function renderBlock(array $attributes, string $block_content, \WP_Block $block): string;

	final protected function getZaken(): Collection
	{
		return $this->client->zaken()->filter($this->zaken_filter);
	}

	final protected function getZaakInformatieObjecten(Zaak $zaak): Collection
	{
		$filter = new ZaakinformatieobjectenFilter();
		$filter->byZaak($zaak);

		return $this->client->zaakinformatieobjecten()->filter($filter);
	}
}
