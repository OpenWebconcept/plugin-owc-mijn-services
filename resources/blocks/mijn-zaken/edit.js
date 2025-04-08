
/**
 * External dependencies.
 */
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	Disabled,
	RangeControl,
} from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';
import { __ } from '@wordpress/i18n';
import metadata from './block.json';
import './editor.css';

export default function Edit({ attributes, setAttributes }) {
	const { perPage } = attributes;

	const min = 1;
	const max = 25;

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={__('Instellingen', 'owc-my-services')}
					initialOpen={true}
				>
					<PanelRow>
						<RangeControl
							label={ __( 'Aantal zaken', 'yard-query-block' ) }
							value={ perPage }
							min={ min }
							max={ max }
							onChange={ ( value ) => setAttributes( { perPage: value } ) }
						/>
					</PanelRow>

				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				<Disabled>
					<ServerSideRender
						block={metadata.name}
						attributes={attributes}
					/>
				</Disabled>
			</div>
		</>
	);
}
