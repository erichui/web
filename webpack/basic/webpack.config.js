let path = require('path');

module.exports = {
	entry: {
		app: './src/entry.js'
	},
	output: {
		path: path.join(__dirname,'dist'),
		filename: 'bundle.js'
	},
	module: {  // 每一个loader导出的是一个函数，使用兼容node的js编写
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					}
				]
			},
			{
				test: /\.less$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'less-loader'
					}
				]
			}
		]
	}
}