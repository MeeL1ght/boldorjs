import Decimal from '../../../node_modules/decimal.js-light/decimal'

import {
	DEFAULT_CURRENCY,
	DEFAULT_DECIMALS,
	DEFAULT_SEPARATOR,
	DEFAULT_LANG,
	allowedKeys,
	separatorValues,
	langValues,
	currencyDataType,
	decimalsDataType,
	separatorDataType,
	langDataType,
} from '../schema/index'

import errorHandler from '../handler/error'
import util from '../utils/index'
import func from '../funcs/index'

/** Represents represents a currency can
 * work with dollar or bolivar.
 */
class Boldor {
	currency: number
	decimals: number
	separator: string
	lang: string

	/**
	 * @param {object} args
	 * @default {args}
	 * @property {number} args.currency
	 * @property {number} args.decimals
	 * @property {string} args.separator
	 * @property {string} args.lang
	 */
	constructor(
		args: any = {
			currency: DEFAULT_CURRENCY,
			decimals: DEFAULT_DECIMALS,
			separator: DEFAULT_SEPARATOR,
			lang: DEFAULT_LANG,
		}
	) {
		if (arguments.length > 1)
			throw new Error(
				errorHandler.getOutOfRangeArgumentTotalMessage({
					min: 0,
					max: 1,
				})
			)

		// Evaluating keys and data types
		const { result, message }: any = errorHandler.argumentErrorHandler(
			{
				allowedPropertyKeys: allowedKeys,
				objectObtained: args,
				permittedDataTypes: {
					currencyDataType,
					decimalsDataType,
					separatorDataType,
					langDataType,
				},
			}
		)

		if (!result) throw new Error(message)

		// Decimals
		if (
			(util.thePropExists(args, 'decimals') && args.decimals < 0) ||
			args.decimals > 7
		) {
			throw new Error(
				errorHandler.getOutOfRangeMessage(
					{
						min: 0,
						max: 7,
					},
					'decimals'
				)
			)
		}

		// Separator
		if (
			util.thePropExists(args, 'separator') &&
			!util.dataIsOnTheList(args.separator, separatorValues)
		) {
			throw new Error(
				errorHandler.getValueMessageNotFoundInTheList(separatorValues)
			)
		}

		// Lang
		if (
			util.thePropExists(args, 'lang') &&
			!util.dataIsOnTheList(args.lang, langValues)
		) {
			throw new Error(
				errorHandler.getValueMessageNotFoundInTheList(langValues)
			)
		}

		try {
			this.currency = args.currency ??= DEFAULT_CURRENCY
			this.decimals = args.decimals ??= DEFAULT_DECIMALS
			this.separator = args.separator ??= DEFAULT_SEPARATOR
			this.lang = args.lang ??= DEFAULT_LANG
		} catch (error) {
			console.error(error)
		}
	}

	// Setters

	/** @param {number} currency */
	setCurrency(currency: number) {
		if (util.isNotEqualValue(arguments.length, 1))
			throw new Error(
				errorHandler.getTheInvalidArgumentTotalMessage(1)
			)

		if (!util.checkExpectedDataType(currency, typeof this.currency))
			throw new Error(
				errorHandler.getInvalidDataTypeMessage(typeof this.currency)
			)

		try {
			this.currency = currency

			return this
		} catch (error) {
			console.error(error)
		}
	}

	/** @param {number} decimals */
	setDecimals(decimals: number) {
		if (util.isNotEqualValue(arguments.length, 1))
			throw new Error(
				errorHandler.getTheInvalidArgumentTotalMessage(1)
			)

		if (!util.checkExpectedDataType(decimals, typeof this.decimals))
			throw new Error(
				errorHandler.getInvalidDataTypeMessage(typeof this.decimals)
			)

		if (decimals < 0 || decimals > 7) {
			throw new Error(
				errorHandler.getOutOfRangeMessage({
					min: 0,
					max: 7,
				})
			)
		}

		try {
			this.decimals = decimals

			return this
		} catch (error) {
			console.error(error)
		}
	}

	/** @param {string} separator */
	setSeparator(separator: string) {
		if (util.isNotEqualValue(arguments.length, 1))
			throw new Error(
				errorHandler.getTheInvalidArgumentTotalMessage(1)
			)

		if (!util.checkExpectedDataType(separator, typeof this.separator))
			throw new Error(
				errorHandler.getInvalidDataTypeMessage(typeof this.separator)
			)

		if (!util.dataIsOnTheList(separator, separatorValues)) {
			throw new Error(
				errorHandler.getValueMessageNotFoundInTheList(separatorValues)
			)
		}

		try {
			this.separator = separator

			return this
		} catch (error) {
			console.error(error)
		}
	}

	/** @param {string} lang */
	setLang(lang: string) {
		if (util.isNotEqualValue(arguments.length, 1))
			throw new Error(
				errorHandler.getTheInvalidArgumentTotalMessage(1)
			)

		if (!util.checkExpectedDataType(lang, typeof this.lang))
			throw new Error(
				errorHandler.getInvalidDataTypeMessage(typeof this.lang)
			)

		lang = lang.toLowerCase()

		if (!util.dataIsOnTheList(lang, langValues)) {
			throw new Error(
				errorHandler.getValueMessageNotFoundInTheList(langValues)
			)
		}

		try {
			this.lang = lang

			return this
		} catch (error) {
			console.error(error)
		}
	}

	/**
	 * @param {object} args
	 * @default {args}
	 * @property {number} args.currency
	 * @property {number} args.decimals
	 * @property {string} args.separator
	 * @property {string} args.lang
	 */
	set(
		args: any = {
			currency: this.currency,
			decimals: this.decimals,
			separator: this.separator,
			lang: this.lang,
		}
	) {
		if (arguments.length > 1)
			throw new Error(
				errorHandler.getOutOfRangeArgumentTotalMessage({
					min: 0,
					max: 1,
				})
			)

		// Evaluating keys and data types
		const { result, message }: any = errorHandler.argumentErrorHandler(
			{
				allowedPropertyKeys: allowedKeys,
				objectObtained: args,
				permittedDataTypes: {
					currencyDataType,
					decimalsDataType,
					separatorDataType,
					langDataType,
				},
			}
		)

		if (!result) throw new Error(message)

		// Decimals
		if (
			(util.thePropExists(args, 'decimals') && args.decimals < 0) ||
			args.decimals > 7
		) {
			throw new Error(
				errorHandler.getOutOfRangeMessage(
					{
						min: 0,
						max: 7,
					},
					'decimals'
				)
			)
		}

		// Separator
		if (
			util.thePropExists(args, 'separator') &&
			!util.dataIsOnTheList(args.separator, separatorValues)
		) {
			throw new Error(
				errorHandler.getValueMessageNotFoundInTheList(separatorValues)
			)
		}

		// Lang
		if (
			util.thePropExists(args, 'lang') &&
			!util.dataIsOnTheList(args.lang, langValues)
		) {
			throw new Error(
				errorHandler.getValueMessageNotFoundInTheList(langValues)
			)
		}

		try {
			this.currency = args.currency ??= this.currency
			this.decimals = args.decimals ??= this.decimals
			this.separator = args.separator ??= this.separator
			this.lang = args.lang ??= this.lang

			return this
		} catch (error) {
			console.error(error)
		}
	}

	// Getters

	/** Returns the value of the `currency` attribute.
	 * @returns {number} `number`
	 */
	getCurrency(): number {
		if (util.isNotEqualValue(arguments.length, 0))
			throw new Error(errorHandler.getNoArgumentsAreExpectedMessage())

		try {
			// Formatted
			return util.toFormatNumber(this.currency, this.decimals)
		} catch (error) {
			console.error(error)
		}
	}

	/** Returns the value of the `decimals` attribute.
	 * @returns {number} `number`
	 */
	getDecimals(): number {
		if (util.isNotEqualValue(arguments.length, 0))
			throw new Error(errorHandler.getNoArgumentsAreExpectedMessage())

		try {
			return this.decimals
		} catch (error) {
			console.error(error)
		}
	}

	/** Returns the value of the `separator` attribute.
	 * @returns {string} `string`
	 */
	getSeparator(): string {
		if (util.isNotEqualValue(arguments.length, 0))
			throw new Error(errorHandler.getNoArgumentsAreExpectedMessage())

		try {
			return this.separator
		} catch (error) {
			console.error(error)
		}
	}

	/** Returns the value of the `lang` attribute.
	 * @returns {string} `string`
	 */
	getLang(): string {
		if (util.isNotEqualValue(arguments.length, 0))
			throw new Error(errorHandler.getNoArgumentsAreExpectedMessage())

		try {
			return this.lang
		} catch (error) {
			console.error(error)
		}
	}

	get() {
		if (util.isNotEqualValue(arguments.length, 0))
			throw new Error(errorHandler.getNoArgumentsAreExpectedMessage())

		try {
			return {
				currency: this.currency,
				decimals: this.decimals,
				separator: this.separator,
				lang: this.lang,
			}
		} catch (error) {
			console.error(error)
		}
	}

	// Others
	// Arithmetic operations
	// Static

	/**
	 * Add prices.
	 * @param {Array<number>} prices
	 * @return {number} `number`
	 */
	static add(prices: Array<number>, decimals = 2): number {
		if (arguments.length < 1 || arguments.length > 2)
			throw new Error(
				errorHandler.getOutOfRangeArgumentTotalMessage({
					min: 1,
					max: 2,
				})
			)

		if (prices instanceof Array !== true)
			throw new Error(errorHandler.getInvalidDataTypeMessage('object'))

		// Decimals
		if (!util.checkExpectedDataType(decimals, 'number'))
			throw new Error(errorHandler.getInvalidDataTypeMessage('number'))

		if (decimals < 0 || decimals > 7) {
			throw new Error(
				errorHandler.getOutOfRangeMessage({
					min: 0,
					max: 7,
				})
			)
		}

		try {
			return func.add(prices, decimals)
		} catch (error) {
			console.error(error)
		}
	}

	/**
	 * Subtract prices.
	 * @param {Array<number>} prices
	 * @return {number} `number`
	 */
	static subtract(prices: Array<number>, decimals = 2): number {
		if (arguments.length < 1 || arguments.length > 2)
			throw new Error(
				errorHandler.getOutOfRangeArgumentTotalMessage({
					min: 1,
					max: 2,
				})
			)

		if (prices instanceof Array !== true)
			throw new Error(errorHandler.getInvalidDataTypeMessage('object'))

		// Decimals
		if (!util.checkExpectedDataType(decimals, 'number'))
			throw new Error(errorHandler.getInvalidDataTypeMessage('number'))

		if (decimals < 0 || decimals > 7) {
			throw new Error(
				errorHandler.getOutOfRangeMessage({
					min: 0,
					max: 7,
				})
			)
		}

		try {
			return func.subtract(prices, decimals)
		} catch (error) {
			console.error(error)
		}
	}

	/**
	 * Multiply prices.
	 * @param {Array<number>} prices
	 * @return {number} `number`
	 */
	static multiply(prices: Array<number>, decimals = 2): number {
		if (arguments.length < 1 || arguments.length > 2)
			throw new Error(
				errorHandler.getOutOfRangeArgumentTotalMessage({
					min: 1,
					max: 2,
				})
			)

		if (prices instanceof Array !== true)
			throw new Error(errorHandler.getInvalidDataTypeMessage('object'))

		// Decimals
		if (!util.checkExpectedDataType(decimals, 'number'))
			throw new Error(errorHandler.getInvalidDataTypeMessage('number'))

		if (decimals < 0 || decimals > 7) {
			throw new Error(
				errorHandler.getOutOfRangeMessage({
					min: 0,
					max: 7,
				})
			)
		}

		try {
			return func.multiply(prices, decimals)
		} catch (error) {
			console.error(error)
		}
	}

	/**
	 * Divide prices.
	 * @param {Array<number>} prices
	 * @return {number} `number`
	 */
	static divideBy(prices: Array<number>, decimals = 2): number {
		if (arguments.length < 1 || arguments.length > 2)
			throw new Error(
				errorHandler.getOutOfRangeArgumentTotalMessage({
					min: 0,
					max: 1,
				})
			)

		if (prices instanceof Array !== true)
			throw new Error(errorHandler.getInvalidDataTypeMessage('object'))

		// Decimals
		if (!util.checkExpectedDataType(decimals, 'number'))
			throw new Error(errorHandler.getInvalidDataTypeMessage('number'))

		if (decimals < 0 || decimals > 7) {
			throw new Error(
				errorHandler.getOutOfRangeMessage({
					min: 0,
					max: 7,
				})
			)
		}

		try {
			return func.divideBy(prices, decimals)
		} catch (error) {
			console.error(error)
		}
	}

	// Self
	/**
	 * Add prices.
	 * @param {Array<number>} prices
	 * @return {number} `number`
	 */
	add(prices: Array<number>): number {
		if (arguments.length > 1)
			throw new Error(
				errorHandler.getOutOfRangeArgumentTotalMessage({
					min: 0,
					max: 1,
				})
			)

		if (prices instanceof Array !== true)
			throw new Error(errorHandler.getInvalidDataTypeMessage('object'))

		try {
			return func.add(prices, this.decimals)
		} catch (error) {
			console.error(error)
		}
	}

	/**
	 * Subtract prices.
	 * @param {Array<number>} prices
	 * @return {number} `number`
	 */
	subtract(prices: Array<number>): number {
		if (arguments.length > 1)
			throw new Error(
				errorHandler.getOutOfRangeArgumentTotalMessage({
					min: 0,
					max: 1,
				})
			)

		if (prices instanceof Array !== true)
			throw new Error(errorHandler.getInvalidDataTypeMessage('object'))

		try {
			return func.subtract(prices, this.decimals)
		} catch (error) {
			console.error(error)
		}
	}

	/**
	 * Multiply prices.
	 * @param {Array<number>} prices
	 * @return {number} `number`
	 */
	multiply(prices: Array<number>): number {
		if (arguments.length > 1)
			throw new Error(
				errorHandler.getOutOfRangeArgumentTotalMessage({
					min: 0,
					max: 1,
				})
			)

		if (prices instanceof Array !== true)
			throw new Error(errorHandler.getInvalidDataTypeMessage('object'))

		try {
			return func.multiply(prices, this.decimals)
		} catch (error) {
			console.error(error)
		}
	}

	/**
	 * Divide prices.
	 * @param {Array<number>} prices
	 * @return {number} `number`
	 */
	divideBy(prices: Array<number>): number {
		if (arguments.length > 1)
			throw new Error(
				errorHandler.getOutOfRangeArgumentTotalMessage({
					min: 0,
					max: 1,
				})
			)

		if (prices instanceof Array !== true)
			throw new Error(errorHandler.getInvalidDataTypeMessage('object'))

		try {
			return func.divideBy(prices, this.decimals)
		} catch (error) {
			console.error(error)
		}
	}

	// Currency conversion operations

	/**
	 * Convert an amount of bolivars to dollars.
	 * @param {number} dollarPriceInBolivars
	 * @param {number} bolivar
	 * @returns {number} `number`
	 */
	static bolivarToDollar(
		dollarPriceInBolivars: number,
		bolivar: number
	): number {
		if (util.isNotEqualValue(arguments.length, 2))
			throw new Error(
				errorHandler.getTheInvalidArgumentTotalMessage(2)
			)

		if (
			!util.checkExpectedDataType(dollarPriceInBolivars, 'number') ||
			!util.checkExpectedDataType(bolivar, 'number')
		) {
			throw new Error(errorHandler.getInvalidDataTypeMessage('number'))
		}

		try {
			return func.bolivarToDollar(
				{ dollarPriceInBolivars, bolivar },
				2
			)
		} catch (error) {
			console.error(error)
		}
	}

	/**
	 * Convert an amount of dollars to bolivars.
	 * @param {number} dollarPriceInBolivars
	 * @param {number} bolivar
	 * @returns {number} `number`
	 */
	static dollarToBolivar(
		dollarPriceInBolivars: number,
		dollar: number
	): number {
		if (util.isNotEqualValue(arguments.length, 2))
			throw new Error(
				errorHandler.getTheInvalidArgumentTotalMessage(2)
			)

		if (
			!util.checkExpectedDataType(dollarPriceInBolivars, 'number') ||
			!util.checkExpectedDataType(dollar, 'number')
		) {
			throw new Error(errorHandler.getInvalidDataTypeMessage('number'))
		}

		try {
			return +new Decimal(dollar)
				.times(dollarPriceInBolivars)
				.toNumber()
				.toFixed(2)
		} catch (error) {
			console.error(error)
		}
	}

	/**
	 * Convert an amount of bolivars to dollars.
	 * @param {number} dollarPriceInBolivars
	 * @param {number} bolivar
	 * @returns {number} `number`
	 */
	bolivarToDollar(
		dollarPriceInBolivars: number,
		bolivar: number
	): number {
		if (util.isNotEqualValue(arguments.length, 2))
			throw new Error(
				errorHandler.getTheInvalidArgumentTotalMessage(2)
			)

		if (
			!util.checkExpectedDataType(dollarPriceInBolivars, 'number') ||
			!util.checkExpectedDataType(bolivar, 'number')
		) {
			throw new Error(errorHandler.getInvalidDataTypeMessage('number'))
		}

		try {
			return func.bolivarToDollar(
				{ dollarPriceInBolivars, bolivar },
				this.decimals
			)
		} catch (error) {
			console.error(error)
		}
	}

	/**
	 * Convert an amount of dollars to bolivars.
	 * @param {number} dollarPriceInBolivars
	 * @param {number} bolivar
	 * @returns {number} `number`
	 */
	dollarToBolivar(dollarPriceInBolivars: number, dollar): number {
		if (util.isNotEqualValue(arguments.length, 2))
			throw new Error(
				errorHandler.getTheInvalidArgumentTotalMessage(2)
			)

		if (
			!util.checkExpectedDataType(dollarPriceInBolivars, 'number') ||
			!util.checkExpectedDataType(dollar, 'number')
		) {
			throw new Error(errorHandler.getInvalidDataTypeMessage('number'))
		}

		try {
			return func.dollarToBolivar(
				{ dollarPriceInBolivars, dollar },
				this.decimals
			)
		} catch (error) {
			console.error(error)
		}
	}

	// Create and format the currency.
	// Static

	/**
	 * Create and format the currency.
	 * @param {string} customFormat
	 * @return {string} `string`
	 */
	static format(
		customFormat: string = '[s][c]',
		config = {
			currency: 0,
			decimals: 2,
			separator: '.',
			lang: 'en',
		}
	): string {
		if (arguments.length > 2)
			throw new Error(
				errorHandler.getOutOfRangeArgumentTotalMessage({
					min: 0,
					max: 2,
				})
			)

		// Evaluating keys and data types
		const { result, message }: any = errorHandler.argumentErrorHandler(
			{
				allowedPropertyKeys: Object.keys({
					currencyDataType,
					decimalsDataType,
					separatorDataType,
					langDataType,
				}),
				objectObtained: config,
				permittedDataTypes: {
					currencyDataType,
					decimalsDataType,
					separatorDataType,
					langDataType,
				},
			}
		)

		if (!result) throw new Error(message)

		// Evaluating lists and ranges

		// Decimals
		if (
			(util.thePropExists(config, 'decimals') &&
				config.decimals < 0) ||
			config.decimals > 7
		) {
			throw new Error(
				errorHandler.getOutOfRangeMessage(
					{
						min: 0,
						max: 7,
					},
					'decimals'
				)
			)
		}

		// Separator
		if (
			util.thePropExists(config, 'separator') &&
			!util.dataIsOnTheList(config.separator, separatorValues)
		) {
			throw new Error(
				errorHandler.getValueMessageNotFoundInTheList(separatorValues)
			)
		}

		if (util.thePropExists(config, 'lang'))
			config.lang = config.lang.toLowerCase()

		// Lang
		if (
			util.thePropExists(config, 'lang') &&
			!util.dataIsOnTheList(config.lang, langValues)
		) {
			throw new Error(
				errorHandler.getValueMessageNotFoundInTheList(langValues)
			)
		}

		try {
			return func.format(customFormat, {
				currency: (config.currency ??= 0),
				decimals: (config.decimals ??= 2),
				symbol: (config.lang ??= 'en'),
				separator: (config.separator ??= '.'),
				isAStaticMethod: true,
				totalArgs: arguments.length,
			})
		} catch (error) {
			console.error(error)
		}
	}

	// Self

	/**
	 * Create and format the currency.
	 * @param {string} customFormat
	 * @return {string} `string`
	 */
	format(customFormat: string = '[s][c]'): string {
		if (arguments.length > 1)
			throw new Error(
				errorHandler.getOutOfRangeArgumentTotalMessage({
					min: 0,
					max: 1,
				})
			)

		if (!util.checkExpectedDataType(customFormat, 'string'))
			throw new Error(errorHandler.getInvalidDataTypeMessage('string'))

		try {
			return func.format(customFormat, {
				currency: this.currency,
				decimals: this.decimals,
				symbol: this.lang,
				separator: this.separator,
				isAStaticMethod: false,
				totalArgs: arguments.length,
			})
		} catch (error) {
			console.error(error)
		}
	}
}

export default Boldor
