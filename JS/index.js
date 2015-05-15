	var game;
	var bonusInterval;
	var button = document.getElementById("start");
	button.addEventListener("click", function () {
		button.style.visibility = "hidden";
	if (loadResources(sources) == true){
		game = new Game();
		setInterval(clockRun,1000);
		bonusInterval = setInterval(clocking,1000);		
		game.drawOnKeyDownPlayer1();
	}	
	
	},false);


