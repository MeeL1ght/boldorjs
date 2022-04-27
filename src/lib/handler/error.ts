import util from '../utils/index'

const errorHandler = {
	// Cases and Messages

	/** Return message indicating that the value of the argument or property is out of range. */
	getOutOfRangeMessage: (
		{ min, max },
		propName: string = ''
	): string => {
		const endMessage = util.isNotEqualValue(propName, '')
			? `of the "${propName}" is invalid.\n` +
			  'It can only support values ' +
			  `between: ${min} and ${max}`
			: 'is invalid.\nIt can only support ' +
			  `values between: ${min} and ${max}`

		return `Oops! The value ${endMessage}.\n`
	},

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * *\
	*   ALERT! Make use when there are default arguments.   *
 	/* * * * * * * * * * * * * * * * * * * * * * * * * * * */
	/** Returns a message indicating the range of arguments allowed. */
	getOutOfRangeArgumentTotalMessage: ({ min, max }): string =>
		'Oops! The total number of arguments is not valid.\n' +
		`Total arguments allowed: { min: ${min}, max: ${max} }.\n`,

	/** Returns a message with the total number of expected arguments.  */
	getTheInvalidArgumentTotalMessage: (totalArgs: number): string => {
		const startMessage = util.isEqualValue(totalArgs, 0)
			? ''
			: 'The total number of arguments is not valid.\n'

		const endMessage = util.isEqualValue(totalArgs, 0)
			? 'No arguments expected'
			: util.isEqualValue(totalArgs, 1)
			? 'An argument was expected'
			: `A total of ${totalArgs} arguments are expected`

		return `Oops! ${startMessage}${endMessage}.\n`
	},

	/** @returns {string} `string` */
	getMessageObjectMustHaveProps: (): string =>
		`Oops! The object must have properties.\n`,

	/** Returns a message indicating that the expected data type is not correct. */
	getInvalidDataTypeMessage: (expectedDataType: string): string =>
		'Oops! The expected data type is invalid.\n' +
		`The data type "${expectedDataType}" was expected.\n`,

	/** @Returns {string} `string` */
	getValueMessageNotFoundInTheList: (list: Array<string>): string =>
		`Oops! The value is not valid. ${util.getFormattedListMessage(
			list
		)}`,

	// Checks
	/**
	 * Check if the name of each property is correct.
	 * @param {string[]} allowedProps
	 * @param {object} propsObtained
	 * @returns {object}
	 * `object`: {
	 *   result: `boolean`,
	 *   incorrectProperty: `string`
	 * }_
	 */
	propertiesAreValid: (
		allowedProps: Array<string>,
		propsObtained: object
	): object => {
		propsObtained = Object.keys(propsObtained)
		const length = Object.keys(propsObtained).length

		for (let index = 0; index < length; index++)
			if (!util.dataIsOnTheList(propsObtained[index], allowedProps))
				return {
					result: false,
					incorrectProperty: propsObtained[index],
				}

		return {
			result: true,
			incorrectProperty: 'Errors: 0',
		}
	},

	/**
	 * Check if the data type of each property is correct.
	 * @param {object} allowedTypes
	 * @param {object} propsObtained
	 * @returns {object} _`object`: { result: `boolean` }_
	 */
	propTypeIsCorrect: (
		allowedTypes: object,
		propsObtained: object
	): object => {
		const keysAllowedTypes = Object.keys(allowedTypes)
		const valuesAllowedTypes = Object.values(allowedTypes)
		const keysObtained = Object.keys(propsObtained)
		const typeObtained = Object.values(propsObtained).map(
			(prop: any) => typeof prop
		)

		for (
			let indexAllowedType: number = 0;
			indexAllowedType < keysAllowedTypes.length;
			indexAllowedType++
		) {
			for (
				let indexObtainedType: number = 0;
				indexObtainedType < keysObtained.length;
				indexObtainedType++
			) {
				if (
					util.isEqualValue(
						keysAllowedTypes[indexAllowedType],
						keysObtained[indexObtainedType]
					)
				) {
					if (
						util.isNotEqualValue(
							valuesAllowedTypes[indexAllowedType],
							typeObtained[indexObtainedType]
						)
					) {
						return { result: false }
					}
				}
			}
		}

		return { result: true }
	},

	/**
	 * Checks for an error with the properties
	 * of an object passed by argument.
	 * @param {object} settings
	 * @namespace {object} settings
	 * @property {array} settings.allowedPropertyKeys
	 * @property {object} settings.objectObtained
	 * @property {object} settings.permittedDataTypes
	 * @returns {object} _`object`: {_
	 *   result: `boolean`,
	 *   message: `string`
	 * }_
	 */
	argumentErrorHandler: (settings: any = {}): object => {
		// For the keys
		const { result: resultValidPropKeys, incorrectProperty }: any =
			errorHandler.propertiesAreValid(
				settings.allowedPropertyKeys,
				settings.objectObtained
			)

		// For Data Type of the keys
		const { result: resultValidPropDataTypes }: any =
			errorHandler.propTypeIsCorrect(
				settings.permittedDataTypes,
				settings.objectObtained
			)

		if (!resultValidPropKeys)
			return {
				result: false,
				message: `Oops! The ${incorrectProperty} property is not valid.\n`,
			}

		if (!resultValidPropDataTypes)
			return {
				result: false,
				message:
					'Oops! One or more properties may have an incorrect data type.\n',
			}

		return {
			result: true,
			message: '',
		}
	},

	/** @return {string} Error message. `string` */
	messageCannotBeDividedByZero: (): string =>
		'Oops! It cannot be divided by zero.\n',

	/** @return {string} Error message. `string` */
	getNoArgumentsAreExpectedMessage: (): string =>
		'Oops! No argument expected.\n',
}

export default errorHandler
