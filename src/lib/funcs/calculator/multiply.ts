import Decimal from '../../../../node_modules/decimal.js-light/decimal'
import isEqualValue from '../../utils/is-equal-value.js'
import isDecimal from '../../utils/is-decimal.js'

/**
 * Multiply prices.
 * @param {Array<number>} prices
 * @param {number} decimals
 * @returns {number} `number`
 */
function multiply(
	prices: Array<number> = [],
	decimals: number = 2
): number {
	const length = prices.length

	if (isEqualValue(length, 0)) return 0
	if (isEqualValue(length, 1)) return prices[0]

	let accumulated = 1
	const accumulatedTemp = new Decimal(accumulated)

	for (let index = 0; index < length; index++)
		accumulated *= accumulatedTemp.times(prices[index]).toNumber()

	const result = new Decimal(accumulated).toNumber()

	return !isDecimal(result) ? result : +result.toFixed(decimals)
}

export default multiply
