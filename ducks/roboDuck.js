var util = require('util');
var BaseDuck = require('./baseDuck.js').BaseDuck;

var RoboDuck = function() {
	RoboDuck.super_.apply(this, arguments);
};

var type = "RoboDuck";
exports.duckType = type;
exports.create = function(name, details) {
	return new RoboDuck(type, name, details);
};

util.inherits(RoboDuck, BaseDuck);

RoboDuck.prototype.quack = function() {
	return "I WILL " + this.details.primeDirective + " YOU!!!";
}