import { createRoot } from '@wordpress/element';
import { Tabs } from './components/Tabs';
import { CaseCard } from './components/CaseCard';

document.addEventListener( 'DOMContentLoaded', () => {
	const mounts = document.querySelectorAll(
		'.js-nlds-denhaag-tab-component'
	);

	mounts.forEach( ( el ) => {
		const tabsData = JSON.parse( el.dataset.tabs );

		const tabData = tabsData.map( ( tab ) => ( {
			label: tab.label,
			panelContent: tab.cards ? (
				<div className="denhaag-card-group">
					{ tab.cards.map( ( card, index ) => (
						<CaseCard key={ index } { ...card } />
					) ) }
				</div>
			) : (
				<div dangerouslySetInnerHTML={ { __html: tab.html || '' } } />
			),
		} ) );

		const root = createRoot( el );
		root.render( <Tabs tabData={ tabData } /> );
	} );
} );
