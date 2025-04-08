<?php

declare(strict_types=1);

namespace OWC\My_Services\Providers;

use OWC\My_Services\Blocks\MijnZaken;
use OWC\My_Services\Blocks\Zaak;

class BlockServiceProvider extends ServiceProvider
{
	public const BLOCK_CATEGORY = 'owc-mijn-services';
	public const QUERY_VAR_ZAAKTYPE = 'owc-zaaktype';
	public const QUERY_VAR_ZAAKNUMMER = 'owc-zaaknummer';

	public function register(): void
	{
		add_action('init', [$this, 'register_blocks']);
		add_filter('query_vars', [$this, 'add_query_vars']);
		add_filter('block_categories_all', [$this, 'register_block_category'], 10, 2);
		add_action('init', [$this, 'register_rewrite_rules']);
	}

	public function add_query_vars(array $vars): array
	{
		$vars[] = static::QUERY_VAR_ZAAKNUMMER;
		$vars[] = static::QUERY_VAR_ZAAKTYPE;

		return $vars;
	}

	public function register_rewrite_rules(): void
	{
		//TODO: make configurable
		add_rewrite_rule(
			'^zaak/([^/]+)/?$',
			'index.php?pagename=zaak&' . self::QUERY_VAR_ZAAKNUMMER . '=$matches[1]',
			'top'
		);
	}

	public function register_block_category(array $blockCategories, \WP_Block_Editor_Context $blockEditorContext): array
	{
		$blockCategories[] = [
			'slug' => self::BLOCK_CATEGORY,
			'title' => 'OWC Mijn Services',
		];

		return $blockCategories;
	}

	public function register_blocks(): void
	{
		register_block_type(OWC_MY_SERVICES_DIR_PATH . 'build/mijn-zaken', [
			'render_callback' => [new MijnZaken(), 'render'],
			'category' => self::BLOCK_CATEGORY,
			'attributes' => [
				'perPage' => [
					'type' => 'number',
					'default' => 10,
				],
			],
		]);

		register_block_type(OWC_MY_SERVICES_DIR_PATH . 'build/zaak', [
			'render_callback' => [new Zaak(), 'render'],
			'category' => self::BLOCK_CATEGORY,
			'attributes' => [
				'zaakClient' => [
					'type' => 'string',
					'default' => 'openzaak',
				],
			],
		]);
	}
}
