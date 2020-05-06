class yentity
{
  constructor(x2,y2,g) 
  {
    this.x = x2;
	this.y  = y2;
	this.rot  = 0;//rotation
    this.world;
    this.camx = 0;
	this.camy  = 0;
	this.w  = 20;//width height
	this.h  = 20;
	this.origen  = "center";//hitbox width
	this.hitbw  = 20;//hitbox width
	this.hitbh  = 20;
	this.speed = 1;
	this.alpha = 255;
	this.grafic = g;
	this.img;
	this.sprite;
	this.grafic_type = "img";
	this.debug;

  }//end constructor
  
  init()
  {
	var t = this;
	if(t.grafic_type =="img")
	{
		t.img = t.grafic;
	}
	  
  }//end init
  
  move_by(sx,sy)
  {
	var t = this;
	t.x += sx*(deltaTime/ 50);
	t.y += sy*(deltaTime/ 50);
	
	
  }//end move_by
  
  hit_test(e,x2,y2)
  {
	var t = this
	var hw = t.hitbw;//hitbox width
	var hh = t.hitbh;//hitbox height
	var ehw = e.hitbw;
	var ehh = e.hitbh;
	if(t.origen=="center")
	{
		x2 -=t.w/2;//devide by half width and height becuse imageMode(CENTER);
		y2 -=t.h/2;//basically set the origen point to center
		var ex = e.x - (e.w/2);
		var ey = e.y - (e.h/2);
	}
	else
	{
		var ex = e.x;
		var ey = e.y;
	}
	
	return (x2 < ex + ehw &&
		   x2 + hw > ex &&
		   y2 < ey + ehh &&
		   y2 + hh > ey);
	
  }//end hit_test
  

  show_hitbox()
  {
	var t = this;
	if(!t.debug){return;}
	noFill();
	stroke(255, 0, 0);
	if(t.origen=="center")
	{
		rect(t.x-(t.w/2), t.y-(t.h/2), t.hitbw, t.hitbh);
	}else
	{
		rect(t.x, t.y, t.hitbw, t.hitbh);	
	}
	stroke(0, 255, 0);
	rect(t.x, t.y, 10, 10);//show origen point
	
  }//end show_hitbox

  update()
  {  
	var t = this;
	//t.move_by(1,0)

  }//end update
  
  render()
  {
	var t = this;
	if(t.grafic_type =="img")
	{
		push();
		translate(t.x-t.camx, t.y-t.camy);
		tint(255, t.alpha);
		rotate(t.rot);
		if(t.origen=="center")
		{
			imageMode(CENTER);
		}
		image(t.img, 0, 0,t.w,t.h);

		pop();
	}
	
	t.show_hitbox();
	
  }//end render
  
}//end yentity