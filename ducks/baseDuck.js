var BaseDuck = function(type, name, details) {
	this.type = type;
	this.name = name;
	this.details = details || {};
};

exports.BaseDuck = BaseDuck;
var type = "BaseDuck";
exports.duckType = type;
exports.create = function(name, details) {
	return new BaseDuck(type, name, details);
};

BaseDuck.prototype.quack = function() {
	throw "abstract function";
}