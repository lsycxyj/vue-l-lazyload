const path = require('path'),
	config = require('./conf'),
	devWebpackConfig = require('./webpack.dev.conf'),
	webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const mergedConf = webpackMerge(devWebpackConfig, {
	devServer: {
		host: 'localhost',
		port: 8010,
	},
	plugins: [
		new CopyWebpackPlugin([
			{
				from: path.resolve(config.path.demo, 'img/**/*'),
				to: path.resolve(config.path.demoJS, 'img'),
				flatten: true,
			},
		]),
		new HtmlWebpackPlugin({
			template: path.resolve(config.path.demo, 'index.template.html'),
		}),
	],
});

delete mergedConf.externals;

module.exports = mergedConf;
