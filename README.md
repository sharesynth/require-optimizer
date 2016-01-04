# require-optimizer

Template files for starting a require optimizer project. Install require optimizer globally on your machine before using these files.

Example build script build.js:

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

Example terminal command:

r.js -o build.js

Outputs 'scripts.min.js' to '../js/deploy/'.