const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin');

let config = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './public'),
		filename: 'output.js'
	},
	resolve: {
		extensions: ['.js', '.json', '.scss', '.less', '.css', '.jpeg', 'jpg', '.gif', '.png', '.svg'],
		alias: {
			images: path.resolve(__dirname, 'src/assets/images'),
			stylesheets: path.resolve(__dirname, 'src/assets/stylesheets')
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/, // files ending with .js
				exclude: /node_modules/, // exclude the node_modules folder
				loader: 'babel-loader' // use the (babel-core) loader
			},
			{
				test: /\.scss$/, // files ending with .scss
				use: ['css-hot-loader'].concat(ExtractTextWebpackPlugin.extract({
					use: ['css-loader', 'sass-loader', 'postcss-loader'], // Use these loaders
					fallback: 'style-loader' // Fallback for any CSS no extracted
				}))
			},
			{
				test: /\.less$/, // files ending with .less
				use: ExtractTextWebpackPlugin.extract({
					use: ['css-loader', 'less-loader'], // Use these loaders
					fallback: 'style-loader' // Fallback for any CSS no extracted
				})
			},
			{
				test: /\.(png|jpg|jpeg|svg|gif)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						useRelativePath: true,
						outputPath: 'public/assets/'
					}
				}
				
			}
		]
	},
	plugins: [
		new ExtractTextWebpackPlugin('styles.css')
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

if (process.env.NODE_ENV === 'production') {
	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin(),
		new OptimizeCSSAssets()
	);
}