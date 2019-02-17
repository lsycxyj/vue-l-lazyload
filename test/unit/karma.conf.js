// Karma configuration
// Generated on Mon Jan 23 2017 12:00:17 GMT+0800 (中国标准时间)

const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('../../build/webpack.base.conf');
const webpack = require('webpack');

const projectRoot = path.resolve(__dirname, '../../');

const webpackConfig = merge(baseConfig, {
	// use inline sourcemap for karma-sourcemap-loader
	devtool: '#inline-source-map',
});

// no need for app entry during tests
delete webpackConfig.entry;
// library required
delete webpackConfig.externals;

// Use babel for test files too
webpackConfig.module.rules.some((loader, i) => {
	if (/^babel(-loader)?$/.test(loader.loader)) {
		loader.include.push(path.resolve(projectRoot, 'test/unit'));
		return true;
	}
});

const isWatchMode = !!process.env.WATCH;

// For ChromeHeadless
process.env.CHROME_BIN = require('puppeteer').executablePath();

const reporters = ['mocha'];
if (process.env.USE_COVERAGE) {
	reporters.push('coverage');
}

module.exports = function (config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['mocha'],


		// list of files / patterns to load in the browser
		files: [
			'./index.js',
		],


		// list of files to exclude
		exclude: [],


		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			'./index.js': ['webpack', 'sourcemap'],
		},


		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		// add coverage support with babel's test plugins
		reporters,

		// webpack
		webpack: webpackConfig,
		webpackMiddleware: {
			noInfo: true,
		},
		// Coverage options
		coverageReporter: {
			dir: './coverage',
			reporters: [
				// There is a bug of html reporter to write files when I try to use single file component of vue
				// { type: 'html', subdir: '.' },
				{ type: 'text', file: 'text.txt' },
				{ type: 'lcovonly', subdir: '.' },
				{ type: 'text-summary' },
			],
		},

		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: isWatchMode,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: [
			// 'PhantomJS',
			// This doesn't seem to work
			// 'Firefox',
			// Uncomment Chrome and IE for development since Travis doesn't have these browsers
			// 'Chrome',
			// 'IE',
			'ChromeHeadless',
			// Simulated events don't always work
			// 'Edge'
		],


		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: !isWatchMode,

		// Concurrency level
		// how many browser should be started simultaneous
		concurrency: Infinity,

		// browserDisconnectTimeout : 2100000000,
		// browserNoActivityTimeout : 2100000000,
	});
};
