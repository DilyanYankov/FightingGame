Settings = {
		gameInterval: 80,
		shuriken: {
//			startShuriken: this.fighters.second.startCoordinateX
		},
		fighters: {
			first: {
				idle: sources.Idle,
				dead: sources.isDead,
				canvas: document.getElementById('canvas1'),
				startCoordinateX: 200,
				startCoordinateY: 455,
				width: 700,
				height: 180,
				move: 0,
				punch: 0,
				kick: 0,
				punchDmg: 10,
				kickDmg: 15,
				shurikenDmg: 10,
				hpBar : new HpBar (1,'left'),
				nrgBar : new NrgBar (1,'left'),
				defeated: 0,
				orientation : 'left',
				score: new Score(1),
				end: new IsDead(),
				strike:sources.Striked,
				strikeM:sources.StrikedM
				
			},
			second: {
				idle : sources.Idle2,
				dead: sources.isDead2,
				canvas: document.getElementById('canvas2'),
				startCoordinateX: 600,
				startCoordinateY: 455,
				width: 100,
				height: 180,
				move: 0,
				punch: 0,
				kick: 0,
				punchDmg: 10,
				kickDmg: 15,
				shurikenDmg: 10,
				hpBar : new HpBar (2,'right'),
				nrgBar : new NrgBar (2,'right'),
				defeated: 0,
				orientation: 'right',
				score: new Score(2),
				end: new IsDead(),
				strike:sources.Striked2,
				strikeM:sources.Striked2M
			}
		}
		
}