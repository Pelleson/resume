const config = require('./webpack.config.js');

module.exports = {
		propsParser: require('react-docgen-typescript').parse,
		webpackConfig: require('react-scripts-ts/config/webpack.config.dev.js'),
		ignore: [
			'**/*.test.{js,jsx,ts,tsx}'
		],
		serverPort: 8000,
		sections: [
			{
				name: "Atoms",
				components: '../src/components/atoms/**/[A-z]*.tsx'
			},
			{
				name: "Molecules",
				components: '../src/components/molecules/**/[A-z]*.tsx'
			},
			{
				name: "Organisms",
				components: '../src/components/organisms/**/[A-z]*.tsx'
			},
			{
				name: "Pages",
				components: '../src/components/pages/**/[A-z]*.tsx'
			}
		]

	};