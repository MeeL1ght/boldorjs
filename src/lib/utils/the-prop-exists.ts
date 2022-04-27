/**
 * Check if the property exists.
 * @param {object} _object
 * @param {string} propName
 * @returns {boolean} `boolean`
 */
const thePropExists = (
	_object: object,
	propName: PropertyKey
): boolean => (Object.hasOwn(_object, propName) ? true : false)

export default thePropExists
