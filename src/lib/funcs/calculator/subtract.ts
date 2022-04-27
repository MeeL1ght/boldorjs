import Decimal from '../../../../node_modules/decimal.js-light/decimal'
import isEqualValue from '../../utils/is-equal-value.js'
import isDecimal from '../../utils/is-decimal.js'

/**
 * Subtract prices.
 * @param {Array<number>} prices
 * @param {number} decimals
 * @returns {number} `number`
 */
function subtract(
	prices: Array<number> = [],
	decimals: number = 2
): number {
	const length = prices.length

	if (isEqualValue(length, 0)) return 0
	if (isEqualValue(length, 1)) return prices[0]

	let accumulated = prices[0]

	for (let index = 1; index < length; index++)
		accumulated -= prices[index]

	const result = new Decimal(accumulated).toNumber()
	return !isDecimal(result) ? result : +result.toFixed(decimals)
}

export default subtract
