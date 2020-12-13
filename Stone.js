class Stone {
    constructor() {
      var options = {
          isStatic: false,
          restitution: 0,
          friction: 1,
          density : 1.2
      }
      this.body = Bodies.rectangle(x,y,35, 35,options);
      this.width = 35;
      this.height = 35;
      this.image = loadImage("Images-Folder/stone.png")
      World.add(world, this.body);
    }
    display(){
      push();
      translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  };