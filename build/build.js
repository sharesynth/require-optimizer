({
	baseUrl: '../js',
	mainConfigFile: '../js/main.js',
	name: 'main',
	out: '../js/deploy/scripts.min.js',
	preserveLicenseComments: false,
	paths: {
		requireLib: 'contrib/require.min'
	},
	include: 'requireLib'
});