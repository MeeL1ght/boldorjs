// Calculator
import add from './calculator/add'
import subtract from './calculator/subtract'
import multiply from './calculator/multiply'
import divideBy from './calculator/divide-by'

// Conversions
import bolivarToDollar from './conversions/bolivar-to-dollar'
import dollarToBolivar from './conversions/dollar-to-bolivar'

// Format
import format from './format/format'

/**
 * Object that includes the methods to use in
 * the body of the Boldor class.
 */
const func = {
	// Calculator
	add,
	subtract,
	multiply,
	divideBy,
	// Conversions
	bolivarToDollar,
	dollarToBolivar,
	// Format
	format,
}

export default func
