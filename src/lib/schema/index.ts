// Default values
const DEFAULT_CURRENCY: number = 0,
	DEFAULT_DECIMALS: number = 2,
	DEFAULT_SEPARATOR: string = '.',
	DEFAULT_LANG: string = 'en',
	// Allowed Keys
	allowedKeys: Array<string> = [
		'currency',
		'decimals',
		'separator',
		'lang',
	],
	// Allowed values
	separatorValues: Array<string> = [
		'',
		' ',
		'.',
		',',
		'-',
		'_',
		'none',
	],
	langValues: Array<string> = ['en', 'es']

// Data types
const currencyDataType: string = 'number',
	decimalsDataType: string = 'number',
	separatorDataType: string = 'string',
	langDataType: string = 'string'

// Special words
const specialWords = {
	currency: '[c]',
	symbol: '[s]',
}

export {
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
	specialWords,
}
