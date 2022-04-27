import Decimal from '../../../../node_modules/decimal.js-light/decimal'

/**
 * Convert an amount of bolivars to dollars.
 * @param {object} dollarPriceInBolivars
 * @param {number} decimals
 * @returns {number} `number`
 * @example
 * console.log(
 *   new Boldor()
 *     .bolivarToDollar(5.20, 15)
 * ) // Result: 2.88
 */
function bolivarToDollar(
	{ dollarPriceInBolivars, bolivar }: any,
	decimals: number = 2
): number {
	return +new Decimal(bolivar)
		.dividedBy(dollarPriceInBolivars)
		.toNumber()
		.toFixed(decimals)
}

export default bolivarToDollar
