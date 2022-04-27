import Decimal from '../../../../node_modules/decimal.js-light/decimal'
import isEqualValue from '../../utils/is-equal-value.js'
import isDecimal from '../../utils/is-decimal.js'
import errorHandler from '../../handler/error.js'

/**
 * Divide prices.
 * @param {Array<number>} prices
 * @param {number} decimals
 * @returns {number} `number`
 */
function divideBy(
	prices: Array<number> = [],
	decimals: number = 2
): number {
	const length = prices.length

	if (isEqualValue(length, 0)) return 0
	if (isEqualValue(length, 1)) return prices[0]

	const thereIsAZero = prices.some(
		(price, pos) => pos > 0 && price === 0
	)

	if (thereIsAZero)
		throw new Error(errorHandler.messageCannotBeDividedByZero())

	try {
		let accumulated = prices[0]

		for (let index = 1; index < length; index++)
			accumulated /= prices[index]

		const result = new Decimal(accumulated).toNumber()
		return !isDecimal(result) ? result : +result.toFixed(decimals)
	} catch (error) {
		console.error(error)
	}
}

export default divideBy
