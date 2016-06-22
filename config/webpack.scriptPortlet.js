var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var path = require('path');

const ENV = process.env.NODE_ENV = process.env.ENV = 'PORTLET';

module.exports = webpackMerge(commonConfig, {
	// devtool: 'source-map',
	output: {
		path: helpers.root('dist'),
		publicPath: '/',
		filename: '[name].[hash].js',
		chunkFilename: '[id].[hash].chunk.js'
	},
  // externals:{
  //   ""
  // },
	htmlLoader: {
		minimize: false // workaround for ng2
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'js',
				include: [path.resolve(__dirname, "src")]
			}
		]
	},
	plugins: [
    // ignore external devDependencies
    new webpack.IgnorePlugin(/@angular/),
		// stops the build if any error occurs
		new webpack.NoErrorsPlugin(),
		// detects identical files and removes them from the output
		new webpack.optimize.DedupePlugin(),
		// minifies the bundles
		new webpack.optimize.UglifyJsPlugin({minimize: true}),
		// extracts embedded css as external files, adding cache-busting hash to the filename.
		new ExtractTextPlugin('[name].[hash].css'),
		// define environment variables that we can reference within our application
		new webpack.DefinePlugin({
			'process.env': {
				'ENV': JSON.stringify(ENV)
			}
		})
	]
});