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
		zaaktypen,
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

	const zaaktypeOptionsBySupplier = window?.owcMyServices?.zaaktypeOptions ?? {};

	const toggleZaaktype = ( supplier, url, checked ) => {
		const current = zaaktypen[ supplier ] ?? [];
		const next = checked
			? [ ...current, url ]
			: current.filter( ( value ) => value !== url );

		setAttributes( {
			zaaktypen: { ...zaaktypen, [ supplier ]: next },
		} );
	};

	const productionChecksEnabled = window?.owcMyServices?.productionChecksEnabled ?? true;
	const bsnKvkMissing = productionChecksEnabled && ! byBSN && ! ( byKVK && ! disableKVKFiltering );
	const disableKVKFiltering = window?.owcMyServices?.disableKVKFiltering ?? false;

	// Migrate legacy single zaakClient string to zaakClients array.
	useEffect( () => {
		if ( zaakClient && zaakClients.length === 0 ) {
			setAttributes( { zaakClients: [ zaakClient ], zaakClient: '' } );
		}
	}, [] );

	// Replace zaaktype selections pointing at a superseded zaaktype version with its current URL.
	useEffect( () => {
		const migrationsBySupplier =
			window?.owcMyServices?.zaaktypeUrlMigrations ?? {};

		if ( Object.keys( migrationsBySupplier ).length === 0 ) {
			return;
		}

		let changed = false;
		const next = {};

		Object.keys( zaaktypen ).forEach( ( supplier ) => {
			const migrations = migrationsBySupplier[ supplier ] ?? {};
			const urls = zaaktypen[ supplier ] ?? [];

			const migratedUrls = urls.map( ( url ) => {
				if ( migrations[ url ] ) {
					changed = true;

					return migrations[ url ];
				}

				return url;
			} );

			next[ supplier ] = [ ...new Set( migratedUrls ) ];
		} );

		if ( changed ) {
			setAttributes( { zaaktypen: next } );
		}
	}, [] );

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Instellingen', 'owc-mijn-services' ) }
					initialOpen={ true }
				>
					{ suppliers.length > 0 ? (
						<BaseControl
							id="owc-my-services-zaak-clients-checkbox-selection"
							label={ __( 'Zaaksystemen', 'owc-mijn-services' ) }
							help={ __(
								'Selecteer de zaaksystemen waaruit de zaken opgehaald moeten worden.',
								'owc-mijn-services'
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
								'owc-mijn-services'
							) }
						</p>
					) }
					{ zaakClients.length > 0 && (
						<BaseControl
							id="owc-my-services-zaaktypen-selection"
							label={ __( 'Zaaktypen', 'owc-mijn-services' ) }
							help={ __(
								'Selecteer per zaaksysteem de zaaktypen waarop gefilterd moet worden. Selecteer geen zaaktypen om alle zaaktypen te tonen.',
								'owc-mijn-services'
							) }
						>
							{ zaakClients.map( ( supplier ) => {
								const options =
									zaaktypeOptionsBySupplier[ supplier ] ?? [];

								if ( options.length === 0 ) {
									return null;
								}

								return (
									<PanelBody
										key={ supplier }
										title={ supplier }
										initialOpen={ false }
										className="owc-my-services-zaaktypen-supplier-panel"
									>
										{ options.map( ( option ) => (
											<CheckboxControl
												key={ option.value }
												label={ option.label }
												checked={ (
													zaaktypen[ supplier ] ?? []
												).includes( option.value ) }
												onChange={ ( checked ) =>
													toggleZaaktype(
														supplier,
														option.value,
														checked
													)
												}
											/>
										) ) }
									</PanelBody>
								);
							} ) }
						</BaseControl>
					) }
					{ bsnKvkMissing && (
						<Notice status="warning" isDismissible={ false }>
							{ disableKVKFiltering
								? __( 'Schakel de filteroptie Filter op BSN in.', 'owc-mijn-services' )
								: __( 'Selecteer minimaal één filteroptie: Filter op BSN of Filter op KVK.', 'owc-mijn-services' )
							}
						</Notice>
					) }
					<CheckboxControl
						label="Filter op BSN"
						help="Filter zaken die aangemaakt zijn door de ingelogde gebruiker op basis van het BSN nummer."
						checked={ byBSN }
						onChange={ ( byBSN ) =>
							setAttributes( {
								byBSN,
							} )
						}
					/>
					{ ! disableKVKFiltering && (
						<CheckboxControl
							label="Filter op KVK"
							help="Filter zaken die aangemaakt zijn door de ingelogde gebruiker op basis van het KVK nummer."
							checked={ byKVK }
							onChange={ ( byKVK ) =>
								setAttributes( {
									byKVK,
								} )
							}
						/>
					) }
					{ disableKVKFiltering && (
						<Notice status="warning" isDismissible={ false }>
							{ __(
								'Filteren op KVK is uitgeschakeld in de instellingen van de plugin.',
								'owc-mijn-services'
							) }
						</Notice>
					) }
					<RangeControl
						label={ __( 'Aantal zaken', 'owc-mijn-services' ) }
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
