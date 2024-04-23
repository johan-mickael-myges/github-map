'use strict';

module.exports = function (config) {
	config.set({
		basePath: '',
		frameworks: ['browserify', 'mocha', 'chai'],
		files: [
			'test/**/*.js',
		],
		exclude: [],
		preprocessors: {
			'test/**/*.js': ['browserify'],
		},
		browserify: {
			extensions: ['.js'],
			transform: [
				['babelify', {
					presets: ['es2015'],
					ignore: /vendor/,
				}],
			],
			watch: true,
			debug: true,
		},
		reporters: ['mocha'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['Chrome'],
		//browsers: ['Firefox'],
		browserNoActivityTimeout: 30000,
		singleRun: false,

		client: {
			captureConsole: true,
			mocha: {
				timeout: 6000,
			},
		},
	});
};
