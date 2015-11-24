/*
 * String filters
 *
 * Registers string template filters to angular app
 */

var app = require('../app');

/* Ordinal numbers */
app.filter('ordinal', function () {
	return function (value) {
		var suffix = 'th';
		var mapping = {
			'1': 'st',
			'2': 'nd',
			'3': 'rd',
			'21': 'st',
			'22': 'nd',
			'23': 'rd',
			'31': 'st'
		};
		suffix = mapping[value] || suffix;

		return value + suffix;
	};
});