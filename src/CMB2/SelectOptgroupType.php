<?php

declare(strict_types=1);

/**
 * CMB2 select field type that renders grouped options as <optgroup> elements.
 *
 * @package OWC_Mijn_Services
 * @author  Yard | Digital Agency
 * @since   NEXT
 */

namespace OWC\My_Services\CMB2;

/**
 * Exit when accessed directly.
 */
if ( ! defined( 'ABSPATH' )) {
	exit;
}

use CMB2_Type_Select;

/**
 * CMB2 select field type that renders grouped options as <optgroup> elements.
 *
 * Field options are expected as a `value => label` map, where any entry whose value is itself
 * an array is rendered as an <optgroup> (keyed by group label) containing its own `value => label` options.
 * Flat and grouped entries may be mixed.
 *
 * @since NEXT
 */
class SelectOptgroupType extends CMB2_Type_Select
{
	public function render()
	{
		$attrs = $this->parse_args(
			'select',
			array(
				'class'   => 'cmb2_select',
				'name'    => $this->_name(),
				'id'      => $this->_id(),
				'desc'    => $this->_desc( true ),
				'options' => $this->concat_grouped_items(),
			)
		);

		$merged_attrs = $this->concat_attrs( $attrs, array( 'desc', 'options' ) );

		return $this->rendered(
			sprintf( '<select%s>%s</select>%s', $merged_attrs, $attrs['options'], $attrs['desc'] )
		);
	}

	private function concat_grouped_items(): string
	{
		$field = $this->field;

		$value = trim( (string) ( null !== $field->escaped_value() ? $field->escaped_value() : $field->get_default() ) );

		$options = array();

		if ($option_none = $field->args( 'show_option_none' )) {
			$options[''] = $option_none;
		}

		$options = $options + (array) $field->options();

		return $this->handle_options( $options, $value );
	}

	/**
	 * Handle options and return the HTML string for the <option> and <optgroup> elements.
	 */
	private function handle_options( array $options, string $value ): string
	{
		$html     = '';
		$iterator = 1;

		foreach ($options as $key => $option) {
			if ( ! is_array( $option )) {
				$html .= $this->render_option( $key, $option, $value, $iterator++ );

				continue;
			}

			$html .= sprintf( '<optgroup label="%s">', esc_attr( $key ) );

			foreach ($option as $opt_value => $opt_label) {
				$html .= $this->render_option( $opt_value, $opt_label, $value, $iterator++ );
			}

			$html .= '</optgroup>';
		}

		return $html;
	}

	private function render_option( string $opt_value, string $opt_label, string $selected_value, int $iterator ): string
	{
		$args = array(
			'value' => $opt_value,
			'label' => $opt_label,
		);

		if ($selected_value === $opt_value) {
			$args['checked'] = 'checked';
		}

		return $this->select_option( $args, $iterator );
	}
}
