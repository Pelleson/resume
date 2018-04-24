const config = require('./webpack.dev');
const path = require("path")

module.exports = {
		ignore: [
			'**/*.test.{js,jsx,ts,tsx}',
			'**/components/molecules/Selectables/Wrapper/**',
			'**/components/content/SettingsContent/Layout/*.tsx',
			'**/components/organisms/MassRegistration/Header/*.tsx',
			'**/components/modal/ThemePreviewModal/*.tsx'
		],
		webpackConfig: config,
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
			},
			{
				name: "Modals",
				components: '../src/components/modal/**/[A-z]*.tsx'
			}
		]
	};