let t = 0;
let sizes = [];  

function setup() {
  createCanvas(400, 400);
  noFill();
  strokeWeight(3);

  // make ring with amount of circles
  for (let i = 0; i < 6; i++) {
    sizes.push(i * 15);
  }
}

function draw() {
  background(10);

  let cx = width / 2;
  let cy = height / 2;

  let speed = map(mouseX, 0, width, 0.02, 0.09);

  for (let i = 0; i < sizes.length; i++) {
    let breathe = sin(t - i * 0.35);     // phase offset
    let r = 100 + breathe * 40 + sizes[i];

    stroke(255, 210 - i * 25);
    circle(cx, cy, r * 2);
  }

  t += speed;
}

} 
