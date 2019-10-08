function Mouse(name){
	this.name = name
}

Mouse.prototypr.die = function(){
	this.dead = true;
}
module.export = Mouse;
