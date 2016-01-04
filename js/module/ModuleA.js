define('moduleA', [],
	function () {
		'use strict';
		function ModuleA() {}
		ModuleA.prototype = {
		    constructor: ModuleA,
		    initVariables: function initVariables() {
		    	console.log('This is module A');
		    }
	    }
	    return ModuleA;
	}
);