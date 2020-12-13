class Mangoe {
    constructor() {
      var options = {
          isStatic: true,
          restitution: 0,
          friction: 1
      }
      var x = random(1015, 1090);
      var y = random(55, 150);
      this.body = Bodies.rectangle(x,y,22,22,options);
      this.width = random(25, 35);
      this.height = random(25, 35);
      this.image = loadImage("Images-Folder/mango.png")
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