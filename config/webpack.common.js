var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
var path = require('path');

module.exports = {
	entry: {
		'polyfills': './src/polyfills.ts',
		'vendor': './src/main.ts',
		'app': './src/main.ts'
	},
	resolve: {
		extensions: ['','.ts','.js'],
		root: helpers.root('src'),
		//modulesDirectories: ['src','node_modules']
		alias:{
			model: helpers.root('src/model'),
			service: helpers.root('src/service'),
			enum: helpers.root('src/enum'),
			app: helpers.root('src/app'),
			src: helpers.root('src'),
			config: helpers.root('config')
		}
	},
	module: {
		preLoaders:[
		// 	{
		// 		test: /\.ts$/,
		// 		loader: 'preprocessor-loader?config='+helpers.root('config')+'/preprocess.dev.json',
		// 		exclude: /node_modules/
		// 	}
		],
		loaders: [
			{
				test: /\.json$/,
				loader: 'json'
			},
			{
				test: /\.ts$/,
				loader: 'awesome-typescript-loader',
				exclude: /node_modules/
			},
			{
				test: /\.html$/,
				loader: 'html'
			},
			{
			 // ASSET LOADER
			 test: /\.(woff|woff2|ttf|eot)$/,
			 loader: 'file'
			},
			{
			 //IMAGE LOADER
			 test: /\.(jpeg|png|gif|svg|jpg)$/i,
			 loader:'file-loader?name=[path][name].[ext]'
			},
			{
				test: /\.css$/,
				exclude: helpers.root('app'),
				loader: ExtractTextPlugin.extract('style','css?sourceMap')
			},
			{
				test: /\.css$/,
				include: helpers.root('app'),
				loader: 'css'
			}
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: ['app','vendor','polyfills']
		}),
		new HtmlWebpackPlugin({
			template: './index.html'
		}),
		new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
	],
	colors: true
}
