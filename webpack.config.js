const path = require('path');

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
		extensions: ['*', '.js', '.jsx']
	},
	devServer: {
		port: 3000,
		// compress: true,
		// open: true,
		// historyApiFallback: true,
		proxy: {
			'/api': 'http://localhost:8080',
		},
	},
	// devtool: 'inline-source-map',
};

// //BackEnd Config
// const backConfig = {
// 	output: {
// 		path: path.resolve(__dirname, '../backend'),
// 		filename: 'test-server.js',
// 	},
// 	externals: [nodeExternals()],
// };

// Combined 'module.exports'
// module.exports = [frontConfig, backConfig];
