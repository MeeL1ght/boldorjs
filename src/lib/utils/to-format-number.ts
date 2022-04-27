import Decimal, { Numeric } from 'decimal.js-light'

/**
 * Returns a formatted numeric value.
 * @param {number} number
 * @param {number} decimals
 * @returns {number} `number`
 */
const toFormatNumber = (
	number: Numeric,
	decimals: number = 2
): number => +new Decimal(number).toNumber().toFixed(decimals)

export default toFormatNumber
