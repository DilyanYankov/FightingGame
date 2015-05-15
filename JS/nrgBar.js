
var NrgBar = Class.extend ({
	init: function(idNumber,floatStyle){
		this.idNumber = idNumber;
		this.floatStyle = floatStyle;
		this.nrgBar = document.getElementById('nrg' + idNumber);
		this.nrgLost = document.getElementById('nrgLost' + idNumber);
		this.nrgLeft = document.getElementById('nrgLeft' + idNumber);
		this.hasNrg = true;
	},	
	draw: function (nrg,bonus){
			this.damage = (nrg*2.5) + parseInt(this.nrgLost.style.width);			
			this.bonus = bonus;			
			
				if (this.bonus === false) {	
					if(this.hasNrg){
						var dmg = document.createElement('div');
						dmg.style.width = (nrg*2.5)+'px';
						dmg.style.textAlign = 'center';
						dmg.style.lineHeight = '15px';
						dmg.style.height = '15px';
						dmg.style.float= this.floatStyle;					
						dmg.innerHTML = '<div id= "nrg-minus' + this.idNumber+ '" style="opacity:0.5; position: absolute; top :20; left:40; z-index:10; width:'+(nrg*2.5)+'px; height:15px; background-color:rgb(224, 18, 18);"></div>';
						dmg.innerHTML += '<div id= "numbers' + this.idNumber+ '" float:right; z-index:10; width:'+(nrg*2.5)+'px; height:15px;">'+nrg+ '</div>';						
						this.nrgLost.appendChild(dmg);
						if(this.nrgLost.childNodes.length>1){
							this.nrgLost.childNodes[0].remove();
						}				
										  
						var interval = setTimeout(function () {					 
							document.getElementById('nrg-minus'+ idNumbr()).style.opacity='0';
							document.getElementById('numbers' + idNumbr()).style.transform = 'translate(100px,-100px)';
							document.getElementById('numbers'+ idNumbr()).style.transition = 'all 1s';			
						},800)
					}	
					this.nrgLost.style.width = this.damage +'px';				
					this.nrgLeft.style.width = parseInt(this.nrgBar.style.width)- this.damage +'px';
					if(this.damage >= parseInt(this.nrgBar.style.width) && this.bonus === false){
						this.nrgLost.style.width = parseInt(this.nrgBar.style.width) +'px';
						this.nrgLeft.style.width = 0 +"px";
						this.hasNrg = false;
						
					}
					var idNumb = this.idNumber;
					  function idNumbr() {					  
						return idNumb;
					}	
					
				
			}else{
				if(this.nrgLost.childNodes.length>0){
					this.nrgLost.childNodes[0].remove();
				}	
				this.nrgLost.style.width =parseInt(this.nrgLost.style.width) - (nrg*2.5) +'px';				
				this.nrgLeft.style.width = parseInt(this.nrgLeft.style.width) + (nrg*2.5) +'px';
				if(this.bonus ===true && (parseInt(this.nrgLeft.style.width) + (nrg*2.5))> 250){				
					this.nrgLost.style.width = 0;
					this.nrgLeft.style.width = 250 + 'px';
				}
			}
		}	
	
	
})
//init: function(idNumber - this is 1 or 2 for each nrgBar,floatStyle - this is 'right for 2nd or left for 1st nrgBars' )
var c = new NrgBar(2,'right')
// nrg- the nrg from each hit or each bonus; bonus- false or true for hit or bonus taken
var setupnrg = function(nrg, bonus){			
			c.draw(nrg,bonus);			
	}
