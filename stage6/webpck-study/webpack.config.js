var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: path.join( __dirname, './src/index.js' ),
	output: {
		path: path.join( __dirname, './dist' ),
		filename: 'main.js'
	},
	plugins: [
		new htmlWebpackPlugin({
			template: path.join( __dirname, './src/index.html' ),
			filename: 'index.html'
		})
	],
	module: {
		rules: [
			{ test: /\.css$/, use: ['style-loader', 'css-loader'] },
			{ test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
			{ test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
			{ test: /\.(jpeg|jpg|png|gif|bmp)$/, use: 'url-loader'},
			{ test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'},
			{ test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
		]
	}
}