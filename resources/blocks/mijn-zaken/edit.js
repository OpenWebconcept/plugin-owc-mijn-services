/**
 * External dependencies.
 */
import { useEffect } from '@wordpress/element';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import {
	PanelBody,
	BaseControl,
	Button,
	CheckboxControl,
	Notice,
	Placeholder,
	RangeControl,
	SelectControl,
	ToggleControl,
	__experimentalVStack as VStack,
} from '@wordpress/components';
import { __, sprintf } from '@wordpress/i18n';

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
		zaaktypen,
		byBSN,
		byKVK,
		showTabs,
		showIdentification,
		onlyCurrentZaken,
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

	const zaaktypeOptionsBySupplier = window?.owcMyServices?.zaaktypeOptions ?? {};
	// Suppliers whose zaken are restricted by 'Startdatum per zaaktype' => { configured: whether
	// any of their zaaktypen is known to be configured there, allowedUrls: the URLs of every
	// version of those zaaktypen, or null when unknown because the zaaktypen cache is empty }.
	const zaaktypeRestrictions =
		window?.owcMyServices?.zaaktypeRestrictions ?? {};
	const restrictedSuppliers = zaakClients.filter(
		( supplier ) => supplier in zaaktypeRestrictions
	);
	const suppliersWithoutAllowedZaaktypen = restrictedSuppliers.filter(
		( supplier ) => ! zaaktypeRestrictions[ supplier ].configured
	);
	const suppliersWithUnknownZaaktypen = restrictedSuppliers.filter(
		( supplier ) =>
			zaaktypeRestrictions[ supplier ].configured &&
			! Array.isArray( zaaktypeRestrictions[ supplier ].allowedUrls )
	);
	const zaaktypeStartDatesActive = restrictedSuppliers.length > 0;
	// Selected zaaktypen that are no longer allowed: they can't be shown or unchecked below, and
	// since they keep the selection from being empty, they keep the block from falling back to
	// all allowed zaaktypen.
	const disallowedSelections = Object.fromEntries(
		restrictedSuppliers
			.filter( ( supplier ) =>
				Array.isArray( zaaktypeRestrictions[ supplier ].allowedUrls )
			)
			.map( ( supplier ) => [
				supplier,
				( zaaktypen[ supplier ] ?? [] ).filter(
					( url ) =>
						! zaaktypeRestrictions[ supplier ].allowedUrls.includes( url )
				),
			] )
			.filter( ( [ , urls ] ) => urls.length > 0 )
	);
	const suppliersWithDisallowedSelections = Object.keys( disallowedSelections );

	const removeDisallowedSelections = () => {
		const next = { ...zaaktypen };

		suppliersWithDisallowedSelections.forEach( ( supplier ) => {
			next[ supplier ] = ( zaaktypen[ supplier ] ?? [] ).filter(
				( url ) => ! disallowedSelections[ supplier ].includes( url )
			);
		} );

		setAttributes( { zaaktypen: next } );
	};

	const suppliersWithZaaktypeOptions = zaakClients.filter(
		( supplier ) => ( zaaktypeOptionsBySupplier[ supplier ] ?? [] ).length > 0
	);

	const toggleZaaktype = ( supplier, url, checked ) => {
		const current = zaaktypen[ supplier ] ?? [];
		const next = checked
			? [ ...current, url ]
			: current.filter( ( value ) => value !== url );

		setAttributes( {
			zaaktypen: { ...zaaktypen, [ supplier ]: next },
		} );
	};

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
				{ zaakClients.length > 0 && (
					<PanelBody
						title={ __( 'Zaaktypen', 'owc-mijn-services' ) }
						initialOpen={ false }
					>
						<VStack >
							{ zaaktypeStartDatesActive && (
								<Notice status="info" isDismissible={ false }>
									{ sprintf(
										/* translators: %s: comma separated list of zaaksystemen. */
										__(
											'Voor %s zijn zaaktypen ingesteld bij Instellingen → OWC Mijn Services → \'Startdatum per zaaktype\'. Van die zaaksystemen worden alleen zaken van die zaaktypen getoond, vanaf de daar ingestelde startdatum, en alleen die zaaktypen kunnen hier worden geselecteerd.',
											'owc-mijn-services'
										),
										restrictedSuppliers.join( ', ' )
									) }
								</Notice>
							) }
							{ suppliersWithDisallowedSelections.length > 0 && (
								<Notice status="warning" isDismissible={ false }>
									<p>
										{ sprintf(
											/* translators: %s: comma separated list of zaaksystemen. */
											__(
												'Voor %s zijn zaaktypen geselecteerd die niet (meer) zijn ingesteld bij \'Startdatum per zaaktype\'. Zaken van die zaaktypen worden niet getoond. Zolang deze selecties bestaan, worden ook niet automatisch alle ingestelde zaaktypen getoond als hieronder niets is geselecteerd.',
												'owc-mijn-services'
											),
											suppliersWithDisallowedSelections.join( ', ' )
										) }
									</p>
									<Button
										variant="secondary"
										onClick={ removeDisallowedSelections }
									>
										{ __(
											'Verwijder deze selecties',
											'owc-mijn-services'
										) }
									</Button>
								</Notice>
							) }
							{ suppliersWithUnknownZaaktypen.length > 0 && (
								<Notice status="warning" isDismissible={ false }>
									{ sprintf(
										/* translators: %s: comma separated list of zaaksystemen. */
										__(
											'De zaaktypen van %s konden niet worden geladen, daardoor kunnen hier geen zaaktypen worden geselecteerd. Haal de zaaktypen opnieuw op bij Instellingen → OWC Mijn Services.',
											'owc-mijn-services'
										),
										suppliersWithUnknownZaaktypen.join( ', ' )
									) }
								</Notice>
							) }
							{ suppliersWithoutAllowedZaaktypen.length > 0 && (
								<Notice status="warning" isDismissible={ false }>
									{ sprintf(
										/* translators: %s: comma separated list of zaaksystemen. */
										__(
											'Voor %s kon niet worden bepaald welke zaaktypen bij \'Startdatum per zaaktype\' zijn ingesteld, daardoor worden van dit zaaksysteem geen zaken getoond. Controleer de instellingen bij Instellingen → OWC Mijn Services.',
											'owc-mijn-services'
										),
										suppliersWithoutAllowedZaaktypen.join( ', ' )
									) }
								</Notice>
							) }
							{ suppliersWithZaaktypeOptions.length === 0 ? (
								restrictedSuppliers.length === 0 && (
									<Notice status="info" isDismissible={ false }>
										{ __(
											'Zaaktypefiltering is uitgeschakeld voor de geselecteerde zaaksystemen. Schakel dit in bij Instellingen → OWC Mijn Services → \'Zaaktypefiltering ondersteunde leveranciers\' om hier zaaktypen te kunnen selecteren.',
											'owc-mijn-services'
										) }
									</Notice>
								)
							) : (
								<BaseControl
									id="owc-my-services-zaaktypen-selection"
									label={ __( 'Zaaktypen', 'owc-mijn-services' ) }
									help={
										zaaktypeStartDatesActive
											? __(
													'Selecteer per zaaksysteem de zaaktypen waarop gefilterd moet worden. Selecteer geen zaaktypen om alle zaaktypen te tonen; voor zaaksystemen met zaaktypen bij \'Startdatum per zaaktype\' zijn dat alle daar ingestelde zaaktypen.',
													'owc-mijn-services'
											  )
											: __(
													'Selecteer per zaaksysteem de zaaktypen waarop gefilterd moet worden. Selecteer geen zaaktypen om alle zaaktypen te tonen.',
													'owc-mijn-services'
											  )
									}
								>
									{ suppliersWithZaaktypeOptions.map( ( supplier ) => {
										const options =
											zaaktypeOptionsBySupplier[ supplier ] ?? [];

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
						</VStack>
					</PanelBody>
				) }
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
						<ToggleControl
							label={ __(
								'Zaaknummer tonen',
								'owc-mijn-services'
							) }
							help={ __(
								'Toon het zaaknummer (identificatie) onder de titel van de kaart.',
								'owc-mijn-services'
							) }
							checked={ showIdentification }
							onChange={ ( value ) =>
								setAttributes( { showIdentification: value } )
							}
						/>
						{ ! showTabs && (
							<ToggleControl
								label={ __(
									'Alleen lopende zaken tonen',
									'owc-mijn-services'
								) }
								help={ __(
									'Toon alleen zaken die nog niet zijn afgerond.',
									'owc-mijn-services'
								) }
								checked={ onlyCurrentZaken }
								onChange={ ( value ) =>
									setAttributes( { onlyCurrentZaken: value } )
								}
							/>
						) }
						<RangeControl
							label={ __(
								'Aantal zaken',
								'owc-mijn-services'
							) }
							help={
								! showTabs && onlyCurrentZaken
									? __(
											'Het maximaal aantal lopende zaken dat getoond wordt, volgens de gekozen sortering.',
											'owc-mijn-services'
									  )
									: undefined
							}
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
