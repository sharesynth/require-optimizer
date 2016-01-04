require.config({
	baseUrl: 'js/',
	paths: {
		jquery: 'contrib/jquery-2.1.4.min',
		lodash: 'contrib/lodash.min',
		moduleA: 'module/ModuleA',
		moduleB: 'module/ModuleB',
		moduleC: 'module/ModuleC'
	}
});
require([
		'jquery',
		'lodash',
		'app'
	],
	function ($, _, App) {
		var app = new App();
	}
);