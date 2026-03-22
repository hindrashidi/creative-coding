//Multiple Balls

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.xSpeed = random(-3, 3);
    this.ySpeed = random(-3, 3);
    this.diameter = 40;
  }
  
  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  } 
  bounce() {
    if (this.x < 20 || this.x > width-20) {
      this.xSpeed *= -1;
    }
    if (this.y < 20 || this.y > height-20) {
      this.ySpeed *= -1;
    }
  }
  
  display() {
    fill(100, 150, 255);
    circle(this.x, this.y, this.diameter);
  }
} 
let balls = [];
function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 10; i++) {
    balls[i] = new Ball(random(width), 
                        random(height));
  }
}
function draw() {
  background(220);
  for (let ball of balls) {
    ball.move();
    ball.bounce();
    ball.display();
  }
} 