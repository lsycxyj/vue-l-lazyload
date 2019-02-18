// Karma configuration
// Generated on Mon Jan 23 2017 12:00:17 GMT+0800 (中国标准时间)

const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('../../build/webpack.base.conf');
const webpack = require('webpack');

const projectRoot = path.resolve(__dirname, '../../');

const webpackConfig = merge(baseConfig, {
	// use inline sourcemap for karma-sourcemap-loader
	devtool: 'inline-cheap-module-source-map',
	output: {
		devtoolModuleFilenameTemplate: '[absolute-resource-path]',
		devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]',
	},
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
	reporters.push('coverage-istanbul');
	// reporters.push('coverage');
	// reporters.push('karma-remap-istanbul');
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
		// coverageReporter: {
		// 	dir: './coverage',
		// 	reporters: [
		// 		// There is a bug of html reporter to write files because of wrong file names when I try to use single file component of vue
		// 		// { type: 'html', subdir: '.' },
		// 		{ type: 'text', file: 'text.txt' },
		// 		{ type: 'lcovonly', subdir: '.' },
		// 		{ type: 'text-summary' },
		// 	],
		// },

		// any of these options are valid: https://github.com/istanbuljs/istanbuljs/blob/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-api/lib/config.js#L33-L39
		coverageIstanbulReporter: {
			// reports can be any that are listed here: https://github.com/istanbuljs/istanbuljs/tree/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-reports/lib
			reports: [
				// 'html',
				'text',
				'lcovonly',
				'text-summary',
			],

			// base output directory. If you include %browser% in the path it will be replaced with the karma browser name
			dir: path.join(__dirname, 'coverage'),

			// Combines coverage information from multiple browsers into one report rather than outputting a report
			// for each browser.
			combineBrowserReports: true,

			// if using webpack and pre-loaders, work around webpack breaking the source path
			fixWebpackSourcePaths: true,

			// Omit files with no statements, no functions and no branches from the report
			skipFilesWithNoCoverage: true,

			// Most reporters accept additional config options. You can pass these through the `report-config` option
			'report-config': {
				// all options available at: https://github.com/istanbuljs/istanbuljs/blob/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-reports/lib/html/index.js#L135-L137
				html: {
					// outputs the report in ./coverage/html
					subdir: 'html',
				},
				text: {
					file: './coverage.txt',
				},
			},

			verbose: true, // output config used by istanbul for debugging
		},

		// remapIstanbulReporter: {
		//   remapOptions: {
		//     mapFileName(filename) {
		//       const originalFilename = filename.replace(/\.vue(\.[jt]s)?(\?.+)?$/, '.vue');
		//       console.log(originalFilename);
		//     	return originalFilename;
		// 		},
		// 	},
		//   reports: {
		//     html: 'coverage',
		//   },
		// },

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
