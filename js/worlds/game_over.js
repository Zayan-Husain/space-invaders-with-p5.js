///////////////game_over world///////////////////
class game_over extends world {
	constructor(name2) {
		super(name2);
	}

	init() {}
	render() {
		super.render();
		fill(255);
		textAlign(CENTER);
		textSize(50);
		text('You lose...', 640 / 2, 100);
	}
} //end world class
///////////////end game_over world///////////////////
