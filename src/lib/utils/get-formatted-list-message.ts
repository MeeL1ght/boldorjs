/**
 * Get message from a list of formatted items.
 * @param {string[]} list
 * @returns {string} `string`
 */
const getFormattedListMessage = (list: any[]): string =>
	`\n\nAllowed values: [\n  ${list
		.slice(0, -1)
		.map((value: any) => `"${value}"`)
		.join(', ')
		.concat(` or "${list.slice(-1)}"\n]\n`)}`

export default getFormattedListMessage
