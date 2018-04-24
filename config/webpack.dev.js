const path = require('path');
const paths = require('./paths');
const webpack = require('webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const publicPath = '/javascript/';
const publicUrl = "";

module.exports = {
	devtool: 'eval-source-map',
	entry: [
		/*require.resolve("./polyfill"),*/ require.resolve("react-dev-utils/webpackHotDevClient"), paths.appIndex
	],
	output: {
		libraryTarget: 'var',
		path: paths.appBuild,
		publicPath: publicPath
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new CaseSensitivePathsPlugin
	],
	resolve: {
		extensions: ['.js', '.ts', '.tsx', '.css','.scss'],
		plugins: [
			new TsconfigPathsPlugin({ configFile: path.resolve(__dirname, "../tsconfig.json")})
		]
	},
	module: {
		strictExportPresence: true,
		rules: [
			{
				oneOf: [
					{
						loader: require.resolve('file-loader'),
						test: /\.(?:png|jpg|svg|gif|eot|svg|ttf|woff(2)?)$/,
					},
					{
						test: /\.tsx?$/,
						loaders: ['babel-loader', 'ts-loader'],
						include: paths.appDir
					}
				]
			}
		],
	},
	node: {
		dgram: 'empty',
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
		child_process: 'empty',
	},
	performance: {
		hints: false,
	}

}