'use strict';

module.exports = function(app) {

	app.route('/')
		.get(function(req, res) {
			res.sendFile(process.cwd() + '/public/index.html');
		});

	app.route('/:time')
		.get(function(req, res) {
			function isValidDate(date) {
				var d;
				var result;

				d = !isNaN(+date) ? new Date(+date) : new Date(date);

				if (Object.prototype.toString.call(d) === '[object Date]') {

					if (isNaN(d.getTime())) {

						result = 'Invalid date.';

					} else {

						var options = {year: 'numeric', month: 'long', day: 'numeric'};

						result = {
							'unix': d.getTime(),
							'natural': d.toLocaleDateString('en-US', options)
						};
					}
					return result;
				}
				return 'Invalid date.';
			}
			res.send(isValidDate(req.params.time));
		});
};