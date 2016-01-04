define('moduleB', [],
	function () {
		'use strict';
		function ModuleB() {}
		ModuleB.prototype = {
		    constructor: ModuleB,
		    initVariables: function initVariables() {
		    	console.log('This is module B');
		    }
	    }
	    return ModuleB;
	}
);