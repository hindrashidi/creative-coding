let step = 4; // bigger = chunkier pixels (try 4, 8, 12)

function setup() {
  createCanvas(windowWidth,windowHeight);
  pixelDensity(1);
}

function draw() {
  loadPixels();

  //  added: center follows mouse if over canvas
  let cx = mouseX;      // original: width / 2
  let cy = mouseY;      // original: height / 2

  // keep original logic, but tie swirl to frameCount + mouse position
  for (let y = 0; y < height; y += step) {
    for (let x = 0; x < width; x += step) {

      let dx = x - cx;
      let dy = y - cy;

      let d = sqrt(dx * dx + dy * dy);
      let a = atan2(dy, dx);

      //  added: make the swirl speed respond to mouse X
      let mouseInfluence = mouseX * 0.001; // 0.001 is a small scale factor

      // swirl math
      let swirl = a + d * 0.05 + frameCount * 0.05 + mouseInfluence; // changed here

      // base value + noise so pixels feel "textured"
      let v = 128 + 127 * sin(swirl);
      v += random(-30, 30);
      v = constrain(v, 0, 255);

      // fill a step x step block
      for (let yy = 0; yy < step; yy++) {
        for (let xx = 0; xx < step; xx++) {
          let px = x + xx;
          let py = y + yy;

          if (px < width && py < height) {
            let i = (px + py * width) * 4;

            // added: shift colors based on mouse Y (top = greener, bottom = bluer)
            let r = 255;
            let g = v;
            let b = map(mouseY, 0, height, 0, 255); // top 0, bottom 255

            pixels[i]     = r;   // R
            pixels[i + 1] = g;   // G
            pixels[i + 2] = b;   // B
            pixels[i + 3] = 255; // A
          }
        }
      }
    }
  }

  updatePixels();
}