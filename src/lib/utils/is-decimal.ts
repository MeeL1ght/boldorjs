/**
 * Determines whether the value is a decimal number.
 * @param {number} value 
 * @returns {boolean} `boolean`
 */
function isDecimal(value: number): boolean {
  return value % 1 !== 0 ? true : false
}

export default isDecimal
