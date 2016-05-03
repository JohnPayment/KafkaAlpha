var resources = require('resources');

// Checks whether an object is an array or an instance and iterates through it accordingly.
exports.addArrayOrItem = function(object, callback) {

	if(object.constructor === Array) {

		for(var i = 0; i < object.length; ++i) {

			callback(object[i]);
		}
	} else {

		callback(object);
	}
}

// Returns the number of properties within an object.
exports.getListSize = function(list) {

	var size = 0;

	for(var prop in list) {

		size += 1;
	}

	return size;
}
