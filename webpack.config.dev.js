var webpack = require('webpack');

module.exports = {
	devtool: 'inline-source-map',
	entry: [
		'./src/client/entry'
	],
	output: {
		path: __dirname + '/public/js/',
		filename: 'app.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
	],
	resolve: {
		extensions: ['', '.js']
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loaders: ['react-hot', 'babel-loader'],
				exclude: /node_modules/
			}
		]
	}
}
