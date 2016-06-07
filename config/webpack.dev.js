var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var path = require('path');

module.exports = webpackMerge(commonConfig, {
	devtool: 'source-map',
	output: {
		path: helpers.root('dist'),
		publicPath: 'http://localhost:8080/',
		filename: '[name].js',
		chunkFilename: '[id].chunk.js'
	},
	plugins: [
		new ExtractTextPlugin('[name].css')
	],
	// module: {
	// 	loaders: [
	// 		{
	// 			test: /\.js$/,
	// 			loader: 'js',
	// 			include: [path.resolve(__dirname, "src")] 
	// 		}
	// 	]
	// },
	devServer: {
		historyApiFallback: true,
		stats: 'minimal'
	}
});