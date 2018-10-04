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
  //config.plugins.push(new TSDocgenPlugin()); // optional
  config.resolve.extensions.push(".ts", ".tsx");
  config.resolve.alias = {
    'interfaces': path.resolve(__dirname, '../src/interfaces/'),
    'components': path.resolve(__dirname, '../src/components/'),
    'containers': path.resolve(__dirname, '../src/containers/'),
    'stores': path.resolve(__dirname, '../src/stores/'),
    'controllers': path.resolve(__dirname, '../src/controllers/'),
    'models': path.resolve(__dirname, '../src/models/'),
    'content': path.resolve(__dirname, '../src/components/content/'),
    'utils': path.resolve(__dirname, '../src/utils/'),
    'validation': path.resolve(__dirname, '../src/utils/validation.ts'),
    'hoc': path.resolve(__dirname, '../src/hoc/'),
    'services': path.resolve(__dirname, '../src/services/'),
  }
  return config;
};