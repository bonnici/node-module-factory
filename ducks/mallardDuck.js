var util = require('util');
var BaseDuck = require('./baseDuck.js').BaseDuck;

var MallardDuck = function() {
	MallardDuck.super_.apply(this, arguments);
};

util.inherits(MallardDuck, BaseDuck);

var type = "MallardDuck";
exports.duckType = type;
exports.create = function(name, details) {
	return new MallardDuck(type, name, details);
};

MallardDuck.prototype.quack = function() {
	return this.details.attitude + " quack";
}