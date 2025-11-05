import { createRoot } from '@wordpress/element';
import { CaseCard } from '@gemeente-denhaag/card';

import '@gemeente-denhaag/card/index.css';
import '@gemeente-denhaag/card-group/index.css';
import '@nl-design-system-candidate/paragraph-css/paragraph.css';

document.addEventListener( 'DOMContentLoaded', () => {
	const elements = document.querySelectorAll(
		'.js-nlds-denhaag-case-card-component'
	);

	elements.forEach( ( el ) => {
		const appearance = el.dataset.appearance || 'default';
		const title = el.dataset.title || '';
		const subTitle = el.dataset.subtitle || '';
		const context = el.dataset.context || '';
		const href = el.dataset.href || '';

		const root = createRoot( el );

		root.render(
			<CaseCard
				title={ title }
				subTitle={ subTitle }
				context={ context }
				href={ href }
				appearance={ appearance }
			/>
		);
	} );
} );
