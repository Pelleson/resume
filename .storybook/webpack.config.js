// you can use this file to add your custom webpack plugins, loaders and anything you like.
const path = require("path");
module.exports = (baseConfig, env, config) => {
	config.module.rules = [
					{
						loader: ['file-loader'],
						test: /\.(?:png|jpg|svg|gif|eot|svg|ttf|woff(2)?)$/,
					},
					{
						test: /\.tsx?$/,
						loaders: ['babel-loader', 'ts-loader']
					}
		];
	config.resolve.extensions.push(".ts", ".tsx");
	config.resolve.alias = {
		'interfaces': path.resolve(__dirname, '../src/interfaces/'),
		'components': path.resolve(__dirname, '../src/components/'),
		'stores': path.resolve(__dirname, '../src/stores/'),
		'models': path.resolve(__dirname, '../src/models/')
	}
	return config;
};