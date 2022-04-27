/**
 * Check if the data is in the list.
 * @param {string} data
 * @param {string[]} list
 * @returns {boolean} `boolean`
 */
const dataIsOnTheList = (data: any, list: string|any[]): boolean =>
	list.includes(data) ? true : false

export default dataIsOnTheList
