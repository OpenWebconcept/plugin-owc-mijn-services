/**
 * Convert DOM dataset attributes (data-foo-bar) to camelCase props.
 * Example: { appearance: "default", subTitle: "Hello" }
 */
export const datasetToProps = ( dataset ) => {
	const props = {};

	for ( const [ key, value ] of Object.entries( dataset ) ) {
		// Convert kebab-case or snake_case to camelCase
		const camelKey = key.replace( /[-_]([a-z])/g, ( _, char ) =>
			char.toUpperCase()
		);
		props[ camelKey ] = value;
	}

	return props;
};
