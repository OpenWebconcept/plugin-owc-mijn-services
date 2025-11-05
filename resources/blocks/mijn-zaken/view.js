import { createRoot } from '@wordpress/element';
import { datasetToProps } from './../../js/utils/dataset-to-props';

import { CaseCard } from './components/CaseCard';

const components = {
	'.js-nlds-denhaag-case-card-component': CaseCard,
};

document.addEventListener( 'DOMContentLoaded', () => {
	Object.entries( components ).forEach( ( [ selector, Component ] ) => {
		const elements = document.querySelectorAll( selector );

		elements.forEach( ( el ) => {
			const props = datasetToProps( el.dataset );
			const root = createRoot( el );
			root.render( <Component { ...props } /> );
		} );
	} );
} );
