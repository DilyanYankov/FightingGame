/*function Pacman(property,shape,color){
	this.shape = shape;
	this.color = color;
	this.property = property;
}

function Car (model){
	this.model = model;
}

Car.prototype.testing = function() {
	alert('not my own property');
}

var car = new Car('bmw')
var pacman = new Pacman(car,'circle','yellow')


Object.prototype.clone = function clone(ownPropertiesOnly) {
	var cloning = {};
	if(ownPropertiesOnly){
		for (i in Object){
			if (Object.hasOwnProperty(i)){
				if(typeof Object[i] ==='object'){
					clone(Object[i],true);
				}
				cloning[i] = Object[i];
			}
		}
	}
	return cloning;
}*/
//Object.prototype.listing = function(Object){
//	for(i in Object){
//		console.log(i);
//	}
//}
/*
function Answer(value){
	this._val = value;
};

Answer.prototype.get = function fn1(){
	return this._val;
};


function FirmAnswer(value){
	Answer.call(this,value);
}
FirmAnswer.prototype = Object.create(Answer.prototype);
FirmAnswer.prototype.constructor = FirmAnswer;
FirmAnswer.prototype.get = function fn2(){
	return Answer.prototype.get.call(this)+'!??@!@?';s
}

var x = new FirmAnswer(14);
/*
function Person(name) {
	this.name = name;
	}
	Person.prototype.sayName= function() {
	return this.name;
	}
	
	function Officer(name, rank) {
	this.rank = rank;
	this.name = name;
	}
	
	Officer.prototype.sayName = function() {
		return this.rank + '' + Person.sayName();
	}
	
	var o = new Officer('Petrov', 'general')
	o.sayName();*/
/*function SuperType(name){
this.name = name;
this.colors = ['red','green','blue'];
}
SuperType.prototype.sayName = function(){
console.log(this.name);
};
function SubType(name, age){
//inherit properties
SuperType.call(this, name);
this.age = age;
}
	
	
SubType.prototype = Object.create(SuperType.prototype);
SubType.prototype.sayAge = function(){
console.log(this.age);
};
var instance1 = new SubType('nick', 29);
instance1.colors.push('black');
console.log(instance1.colors); //”red,blue,green,black”
instance1.sayName(); //”Nicholas”;
instance1.sayAge(); //29
var instance2 = new SubType('Greg', 27);
console.log(instance2.colors); //”red,blue,green”
instance2.sayName(); //”Greg”;
instance2.sayAge();
	*/

function drawcanvas1(){
	var c1 = document.getElementById('canvas1')
	var ctx1 = c1.getContext('2d');
	ctx1.fillStyle = 'green';
	ctx1.fillRect(20,20,200,200);
}

function drawcanvas2(){
	var c2 = document.getElementById('canvas2')
	var ctx2 = c2.getContext('2d');
	ctx2.fillStyle = 'red';
	ctx2.fillRect(40,40,200,200);
}


function drawcanvas3(){
	var c2 = document.getElementById('canvas2')
	var ctx2 = c2.getContext('2d');
	ctx2.fillStyle = 'red';
	ctx2.clearRect(40,40,200,200);
}

