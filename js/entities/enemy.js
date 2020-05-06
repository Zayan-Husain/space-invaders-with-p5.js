///////////////enemy///////////////////
class enemy extends yentity {
	constructor(x2, y2, g) {
		super(x2, y2, g);
		this.speed = 13;
		this.type = 'enemy';
		this.dir = 1;
		this.grafic_type = 'none';
	} //end constructor

	update() {
		var t = this;
		super.update();
		t.move();
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
} //end class
///////////////end "+name+"///////////////////
