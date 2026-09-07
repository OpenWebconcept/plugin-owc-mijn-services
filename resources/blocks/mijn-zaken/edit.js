/**
 * External dependencies.
 */
import { useEffect } from '@wordpress/element';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import {
	PanelBody,
	CheckboxControl,
	Notice,
	Placeholder,
	RangeControl,
	SelectControl,
	ToggleControl,
	__experimentalVStack as VStack,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies.
 */
import './editor.css';

const ORDER_BY_OPTIONS = [
	{ label: __( 'Standaard volgorde', 'owc-mijn-services' ), value: '' },
	{ label: __( 'Startdatum', 'owc-mijn-services' ), value: 'startdatum' },
	{ label: __( 'Einddatum', 'owc-mijn-services' ), value: 'einddatum' },
	{
		label: __( 'Publicatiedatum', 'owc-mijn-services' ),
		value: 'publicatiedatum',
	},
	{
		label: __( 'Archiefactiedatum', 'owc-mijn-services' ),
		value: 'archiefactiedatum',
	},
	{
		label: __( 'Registratiedatum', 'owc-mijn-services' ),
		value: 'registratiedatum',
	},
	{
		label: __( 'Zaaknummer', 'owc-mijn-services' ),
		value: 'identificatie',
	},
];

const MIN_PER_PAGE = 1;
const MAX_PER_PAGE = 25;

const Edit = ( { attributes, setAttributes } ) => {
	const {
		zaakClient,
		zaakClients,
		byBSN,
		byKVK,
		showTabs,
		perPage,
		orderBy,
		orderByDirection,
	} = attributes;

	const suppliers = ( window?.owcMyServices?.zaakClientOptions ?? [] ).filter(
		( opt ) => opt.value !== ''
	);

	const productionChecksEnabled =
		window?.owcMyServices?.productionChecksEnabled ?? true;
	const disableKVKFiltering =
		window?.owcMyServices?.disableKVKFiltering ?? false;
	const bsnKvkMissing =
		productionChecksEnabled &&
		! byBSN &&
		! ( byKVK && ! disableKVKFiltering );

	// Migrate legacy single zaakClient string to zaakClients array.
	useEffect( () => {
		if ( zaakClient && zaakClients.length === 0 ) {
			setAttributes( { zaakClients: [ zaakClient ], zaakClient: '' } );
		}
	}, [] );

	const toggleSupplier = ( supplier, checked ) =>
		setAttributes( {
			zaakClients: checked
				? [ ...zaakClients, supplier ]
				: zaakClients.filter( ( value ) => value !== supplier ),
		} );

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Zaaksystemen', 'owc-mijn-services' ) }
					initialOpen={ true }
				>
					<VStack >
						{ suppliers.length === 0 ? (
							<Notice status="warning" isDismissible={ false }>
								{ __(
									'Er zijn nog geen zaaksystemen geconfigureerd in de ZGW API-instellingen.',
									'owc-mijn-services'
								) }
							</Notice>
						) : (
							<>
								<p>
									{ __(
										'Uit welke zaaksystemen worden zaken opgehaald?',
										'owc-mijn-services'
									) }
								</p>
								<VStack spacing={ 2 }>
									{ suppliers.map( ( supplier ) => (
										<CheckboxControl
											key={ supplier.value }
											label={ supplier.label }
											checked={ zaakClients.includes(
												supplier.value
											) }
											onChange={ ( checked ) =>
												toggleSupplier(
													supplier.value,
													checked
												)
											}
										/>
									) ) }
								</VStack>
								{ zaakClients.length === 0 && (
									<Notice
										status="warning"
										isDismissible={ false }
									>
										{ __(
											'Selecteer minimaal één zaaksysteem. Zonder selectie worden er geen zaken getoond.',
											'owc-mijn-services'
										) }
									</Notice>
								) }
							</>
						) }
					</VStack>
				</PanelBody>
				<PanelBody
					title={ __( 'Zichtbare zaken', 'owc-mijn-services' ) }
					initialOpen={ true }
				>
					<VStack >
						<ToggleControl
							label={ __(
								'Persoonlijke zaken (DigiD)',
								'owc-mijn-services'
							) }
							help={ __(
								'Zaken gekoppeld aan het BSN van de ingelogde gebruiker.',
								'owc-mijn-services'
							) }
							checked={ byBSN }
							onChange={ ( value ) =>
								setAttributes( { byBSN: value } )
							}
						/>
						{ bsnKvkMissing && (
							<Notice status="warning" isDismissible={ false }>
								{ disableKVKFiltering
									? __(
											'Zet "Persoonlijke zaken" aan, anders worden er geen zaken getoond.',
											'owc-mijn-services'
									  )
									: __(
											'Zet minimaal één van beide opties aan, anders worden er geen zaken getoond.',
											'owc-mijn-services'
									  ) }
							</Notice>
						) }
						{ disableKVKFiltering ? (
							<Notice status="info" isDismissible={ false }>
								{ __(
									'Zakelijke zaken (eHerkenning) zijn uitgeschakeld in de plugin-instellingen.',
									'owc-mijn-services'
								) }
							</Notice>
						) : (
							<ToggleControl
								label={ __(
									'Zakelijke zaken (eHerkenning)',
									'owc-mijn-services'
								) }
								help={ __(
									'Zaken gekoppeld aan het KVK-nummer van de ingelogde gebruiker.',
									'owc-mijn-services'
								) }
								checked={ byKVK }
								onChange={ ( value ) =>
									setAttributes( { byKVK: value } )
								}
							/>
						) }

					</VStack>
				</PanelBody>
				<PanelBody
					title={ __( 'Weergave', 'owc-mijn-services' ) }
					initialOpen={ true }
				>
					<VStack >
						<ToggleControl
							label={ __(
								'Tabbladen tonen',
								'owc-mijn-services'
							) }
							checked={ showTabs }
							onChange={ ( value ) =>
								setAttributes( { showTabs: value } )
							}
						/>
						<RangeControl
							label={ __(
								'Aantal zaken',
								'owc-mijn-services'
							) }
							value={ perPage }
							min={ MIN_PER_PAGE }
							max={ MAX_PER_PAGE }
							onChange={ ( value ) =>
								setAttributes( { perPage: value } )
							}
						/>
						<SelectControl
							label={ __( 'Sorteren op', 'owc-mijn-services' ) }
							value={ orderBy }
							options={ ORDER_BY_OPTIONS }
							onChange={ ( value ) =>
								setAttributes( { orderBy: value } )
							}
						/>
						{ orderBy && (
							<SelectControl
								label={ __( 'Volgorde', 'owc-mijn-services' ) }
								value={ orderByDirection }
								options={ [
									{
										label: __(
											'Nieuwste eerst',
											'owc-mijn-services'
										),
										value: '-',
									},
									{
										label: __(
											'Oudste eerst',
											'owc-mijn-services'
										),
										value: '+',
									},
								] }
								onChange={ ( value ) =>
									setAttributes( {
										orderByDirection: value,
									} )
								}
							/>
						) }
					</VStack>
				</PanelBody>
			</InspectorControls>
			<div { ...useBlockProps() }>
				<Placeholder
					icon="list-view"
					label={ __(
						'Het persoonlijke zakenoverzicht',
						'owc-mijn-services'
					) }
					instructions={ __(
						'Toont een overzicht van de zaken voor de ingelogde gebruiker.',
						'owc-mijn-services'
					) }
				/>
			</div>
		</>
	);
};

export default Edit;
