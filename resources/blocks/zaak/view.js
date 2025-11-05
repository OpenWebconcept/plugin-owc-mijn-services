import { createRoot } from '@wordpress/element';
import { datasetToProps } from './../../js/utils/dataset-to-props';

import { DescriptionList } from './components/DescriptionList';
import { File } from './components/File';

const components = {
	'.js-nlds-denhaag-description-list-component': DescriptionList,
	'.js-nlds-denhaag-file-component': File,
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
