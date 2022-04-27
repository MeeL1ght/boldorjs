import Decimal from '../../../../node_modules/decimal.js-light/decimal'

/**
 * Convert an amount of dollars to bolivars.
 * @param {object} dollarPriceInBolivars
 * @param {number} decimals
 * @returns {number} `number`
 * @example
 * console.log(
 *   new Boldor()
 *     .dollarToBolivar(2, 5)
 * ) // Result: 10
 */
function dollarToBolivar(
	{ dollarPriceInBolivars, dollar }: any,
	decimals: number = 2
): number {
	return +new Decimal(dollar)
		.times(dollarPriceInBolivars)
		.toNumber()
		.toFixed(decimals)
}

export default dollarToBolivar
