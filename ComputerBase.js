class ComputerBase {
    constructor(x, y, width, height) {
      var options = {
        isStatic: true
      };
      this.image = loadImage("assets/base2.png");
      this.width = width;
      this.height = height;
      this.image.scale=0.1;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        
        push();
        translate(pos.x, pos.y);
        
        imageMode(CENTER);
        
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
    }
    