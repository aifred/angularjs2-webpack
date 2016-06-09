var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
var path = require('path');

module.exports = {
	entry: {
		'polyfills': './src/polyfills.ts',
		'vendor': './src/vendor.ts',
		'app': './src/main.ts'
	},
	resolve: {
		extensions: ['','.ts','.js'],
		root: helpers.root('src'),
		//modulesDirectories: ['src','node_modules']
		alias:{
			model: helpers.root('src/model'),
			service: helpers.root('src/service'),
			app: helpers.root('src/app')
		}
	},
	module: {
		loaders: [
			{
				test: /\.json$/,
				loader: 'json'
			},
			{
				test: /\.ts$/,
				loader: 'ts'
			},
			{
				test: /\.html$/,
				loader: 'html'
			},
			{
				test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
				loader: 'file?name=assets/[name].[hash].[ext]'
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
	]
}