/**
 * Navigation spinner.
 *
 * Case card links navigate to a single-zaak page that is rendered from the ZGW
 * API, so the response can take seconds. During that wait the page is visually
 * unchanged and the click appears to have done nothing. This module shows a
 * single fixed spinner in the corner until the navigation commits.
 *
 * Only one spinner ever exists: clicking a second card restarts the timers on
 * the same element rather than stacking indicators.
 */

import { createRoot } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { CloseIcon, SpinnerIcon } from '@gemeente-denhaag/icons';

const SHOW_DELAY_MS = 400;
const TIMEOUT_MS = 30000;
const BASE_CLASS = 'owc-navigation-spinner';

let container = null;
let root = null;
let showTimer = null;
let timeoutTimer = null;
let listenersRegistered = false;

const SpinnerContent = () => (
	<>
		<SpinnerIcon className={ `${ BASE_CLASS }__icon` } />
		<span className={ `${ BASE_CLASS }__label` }>
			{ __( 'Bezig met laden…', 'owc-mijn-services' ) }
		</span>
	</>
);

const TimedOutContent = () => (
	<div className={ `${ BASE_CLASS }__message` }>
		<span>
			{ __(
				'Het laden duurt langer dan verwacht.',
				'owc-mijn-services'
			) }
		</span>
		<button
			type="button"
			className={ `${ BASE_CLASS }__dismiss` }
			onClick={ hideNavigationSpinner }
			aria-label={ __( 'Melding sluiten', 'owc-mijn-services' ) }
		>
			<CloseIcon className={ `${ BASE_CLASS }__dismiss-icon` } />
		</button>
	</div>
);

const clearTimers = () => {
	window.clearTimeout( showTimer );
	window.clearTimeout( timeoutTimer );
	showTimer = null;
	timeoutTimer = null;
};

/**
 * Hide the spinner and cancel anything still pending.
 */
export const hideNavigationSpinner = () => {
	clearTimers();

	if ( ! container ) {
		return;
	}

	container.hidden = true;
	root.render( null );
};

const registerLifecycleListeners = () => {
	if ( listenersRegistered ) {
		return;
	}

	listenersRegistered = true;

	// The navigation committed: this is the normal way the spinner ends.
	window.addEventListener( 'pagehide', hideNavigationSpinner );

	// Returning via the back button restores the page from the bfcache with
	// the spinner still frozen on screen, so clear it explicitly.
	window.addEventListener( 'pageshow', ( event ) => {
		if ( event.persisted ) {
			hideNavigationSpinner();
		}
	} );
};

/**
 * The live region is plain DOM so that it stays in the document across renders
 * and screen readers announce the content that React puts inside it.
 */
const ensureContainer = () => {
	if ( container ) {
		return;
	}

	container = document.createElement( 'div' );
	container.className = BASE_CLASS;
	container.setAttribute( 'role', 'status' );
	container.setAttribute( 'aria-live', 'polite' );
	container.hidden = true;

	document.body.appendChild( container );

	root = createRoot( container );

	registerLifecycleListeners();
};

/**
 * Show the spinner, or restart it when it is already visible.
 */
export const showNavigationSpinner = () => {
	ensureContainer();
	clearTimers();

	container.hidden = true;
	root.render( null );

	showTimer = window.setTimeout( () => {
		container.hidden = false;
		root.render( <SpinnerContent /> );
	}, SHOW_DELAY_MS );

	timeoutTimer = window.setTimeout( () => {
		container.hidden = false;
		root.render( <TimedOutContent /> );
	}, TIMEOUT_MS );
};

const startsNavigation = ( event ) => {
	if ( event.defaultPrevented || 0 !== event.button ) {
		return false;
	}

	if ( event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ) {
		return false;
	}

	const anchor = event.currentTarget;
	const target = anchor?.getAttribute( 'target' );

	if ( target && '_self' !== target ) {
		return false;
	}

	const href = anchor?.getAttribute( 'href' );

	return Boolean( href ) && ! href.startsWith( '#' );
};

export const handleNavigationClick = ( event ) => {
	if ( startsNavigation( event ) ) {
		showNavigationSpinner();
	}
};
