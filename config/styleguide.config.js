
module.exports = {
		ignore: [
			'**/*.test.{js,jsx,ts,tsx}'
		],

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