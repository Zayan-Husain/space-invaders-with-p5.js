///////////////victory world world///////////////////
class victory_world extends world {
	constructor(name2) {
		super(name2);
	}
	init() {
		var t = this;
		var game_world = yeng.get_world('game_world');
		t.score = game_world.score;
	}
	render() {
		super.render();
		fill(255);
		textAlign(CENTER);
		textSize(50);
		text('You win! ', 640 / 2, 100);
		textSize(24);
		text('your score is: ' + this.score, 640 / 2, 150);
	}
} //end world class
///////////////end victory world world///////////////////
