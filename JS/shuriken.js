var Shuriken = GameObject.extend({
	
	init: function(settings) {
		this._super(settings);
	},
	draw: function(src,animation,whichFighter){
		/*var move = this.move;
		if (move && !move.finished) {
			move.draw(context);
		} else {
			// todo:fix this shit!
			this._super.draw(context);
		}*/
		var x = new Move(src,animation,whichFighter);
		whichFighter.move = 1;
		
//		if(animation.name =='punch'){
//			whichFighter.punch = 1;
//		}
//		else if (animation.name == 'kickright'){
//			game.gameObjects.fighters[1].kick = 1;
//		}
//		else if (animation.name == 'kick'){
//			game.gameObjects.fighters[0].kick = 1;
//		}
//		var shurikenCoord = x.trackShuriken();
		function moveAnime(){	
			x.drawShurikenFlight();
			if(x.startShuriken < 0 
			|| x.startShuriken > 900 
			|| x.startShurikenLeft < 0 
			|| x.startShurikenLeft > 950 
			|| x.collision()[3] == true 
			|| x.collision()[4] == true ){
				whichFighter.shuriken = 0;
				clearInterval(interval);
				x.clearShuriken();
				

			}
		}


	//		whichFighter.startCoordinateX = x.distanceAddShuriken();

			var interval =  setInterval(moveAnime,42);	
		
	}
})