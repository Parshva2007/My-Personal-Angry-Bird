class Bird {
  constructor(x, y ){
    var options = {
        'restitution':0.100,
        'friction':0.3,
        'density':8.0
    }
    this.birdimage = loadImage("sprites/bird.png");
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.width = 50;
    this.height = 50;
    
    World.add(world, this.body);
  }
  display(){
    
    var pos =this.body.position;
    //pos.x=mouseX
   // pos.y=mouseY
    var angle = this.body.angle;
    
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.birdimage,0,0,50,50)
    
    pop();
  }
};

