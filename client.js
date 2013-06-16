var sys = require("sys");
var DuckFactory  = require('./duckFactory.js').DuckFactory;

var duckFactory = new DuckFactory();
var stdin = process.openStdin();
var ducks = {};

stdin.addListener("data", function(input) {
	input = input.toString().trim();
	var words = input.split(" ");
	if (words.length > 1) {
		var command = words[0];
		var params = input.replace(command, "").trim();

		if (command == 'create') {
			var paramMap = JSON.parse(params);
			createDuck(paramMap.type, paramMap.name, paramMap.details);
		}
		else if (command == 'quack') {
			quackDuck(params);
		}
	}
});

function createDuck(type, name, details) {
	var duck = duckFactory.createDuck(type, name, details, true);
	if (duck) {
		console.log("> Created " + duck.name + " of type " + duck.type);
		ducks[duck.name] = duck;
	}
	else {
		console.log("> No class found with name " + type);
	}
}

function quackDuck(name) {
	var duck = ducks[name];
	if (duck) {
		console.log("> " + duck.name + " the " + duck.type + 
			" says '" + duck.quack() + "'");
	}
	else {
		console.log("> No duck found with name " + name);
	}
}