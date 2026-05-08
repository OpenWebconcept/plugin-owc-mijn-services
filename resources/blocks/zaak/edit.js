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
} from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies.
 */
import metadata from './block.json';
import './editor.css';

export default function Edit( { attributes, setAttributes } ) {
	const { zaakClient, zaakClients, byBSN, byKVK } = attributes;

	const suppliers = ( window?.owcMyServices?.zaakClientOptions ?? [] ).filter(
		( opt ) => opt.value !== ''
	);

	const productionChecksEnabled = window?.owcMyServices?.productionChecksEnabled ?? true;
	const bsnKvkMissing = productionChecksEnabled && ! byBSN && ! ( byKVK && ! disableKVKFiltering );
	const disableKVKFiltering = window?.owcMyServices?.disableKVKFiltering ?? false;

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
					title={ __( 'Instellingen', 'owc-mijn-services' ) }
					initialOpen={ true }
				>
					{ suppliers.length > 0 ? (
						<BaseControl
							id="owc-my-services-zaak-clients-checkbox-selection"
							label={ __( 'Zaaksystemen', 'owc-mijn-services' ) }
							help={ __(
								'Selecteer de zaaksystemen waarvan zaken op deze pagina getoond kunnen worden.',
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
													( v ) => v !== supplier.value
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
