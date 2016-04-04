# require-optimizer

Template files for starting a require optimizer project. Install require optimizer globally on your machine before using these files.

Example build script build.js:

```javascript
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
```

CD into the build folder and run the following terminal command:

```
r.js -o build.js
```

This build script outputs 'scripts.min.js' inside '../js/deploy/'.