var fallingObjects = Class.extend({
		init: function() {
			this.c = document.getElementById('canvas0');
			this.ctx = this.c.getContext('2d');
			this.arrayOfObjects = [];
			this.xPos = Math.floor((Math.random() * (this.c.width - 50)) + 1);
			this.stop = false;
			
			this.yPos = 0;
			this.distance = 40;
			this.arrayOfObjects[0] = new Image();
			this.arrayOfObjects[0].src = 'images/heart.png';	
			this.arrayOfObjects[0].onload = function() {
				
			}
			this.arrayOfObjects[1] = new Image();
			this.arrayOfObjects[1].src = 'images/clover.png';
			this.arrayOfObjects[1].onload = function() {
				
			}				
			
			this.randomIndex = Math.floor(Math.random() * 2);
		},
		draw : function() {
			
			this.currIndex = this.randomIndex;
			this.ctx.drawImage(this.arrayOfObjects[this.randomIndex], this.xPos, this.yPos, 40, 40);
			this.ctx.clearRect(this.xPos, this.yPos - this.distance, 45, 40);	
			this.yPos += this.distance;
			if (this.yPos > 590) {	
				this.stop=true;					
			}
		},
})

	 
	
var clock = {
	seconds: '99',
	time: function(){
		var x = document.getElementById('container');
		while (x.firstChild) {
			x.removeChild(x.firstChild);
		}
		var timer = document.createElement('p');
		timer.style.color = 'red';
		timer.style.fontSize = '30px'
		timer.style.textAlign = 'center';	
		timer.style.lineHeight = '2px';
		timer.innerHTML = this.seconds;
		x.appendChild(timer);
		
	},
	counter: function(){
		this.seconds--;
		this.time();
	}
};

function clockRun() {
	if(clock.seconds <1){
		return;
	}
	clock.counter();
}

var bonusFigure = new fallingObjects();
function clocking(){
	var x = 0;	
	if(clock.seconds == 95 || clock.seconds ==80 || clock.seconds == 70  ||clock.seconds == 50 || clock.seconds ==30 || clock.seconds == 10 ){		
		var interval = setInterval(function(){
			bonusFigure.draw();			
			x++;
			if(x>14){
				clearInterval(interval);				 
			}
		},50);
	if (clock.seconds == 0) {
		
	}	
	}
}





