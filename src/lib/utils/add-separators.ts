import Decimal from 'decimal.js-light'
import isEqualValue from './is-equal-value.js'
import theWordExists from './the-word-exists.js'

/**
 * Add separators to the currency.
 * @param {object}
 * @param {string} separator
 * @returns {string} `string`
 */
const addSeparators = (
	{ currency, decimals } : any,
	separator: any
) => {
	const fullString = currency.toString()
	const regex = /\B(?=(\d{3})+(?!\d))/g
	let renderCurrency = ''

	if (theWordExists(fullString, '.')) {
		let startString = fullString.substring(0, fullString.indexOf('.'))

		startString =
			isEqualValue(separator, 'none') || isEqualValue(separator, '')
				? startString
				: startString.replace(regex, separator)

		let endString = fullString.substring(
			fullString.indexOf('.'),
			fullString.length
		)

		endString = new Decimal(endString).toFixed(decimals)

		endString =
			isEqualValue(separator, '') ||
			isEqualValue(separator, ' ') ||
			isEqualValue(separator, 'none')
				? endString
				: endString.replace('.', separator)

		renderCurrency = `${startString}${endString}`
	} else {
		renderCurrency = fullString.replace(regex, separator)
	}

	return renderCurrency
}

export default addSeparators
