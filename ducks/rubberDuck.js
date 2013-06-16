var util = require('util');
var BaseDuck = require('./baseDuck.js').BaseDuck;

var RubberDuck = function() {
	RubberDuck.super_.apply(this, arguments);
};

util.inherits(RubberDuck, BaseDuck);

var type = "RubberDuck";
exports.duckType = type;
exports.create = function(name, details) {
	return new RubberDuck(type, name, details);
};

RubberDuck.prototype.quack = function() {
	return "squeak in the " + this.details.speciality;
}