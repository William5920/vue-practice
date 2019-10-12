const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: path.join( __dirname, './src/index.js'),
	output: {
		path: path.join( __dirname, './dist'),
		filename: 'bundle.js'
	},
	plugins: [
		new htmlWebpackPlugin({ //创建一个在内存中生成 html 页面的插件
			template: path.join( __dirname, './src/index.html'),
			filename: 'index.html'
		})
	],
	module: {
		rules: [
			{ test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
			{ test: /\.less$/, use: [ 'style-loader', 'css-loader', 'less-loader' ] },
			{ test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader' ] }
		]
	}
}