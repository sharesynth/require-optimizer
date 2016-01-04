/*
 * App
*/
define('app', [
		'moduleA',
		'moduleB',
		'moduleC'
	],
	function (ModuleA, ModuleB, ModuleC){
		'use strict';
		function App() {
			this.init();
		}
		App.prototype = {
		    constructor: App,
		    init: function init() {
		    	console.log('>> This is the application!');
		    	var modA = new ModuleA();
				modA.initVariables();
				var modB = new ModuleB();
				modB.initVariables();
				var modC = new ModuleC();
				modC.initVariables();
		    }
	    }
	    return App;
	}
);