///////////////bullet///////////////////
class bullet extends yentity {
	constructor(x2, y2, g) {
		super(x2, y2, g);
		this.speed = 12.75;
		this.type = 'bullet';
		this.grafic_type = 'none';
		this.dir = 'up';
		this.team = 'player';
	} //end constructor

	update() {
		var t = this;
		super.update();
		t.move();
		t.hit_stuff();
	} //end update
	move() {
		var t = this;
		if (t.dir == 'up') {
			t.move_by(0, -t.speed);
		}
		if (t.dir == 'down') {
			t.move_by(0, t.speed);
		}
		if (t.x <= 0) {
			t.world.remove(t);
		}
	}
	hit_stuff() {
		var e = this.hit_test('enemy', 0, 0);
		var p = this.hit_test('player', 0, 0);
		if (e && this.team == 'player') {
			this.world.score += 10;
			this.world.remove(this);
			this.world.remove(e);
		}
		if (p && this.team == 'enemy') {
			this.world.change_world('game_over', true);
		}
	}
} //end class
///////////////end "+name+"///////////////////
