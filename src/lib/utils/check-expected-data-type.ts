/**
 * checks if the data type is the same as expected.
 * @param {any} dataType
 * @param {any} expectedDataType
 * @returns {boolean} `boolean`
 */
const checkExpectedDataType = (
	dataType: any,
	expectedDataType: string
): boolean => (typeof dataType === expectedDataType ? true : false)

export default checkExpectedDataType
