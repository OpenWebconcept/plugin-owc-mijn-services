import { createRoot } from '@wordpress/element';
import { Tabs } from './components/Tabs';
import { CaseCard } from './components/CaseCard';

const CardGroup = ( { cards } ) => (
	<div className="denhaag-card-group">
		{ cards.map( ( card, index ) => (
			<CaseCard key={ index } { ...card } />
		) ) }
	</div>
);

const EmptyMessage = ( { message } ) => (
	<p className="nl-paragraph owc-zaken-empty">{ message }</p>
);

const renderTabPanel = ( tab ) => {
	if ( tab.cards?.length ) {
		return <CardGroup cards={ tab.cards } />;
	}

	if ( tab.html ) {
		return <div dangerouslySetInnerHTML={ { __html: tab.html } } />;
	}

	return <EmptyMessage message={ tab.emptyMessage } />;
};

document.addEventListener( 'DOMContentLoaded', () => {
	const mounts = document.querySelectorAll(
		'.js-nlds-denhaag-tab-component'
	);

	mounts.forEach( ( el ) => {
		const tabsEnabled = JSON.parse( el.dataset.tabsEnabled ?? 'true' );
		const root = createRoot( el );

		if ( ! tabsEnabled ) {
			const cards = JSON.parse( el.dataset.cards ?? '[]' );

			root.render( <CardGroup cards={ cards } /> );

			return;
		}

		const tabData = JSON.parse( el.dataset.tabs ).map( ( tab ) => ( {
			label: tab.label,
			panelContent: renderTabPanel( tab ),
		} ) );

		root.render( <Tabs tabData={ tabData } /> );
	} );
} );
