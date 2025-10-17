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
                        // Best kept in sync with:
                        // https://github.com/OpenWebconcept/owc-zgw-api/blob/main/src/WordPress/SettingsProvider.php#L50
                        {
                            label: 'Decos JOIN',
                            value: 'decosjoin',
                        },
                        {
                            label: 'OpenZaak',
                            value: 'openzaak'
                        },
                        {
                            label: 'Rx.Mission',
                            value: 'rxmission',
                        },
                        {
                            label: 'XXLLNC',
                            value: 'xxllnc'
                        },
                        {
                            label: __('Shift2 (voorheen Procura)', 'owc-my-services'),
                            value: 'procura'
                        },
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
