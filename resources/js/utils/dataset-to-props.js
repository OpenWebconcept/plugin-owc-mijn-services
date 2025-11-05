/**
 * Convert DOM dataset attributes (data-foo-bar) to camelCase props.
 * Example: { appearance: "default", subTitle: "Hello" }
 */
export const datasetToProps = ( dataset ) => {
	const props = {};

	Object.entries( dataset ).forEach( ( [ key, value ] ) => {
		let parsed = value;
		try {
			parsed = JSON.parse( value );
		} catch {
			// leave as string
		}

		const propName = key.replace( /-([a-z])/g, ( _, c ) =>
			c.toUpperCase()
		);
		props[ propName ] = parsed;
	} );

	return props;
};
