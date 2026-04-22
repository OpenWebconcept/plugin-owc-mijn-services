/**
 * External dependencies.
 */
import { useEffect } from '@wordpress/element';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import {
	PanelBody,
	Disabled,
	BaseControl,
	CheckboxControl,
	Notice,
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
	const {
		zaakClient,
		zaakClients,
		byBSN,
		byKVK,
		perPage,
		orderBy,
		orderByDirection,
	} = attributes;

	const min = 1;
	const max = 25;

	const suppliers = ( window?.owcMyServices?.zaakClientOptions ?? [] ).filter(
		( opt ) => opt.value !== ''
	);

	const productionChecksEnabled = window?.owcMyServices?.productionChecksEnabled ?? true;
	const bsnKvkMissing = productionChecksEnabled && ! byBSN && ! byKVK;

	// Migrate legacy single zaakClient string to zaakClients array.
	useEffect( () => {
		if ( zaakClient && zaakClients.length === 0 ) {
			setAttributes( { zaakClients: [ zaakClient ], zaakClient: '' } );
		}
	}, [] );

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Instellingen', 'owc-my-services' ) }
					initialOpen={ true }
				>
					{ suppliers.length > 0 ? (
						<BaseControl
							id="owc-my-services-zaak-clients-checkbox-selection"
							label={ __( 'Zaaksystemen', 'owc-my-services' ) }
							help={ __(
								'Selecteer de zaaksystemen waaruit de zaken opgehaald moeten worden.',
								'owc-my-services'
							) }
						>
							{ suppliers.map( ( supplier ) => (
								<CheckboxControl
									key={ supplier.value }
									label={ supplier.label }
									checked={ zaakClients.includes(
										supplier.value
									) }
									onChange={ ( checked ) => {
										const next = checked
											? [ ...zaakClients, supplier.value ]
											: zaakClients.filter(
													( v ) =>
														v !== supplier.value
											  );
										setAttributes( { zaakClients: next } );
									} }
								/>
							) ) }
						</BaseControl>
					) : (
						<p>
							{ __(
								'Geen leveranciers geconfigureerd.',
								'owc-my-services'
							) }
						</p>
					) }
					{ bsnKvkMissing && (
						<Notice status="warning" isDismissible={ false }>
							{ __(
								'Selecteer minimaal één filteroptie: Filter op BSN of Filter op KVK.',
								'owc-my-services'
							) }
						</Notice>
					) }
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
								label: 'Selecteer een optie',
								value: '',
							},
							{
								label: 'Startdatum',
								value: 'startdatum',
							},
							{ 	label: 'Einddatum',
								value: 'einddatum',
							},
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
					{ orderBy && '' !== orderBy && (
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
					) }
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
