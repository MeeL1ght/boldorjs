/**
 * Returns the total properties obtained.
 * @param {object} _object
 * @returns {number} `number`
 */
const getTotalProps = (_object: {}): number =>
	Object.keys(_object).length

export default getTotalProps
