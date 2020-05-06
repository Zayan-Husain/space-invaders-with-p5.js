///////////////game_world world///////////////////
class game_world extends world {
	constructor(name2) {
		super(name2);
	}

	init() {
		var t = this;
		//reset all
		t.entitys = [];

		var yplayer = new player(200, 450, '');
		yplayer.grafic_type = 'none';
		yplayer.debug = true;

		t.add(yplayer);
		this.create_enemy_grid();
		//t.add(new enemy(20, 50));
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
	}
} //end world class
///////////////end game_world world///////////////////
