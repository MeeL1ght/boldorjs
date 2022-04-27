/**
 * Compares the data type of an argument.
 * @param {any} data
 * @param {string} validDataType
 * @returns {boolean} `boolean`
 */
const theDataTypeIsValid = (
	data: any,
	validDataType: string
): boolean => (typeof data === validDataType ? true : false)

export default theDataTypeIsValid
