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
		//////////////////////////score text/////////////////////////

		//////////////////////end score text/////////////////////////
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
	} //end move
} //end class
///////////////end "+name+"///////////////////
