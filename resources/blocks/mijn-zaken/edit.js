/**
 * External dependencies.
 */
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import {
	PanelBody,
	Disabled,
	CheckboxControl,
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
	const { zaakClient, byBSN, byKVK, perPage, orderBy, orderByDirection } = attributes;

	const min = 1;
	const max = 25;

	const clientOptions =
	window?.owcMyServices?.zaakClientOptions ?? [
		{ label: 'Selecteer een leverancier', value: '' },
	];

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
						options={ clientOptions }
						onChange={ ( newzaakClient ) =>
							setAttributes( {
								zaakClient: newzaakClient,
							} )
						}
					/>
					<CheckboxControl
						label="Filter op BSN"
						help="Filter zaken die aangemaakt zijn door de ingelogde gebruiker op basis van het BSN nummer."
						checked={ byBSN }
						onChange={ ( byBSN ) =>
							setAttributes( {
								byBSN,
								byKVK: byBSN ? false : attributes.byKVK,
							} )
						}
					/>
					<CheckboxControl
						label="Filter op KVK"
						help="Filter zaken die aangemaakt zijn door de ingelogde gebruiker op basis van het KVK nummer."
						checked={ byKVK }
						onChange={ ( byKVK ) =>
							setAttributes( {
								byKVK,
								byBSN: byKVK ? false : attributes.byBSN,
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
					<SelectControl
						label="Sorteer op"
						value={ orderBy }
						options={ [
							{
								label: 'Startdatum',
								value: 'startdatum',
							},
							{ label: 'Einddatum', value: 'einddatum' },
							{
								label: 'Publicatiedatum',
								value: 'publicatiedatum',
							},
							{
								label: 'Archiefactiedatum',
								value: 'archiefactiedatum',
							},
							{
								label: 'Registratiedatum',
								value: 'registratiedatum',
							},
							{
								label: 'Identificatie',
								value: 'identificatie',
							},
						] }
						onChange={ ( neworderBy ) =>
							setAttributes( {
								orderBy: neworderBy,
							} )
						}
					/>
					<SelectControl
						label="Sorteer volgorde"
						value={ orderByDirection }
						options={ [
							{ label: 'Oplopend', value: '+' },
							{ label: 'Aflopend', value: '-' },
						] }
						onChange={ ( neworderByDirection ) =>
							setAttributes( {
								orderByDirection: neworderByDirection,
							} )
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
