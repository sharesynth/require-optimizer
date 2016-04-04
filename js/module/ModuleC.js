define('moduleC', [],
	function () {
		'use strict';
		function ModuleC() {}
		ModuleC.prototype = {
		    constructor: ModuleC,
		    initVariables: function initVariables() {
		    	console.log('This is module Cantaloupe');
		    }
	    }
	    return ModuleC;
	}
);