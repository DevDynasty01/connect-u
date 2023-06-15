const path = require('path');
const Dotenv = require('dotenv-webpack');

// Config
module.exports = {
	entry: ['./src/index.js'],

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.(js|jxs)$/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
	devServer: {
		port: 3000,
		proxy: {
			'/api': 'http://localhost:8080',
		},
	},
	plugins: [new Dotenv()],
};
