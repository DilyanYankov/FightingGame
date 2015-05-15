var Score = Class.extend({
	init: function(idNumber){
		this.idNumber = idNumber;		
		this.scoreDiv = document.getElementById('score' + idNumber);			
		this.score = document.getElementById('p' + idNumber);
	},
	setup: function (points){		
		this.score.style.color = 'red';
		this.score.style.fontSize = '30px';
		this.score.style.textAlign = 'center';	
		this.score.style.lineHeight = '2px';
		this.score.innerHTML = parseInt(this.score.innerHTML) + points;
		
	}
})