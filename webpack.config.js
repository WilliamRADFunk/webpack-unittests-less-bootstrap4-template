const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

let config = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './public'),
		filename: 'output.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/, // files ending with .js
				exclude: /node_modules/, // exclude the node_modules folder
				loader: "babel-loader" // use the (babel-core) loader
			},
			{
				test: /\.scss$/, // files ending with .scss
				use: ExtractTextWebpackPlugin.extract({
					use: ['css-loader', 'sass-loader'], // Use these loaders
					fallback: 'style-loader' // Fallback for any CSS no extracted
				})
			},
			{
				test: /\.less$/, // files ending with .less
				use: ExtractTextWebpackPlugin.extract({
					use: ['css-loader', 'less-loader'], // Use these loaders
					fallback: 'style-loader' // Fallback for any CSS no extracted
				})
			}
		]
	},
	plugins: [
		new ExtractTextWebpackPlugin('styles.css'),
	],
	devServer: {
		contentBase: path.resolve(__dirname, './public'),
		historyApiFallback: true,
		inline: true,
		open: true
	},
	devtool: 'eval-source-map'
}

module.exports = config;