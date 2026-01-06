/**
 * External dependencies.
 */
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import {
	PanelBody,
	Disabled,
	SelectControl,
} from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies.
 */
import metadata from './block.json';
import './editor.css';

export default function Edit({ attributes, setAttributes }) {
	const { zaakClient } = attributes;

	const clientOptions =
	window?.owcMyServices?.zaakClientOptions ?? [
		{ label: 'Selecteer een leverancier', value: '' },
	];

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={__('Instellingen', 'owc-my-services')}
					initialOpen={true}
				>
				<SelectControl
					label="Zaaksysteem"
					value={ zaakClient }
					options={ clientOptions }
					onChange={ ( newzaakClient ) =>
						setAttributes( {
							zaakClient: newzaakClient,
						} )
					}
				/>
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
