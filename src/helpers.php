<?php

declare(strict_types=1);

namespace OWC\My_Services;

/**
 * Plugin helpers.
 *
 * @author  Yard | Digital Agency
 *
 * @since   1.0.0
 */

/**
 * Exit when accessed directly.
 */
if (! defined('ABSPATH')) {
	exit;
}

/**
 * Add prefix for the given string.
 *
 * @since   1.0.0
 */
function prefix(string $name): string
{
	return 'owc-gravityforms-zgw-' . $name;
}

/**
 * Generates a full plugin URL by appending the given path to the base plugin URL.
 *
 * @author  Yard | Digital Agency
 *
 * @since   1.0.0
 */
function url(string $path): string
{
	return OWC_MY_SERVICES_PLUGIN_URL . $path;
}

/**
 * Generates a full asset URL by appending the given path to the plugin's asset directory.
 *
 * @author  Yard | Digital Agency
 *
 * @since   1.0.0
 */
function asset_url(string $path): string
{
	return url('dist/' . $path);
}

/**
 * Render a view file.
 *
 * @since   1.0.0
 */
function render_view(string $file_path, $data = [])
{
	$full_path = OWC_MY_SERVICES_DIR_PATH . 'src/Views/' . $file_path . '.php';

	if (! file_exists($full_path)) {
		return '';
	}

	// Manually extract variables from the $data array
	foreach ($data as $key => $value) {
		${$key} = $value;
	}

	return require $full_path;
}
