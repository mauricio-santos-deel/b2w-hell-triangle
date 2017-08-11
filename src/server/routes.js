/* global module */

module.exports = function(app) {
	var controller = require('./controller');

	// API Route to calculate the hell-triangle result
	app.route('/api/hell/result')
		.post(controller.calculateResult);
};
