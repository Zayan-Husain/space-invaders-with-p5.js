///////////////player///////////////////
class player extends yentity {
	constructor(x2, y2, g) {
		super(x2, y2, g);
		this.speed = 7;
		this.type = 'player';
		this.shootTimer = new ytimer(10);
	} //end constructor
	update() {
		var t = this;
		super.update();
		t.move();
		t.shoot();
		t.victoryCondition();
	} //end update
	move() {
		var t = this;
		if (keyDown('a')) {
			t.move_by(-t.speed, 0);
		}
		if (keyDown('d')) {
			t.move_by(t.speed, 0);
		}
	} //end move
	shoot() {
		var t = this;
		if (keyDown('space') && t.shootTimer.finished()) {
			t.world.add(new bullet(t.x, t.y - 20));
		}
		var d = document;
		var cheat = d.querySelector('.cheat');
		cheat.addEventListener('click', () => {
			t.shootTimer = new ytimer(1);
		});
	} //end shoot
	victoryCondition() {
		var enemies = this.get_by_type('enemy');
		if (enemies.length == 0) {
			this.world.change_world('victory_world', true);
		}
	}
} //end class
///////////////end "+name+"///////////////////
