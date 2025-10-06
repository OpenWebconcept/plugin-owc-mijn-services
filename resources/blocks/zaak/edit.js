
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
import metadata from './block.json';
import './editor.css';

export default function Edit({ attributes, setAttributes }) {
	const { zaakClient } = attributes;

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
					options={ [
							{
								label: 'Decos JOIN',
								value: 'decos-join',
							},
							{ label: 'Mozart (x)', value: 'mozart' },
							{ label: 'OpenWave (x)', value: 'openwave' },
							{ label: 'OpenZaak', value: 'openzaak' },
							{
								label: 'Rx.Mission',
								value: 'rx-mission',
							},
							{ label: 'XXLLNC', value: 'xxllnc' },
							{ label: 'Shift2', value: 'procura' },
						] }
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
