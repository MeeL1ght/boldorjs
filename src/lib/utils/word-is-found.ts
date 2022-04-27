/**
 * Searching if the objective is within the word.
 * @param {string} word
 * @param {string} objective
 * @returns {boolean} `boolean`
 */
const wordIsFound = (word: string | any[], objective: any): boolean =>
	word.indexOf(objective) !== -1 ? true : false

export default wordIsFound
