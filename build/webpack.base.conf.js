const path = require('path'),
	config = require('./conf'),
	utils = require('./utils');

const webpack = require('webpack'),
	VueLoaderPlugin = require('vue-loader/lib/plugin'),
	LoaderOptionsPlugin = webpack.LoaderOptionsPlugin,
	MiniCssExtractPlugin = require('mini-css-extract-plugin'),
	projectRoot = path.resolve(__dirname, '../'),
	projectSrc = path.resolve(projectRoot, 'src'),
	projectDemo = path.resolve(projectRoot, 'demo');

const { isProduction, isTest, useCoverage } = utils;

module.exports = {
	entry: {
		app: path.resolve(config.path.demo, 'src/main.js'),
	},
	mode: 'development',
	output: {
		path: config.path.demoJS,
		filename: '[name].js',
	},
	resolve: {
		extensions: ['.js', '.vue'],
		alias: {
			vue$: 'vue/dist/vue.esm.js',
		},
	},
	externals: {
		vue: 'Vue',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'eslint-loader',
				enforce: 'pre',
				exclude: /node_modules/,
				include: [
					projectSrc,
				],
			},
			{
				test: /\.vue$/,
				loader: 'eslint-loader',
				enforce: 'pre',
				exclude: /node_modules/,
				include: [
					projectSrc,
				],
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.less$/,
				use: [
					isProduction() ? MiniCssExtractPlugin.loader : 'vue-style-loader',
					'css-loader',
					'postcss-loader',
					'less-loader',
				],
			},
			{
				test: /\.js$/,
				include: [
					projectSrc,
					projectDemo,
				],
				exclude: /node_modules/,
				use: (useCoverage() ? [
					/*
					  By using this loader instead of using the babel-plugin-istanbul can prevent html reporter from
					  throwing "no such a file or directory" caused by strange query suffix of Vue's single file component,
					  which is added by vue-loader^15.
					*/
					'istanbul-instrumenter-loader',
				] : []).concat([
					'babel-loader',
				]),
			},
		],
	},
	plugins: [
		new VueLoaderPlugin(),
		new LoaderOptionsPlugin({
			options: {
				eslint: {
					formatter: require('eslint-friendly-formatter'),
				},
			},
		}),
	],
};
