var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var path = require('path');

const ENV = process.env.NODE_ENV = process.env.ENV = 'DEV';

module.exports = webpackMerge(commonConfig, {
	// debug:true,
	// devtool: 'source-map',
	output: {
		path: helpers.root('dist'),
		publicPath: '/',
		filename: '[name].js',
		chunkFilename: '[id].chunk.js'
	},
	htmlLoader: {
		minimize: false // workaround for ng2
	},
	module: {
		preLoaders:[
			{
				test: /\.(ts|html)$/,
				loader: 'preprocessor-loader?config='+helpers.root('config')+'/preprocess.dev.json',
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		// extracts embedded css as external files, adding cache-busting hash to the filename.
		new ExtractTextPlugin('[name].css'),
		// define environment variables that we can reference within our application
		new webpack.DefinePlugin({
			'process.env': {
				'ENV': JSON.stringify(ENV)
			}
		})
	],
	devServer: {
		historyApiFallback: true,
		stats: 'minimal',
		outputPath: helpers.root('dist')
	}
});
