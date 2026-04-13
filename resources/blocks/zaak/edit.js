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
} from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies.
 */
import metadata from './block.json';
import './editor.css';

export default function Edit( { attributes, setAttributes } ) {
	const { zaakClient, zaakClients } = attributes;

	const suppliers = ( window?.owcMyServices?.zaakClientOptions ?? [] ).filter(
		( opt ) => opt.value !== ''
	);

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
								'Selecteer de zaaksystemen waarvan zaken op deze pagina getoond kunnen worden.',
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
								'owc-my-services'
							) }
						</p>
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
