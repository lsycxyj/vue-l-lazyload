var path = require('path'),
	utils = require('./utils'),
	config = require('./conf'),
	webpack = require('webpack'),
	UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
	webpackMerge = require('webpack-merge'),
	baseWebpackConfig = require('./webpack.base.conf.js'),
	CompressionWebpackPlugin = require('compression-webpack-plugin'),
	webpackConfig = webpackMerge(baseWebpackConfig, {
		entry: {
			main: './src/index.js',
		},
		devtool: 'sourcemap',
		mode: 'production',
		output: {
			path: config.path.dist,
			filename: '[name].js',
			chunkFilename: '[id].[chunkhash].js',
			libraryTarget: 'umd',
			library: 'vue-l-lazyload',
		},
		optimization: {
			minimizer: [
				new UglifyJsPlugin({
					uglifyOptions: {
						compress: {
							warnings: false,
							dead_code: true,
							unused: true,
							collapse_vars: true,
							reduce_vars: true,
							loops: true,
						},
						output: {
							comments: /@license/i,
						},
					},
				}),
			],
		},
		plugins: [
			new webpack.optimize.OccurrenceOrderPlugin(),
			new CompressionWebpackPlugin({
				asset: '[path].gz[query]',
				algorithm: 'gzip',
				test: new RegExp(
					`\\.(${
						['js', 'css'].join('|')
						})$`,
				),
				threshold: 5 * 1024,
				minRatio: 0.8,
			}),
		],
	});

delete webpackConfig.entry.app;

module.exports = webpackConfig;
