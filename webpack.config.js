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
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i, // files ending with images
				loaders: ['file-loader?context=src/assets/images/&name=images/[path][name].[ext]', {
					loader: 'image-webpack-loader',
					query: {
						mozjpeg: {
							progressive: true
						},
						gifsicle: {
							interlaced: false
						},
						optipng: {
							optimizationLevel: 4
						},
						pngquant: {
							quality: '75-90',
							speed: 3
						}
					}
				}],
				exclude: /node_modules/, // exclude the node_modules folder
				include: __dirname
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