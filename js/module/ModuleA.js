define('moduleA', [],
	function () {
		'use strict';
		function ModuleA() {}
		ModuleA.prototype = {
		    constructor: ModuleA,
		    initVariables: function initVariables() {
		    	console.log('This is module Apple');
		    }
	    }
	    return ModuleA;
	}
);