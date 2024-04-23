'use strict';

var gulp = require('gulp');
var Karma = require('karma').Server;


gulp.task('test', function (done) {
	new Karma({
		configFile: __dirname + '/karma.conf.js',
		singleRun: true,
	}, function() {
		done();
	}).start();
});

gulp.task('tdd', function (done) {
	new Karma({
		configFile: __dirname + '/karma.conf.js',
	}, done).start();
});
