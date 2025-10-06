@php
	/**
	 * Exit when accessed directly.
	 *
	 * @package owc-mijn-services
	 */
	if (!defined('ABSPATH')) {
	    exit();
	}
@endphp

<div>
	<div class="owc-block-editor-placeholder__content">
		<h2>{{ $title }}</h2>
		<p>{{ $description }}</p>
	</div>
</div>
