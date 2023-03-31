const gulp = require('gulp');
const smartgrid = require('smart-grid');

gulp.task('grid', function (done) {

	delete require.cache[require.resolve('./smartgrid.config.js')];

	let settings = require('./smartgrid.config.js');

	settings.filename = 'smart-grid-calc';
	smartgrid('./smartgrid', settings);

	done();
});