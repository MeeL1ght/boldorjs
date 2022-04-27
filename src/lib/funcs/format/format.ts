import { specialWords } from '../../schema/index'
import theWordExists from '../../utils/the-word-exists'
import isEqualValue from '../../utils/is-equal-value'
import addSeparators from '../../utils/add-separators'
import toFormatNumber from '../../utils/to-format-number'

/**
 * Create and format the currency.
 * @param {string} customFormat
 * @param {object}
 * @return {string} `string`
 */
function format(
	customFormat: string,
	{
		currency,
		decimals,
		symbol,
		separator,
		isAStaticMethod,
		totalArgs,
	}: any
): string {
	let renderSymbol = ''

	// Example: 0.99
	if (isEqualValue(isAStaticMethod, true)) {
		if (theWordExists(customFormat, specialWords.currency)) {
			currency = toFormatNumber(currency, decimals)

			customFormat = customFormat.replaceAll(
				specialWords.currency,
				addSeparators({ currency, decimals }, separator)
			)
		}

		renderSymbol =
			totalArgs === 0 && isEqualValue(symbol, 'en')
				? '$'
				: totalArgs === 1 ||
				  (totalArgs === 2 && isEqualValue(symbol, 'en'))
				? '$'
				: 'Bs'
	} else {
		if (theWordExists(customFormat, specialWords.currency)) {
			currency = toFormatNumber(currency, decimals)

			customFormat = customFormat.replaceAll(
				specialWords.currency,
				addSeparators({ currency, decimals }, separator)
			)
		}

		renderSymbol =
			totalArgs === 0 && isEqualValue(symbol, 'es')
				? 'Bs '
				: totalArgs === 1 && isEqualValue(symbol, 'es')
				? 'Bs'
				: '$'
	}

	// $ || Bs
	if (theWordExists(customFormat, specialWords.symbol)) {
		customFormat = customFormat.replaceAll(
			specialWords.symbol,
			renderSymbol
		)
	}

	return customFormat
}

export default format
