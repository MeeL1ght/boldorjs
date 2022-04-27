/**
 * Compare two values and determine if they are strictly different.
 * @param {any} firstValue
 * @param {any} secondValue
 * @returns {boolean} `boolean`
 */
const isNotEqualValue = (firstValue: any, secondValue: any): boolean =>
	firstValue !== secondValue ? true : false

export default isNotEqualValue
