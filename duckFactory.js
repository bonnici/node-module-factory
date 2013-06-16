var fs = require('fs');

var DuckFactory = function() {
	this.duckTypes = {};
};

// Go through all files in the ducks directory and register the 
// create function to the duckType
DuckFactory.prototype.loadModules = function() {
	var files = fs.readdirSync('./ducks/');
	this.duckTypes = {};

	for (var i=0; i < files.length; i++) {
		var moduleName = './ducks/' + files[i];

		// Clear the module cache so module updates can be loaded
		delete require.cache[require.resolve(moduleName)];
		var module = require(moduleName);

		if (module.duckType && module.create) {
			this.duckTypes[module.duckType] = module.create;
		}
	}
}

// Create a duck with the specified type
DuckFactory.prototype.createDuck = function(type, name, details, refresh) {
	if (refresh) {
		this.loadModules();
	}

	if (type in this.duckTypes) {
		return this.duckTypes[type](name, details);
	}
	return null;
}

exports.DuckFactory = DuckFactory;