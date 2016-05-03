
var resources = require('resources');

/* Truncates large numbers into a more human-readable format
 *
 * number - The number to be truncated
 */
exports.truncateNumber = function(number) {

	if(number > 1000000) {

		return "" + (number / 1000000).toPrecision(3) + "M";
	} else if(number >= 10000) {

		return "" + (number / 1000).toPrecision(3) + "K";
	}

	return number;
}
