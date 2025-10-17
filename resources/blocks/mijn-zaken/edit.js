/**
 * External dependencies.
 */
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import {
	PanelBody,
	Disabled,
	RangeControl,
	SelectControl,
} from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies.
 */
import metadata from './block.json';
import './editor.css';

export default function Edit( { attributes, setAttributes } ) {
	const { zaakClient, perPage } = attributes;

	const min = 1;
	const max = 25;

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Instellingen', 'owc-my-services' ) }
					initialOpen={ true }
				>
					<p>
                        {
                            __(
                                'Selecteer het zaaksysteem waaruit de zaken opgehaald moeten worden.',
                                'owc-my-services'
                            )
                        }
					</p>
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
					<RangeControl
						label={ __( 'Aantal zaken', 'owc-my-services' ) }
						value={ perPage }
						min={ min }
						max={ max }
						onChange={ ( value ) =>
							setAttributes( { perPage: value } )
						}
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...useBlockProps() }>
				<Disabled>
					<ServerSideRender
						block={ metadata.name }
						attributes={ attributes }
					/>
				</Disabled>
			</div>
		</>
	);
}
