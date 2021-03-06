#!/usr/bin/env node


/**
 * Module dependencies
 */

var captains = require('captains-log');



module.exports = function ( ) {

	var config = {};
	var log = captains();

	log.info('To configure the Sails command-line interface, create a `.sailsrc` file.');
	log.warn('`.sailrc` is currently experimental, and the API may change.');
	log.warn('Please share your feedback on Github! (http://github.com/balderdashy/sails)');
	return;
};
