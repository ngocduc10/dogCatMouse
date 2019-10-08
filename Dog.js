var chalk = require('chalk')
function Dog(){
	this.stomach = [];
}

Dog.prototype.eat = function(eat){
	this.stomach.push(cat);
}

Dog.prototype.sayHi = function(){
	console.log('hi! I am Dog. My name is ' + chalk.blue(this.name));
}

module.exports = Dog;