///////////////enemy///////////////////
class enemy extends yentity {
	constructor(x2, y2, g) {
		super(x2, y2, g);
		this.speed = 13;
		this.type = 'enemy';
		this.dir = 1;
		this.grafic_type = 'none';
		this.shootTimer = new ytimer(this.rand(200) + 60);
	} //end constructor

	update() {
		var t = this;
		super.update();
		t.move();
		t.losingCondition();
		t.shoot();
	} //end update

	move() {
		//limit delta time
		if (deltaTime / 50 > 0.5) {
			deltaTime = 50 / 2;
		}
		var t = this;
		//if hit left or right edge
		if (t.x < 0 || t.x > 640) {
			t.dir *= -1; //change dir
			t.move_by(0, 15); //go down a little
		}
		//move by speed and dir
		t.move_by(t.speed * t.dir, 0);

		//bounds
		if (t.x < 0) {
			t.sx(10);
		}
		if (t.x > 640) {
			t.sx(630);
		}
	} //end move
	shoot() {
		var t = this;
		if (t.shootTimer.finished()) {
			var b = new bullet(t.x, t.y + 20);
			b.team = 'enemy';
			b.dir = 'down';
			t.world.add(b);
		}
	} //end shoot
	losingCondition() {
		if (this.y > 480) {
			this.world.change_world('game_over', true);
		}
	}
} //end class
///////////////end "+name+"///////////////////
