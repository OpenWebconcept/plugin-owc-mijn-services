import React from 'react';
import { CaseCard as DHCaseCard } from '@gemeente-denhaag/card';
import '@gemeente-denhaag/card/index.css';

import { handleNavigationClick } from './../../../js/navigation-spinner';

/**
 * CaseCard renders a single anchor and exposes it through its `Link` prop.
 * Swapping in our own anchor lets us flag the slow navigation it starts.
 *
 * @param {Object}     props           Anchor attributes supplied by CaseCard.
 * @param {React.Node} props.children  Anchor contents, normally the arrow icon.
 * @param {Function}   [props.onClick] Click handler to run before ours.
 */
const NavigationLink = ( { children, onClick, ...props } ) => (
	// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions -- `href` arrives via the spread, so eslint cannot see this is a native link.
	<a
		{ ...props }
		onClick={ ( event ) => {
			onClick?.( event );
			handleNavigationClick( event );
		} }
	>
		{ children }
	</a>
);

export const CaseCard = ( props ) => (
	<DHCaseCard { ...props } Link={ NavigationLink } />
);
