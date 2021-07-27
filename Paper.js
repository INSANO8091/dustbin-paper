class Paper{
    constructor (x,y,r){
   var options = {
       density: 1.2,
       isStatic: false,
       restitution:0.5
   }
   this.x=x;
		this.y=y;
		this.r=r;
        this.image = loadImage("paper.png");
		this.body=Bodies.circle(this.x, this.y, this.r, options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var PaperPos=this.body.position;		

			push()
			translate(PaperPos.x, PaperPos.y);
			imageMode(CENTER);
			//strokeWeight(4);
			fill("grey");
			image(this.image,0,0,this.r,this.r);
			pop()
			
	}

}
    


