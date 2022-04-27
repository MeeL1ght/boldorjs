import Decimal from '../../../../node_modules/decimal.js-light/decimal'
import isEqualValue from '../../utils/is-equal-value'
import isDecimal from '../../utils/is-decimal'

/**
 * Add prices.
 * @param {Array<number>} prices
 * @param {number} decimals
 * @return {number} `number`
 */
function add(
	prices: Array<number> = [],
	decimals: number = 2
): number {
	const length = prices.length

	if (isEqualValue(length, 0)) return 0
	if (isEqualValue(length, 1)) return prices[0]

	let accumulated = 0
	const accumulatedTemp = new Decimal(accumulated)

	for (let index = 0; index < length; index++)
		accumulated += accumulatedTemp.plus(prices[index]).toNumber()

	const result = new Decimal(accumulated).toNumber()

	return !isDecimal(result) ? result : +result.toFixed(decimals)
}

export default add
