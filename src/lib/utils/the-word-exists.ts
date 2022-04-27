import isNotEqualValue from './is-not-equal-value.js'

/**
 * Determine if the word exists.
 * @param {string} customFormat
 * @param {string} word
 * @returns {boolean} `boolean`
 */
const theWordExists = (
	customFormat: string | any[],
	word: string
): boolean =>
	isNotEqualValue(customFormat.indexOf(word), -1) ? true : false

export default theWordExists
