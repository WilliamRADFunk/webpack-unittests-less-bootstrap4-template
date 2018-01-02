const webpack = require('webpack');

let config = {
	entry: './src/index.js',
	output: {
		filename: 'dist/output.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/, // files ending with .js
				exclude: /node_modules/, // exclude the node_modules folder
				loader: "babel-loader" // use the (babel-core) loader
			}
		]
	}
}

module.exports = config;