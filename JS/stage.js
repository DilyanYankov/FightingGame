var Stage = Class.extend({
	init: function () {
		var background = this.getRandomBackground();
		this.changeGameBackground(background);
  	},
  	
  	getRandomBackground: function () {
  		var backgrounds = this.backgrounds;
  		var randomIndex = Math.floor(Math.random() * backgrounds.length);
  		
  		return backgrounds[randomIndex];
  	},
  	
  	changeGameBackground: function (background) {
  		var backgroundElement = document.getElementById("background");
  		backgroundElement.style.backgroundImage = "url('images/backgrounds/" + background + ".gif')";
  		backgroundElement.style.backgroundRepeat = "no-repeat";
  		backgroundElement.style.backgroundSize= '900px 600px';
  	},
  	
  	backgrounds: [
  	     "moonCastle",
  	     "desertWinds",
  	     "initialBackground"
    ]
});