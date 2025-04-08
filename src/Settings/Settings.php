<?php

declare(strict_types=1);
/**
 * Settings.
 *
 * @package OWC_GravityForms_ZGW
 *
 * @author  Yard | Digital Agency
 *
 * @since   1.0.0
 */

namespace OWC\My_Services\Settings;

/**
 * Exit when accessed directly.
 */
if (! defined('ABSPATH')) {
	exit;
}

/**
 * Settings.
 *
 * @since 1.0.0
 */
class Settings
{
	protected string $option_name = 'zgw_api_settings';
	protected array $options = [];

	final private function __construct()
	{
		$this->options = get_option($this->option_name, []);
	}

	/**
	 * @since 1.0.0
	 */
	public static function make(): self
	{
		return new static();
	}

	/**
	 * @since 1.0.0
	 */
	public function get(string $key): mixed
	{
		return $this->options[ $key ] ?? '';
	}
}
