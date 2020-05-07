///////////////game_world world///////////////////
class game_world extends world {
	constructor(name2) {
		super(name2);
		var t = this;
		t.score = 0;
	}

	init() {
		var t = this;
		//reset all
		t.entitys = [];
		t.score = 0;
		var yplayer = new player(200, 450, '');
		yplayer.grafic_type = 'none';
		yplayer.debug = true;

		t.add(yplayer);
		this.create_enemy_grid();
	} //end init
	create_enemy_grid() {
		var t = this;
		var w = 50;
		var h = 50;
		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 4; j++) {
				t.add(new enemy(j * w, i * h));
			}
		}
	} //end create enemy grid
	render() {
		super.render();
		var t = this;
		//////////////////////////score text/////////////////////////
		textAlign(CENTER);
		fill(255);
		text('Score: ' + t.score, 640 / 2, 22);
		//////////////////////end score text/////////////////////////
	}
} //end world class
///////////////end game_world world///////////////////
