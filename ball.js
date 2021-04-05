class Ball{
    constructor(x,y,d){
        var ball_options ={
            restitution: 1.0
        }
    
        this.body= Bodies.circle(x,y,d, ball_options);
      this.d= d
        World.add(world,this.body);

    }
    display(){
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y,this.d, this.d);

    }

}