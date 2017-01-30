function setup() {
  createCanvas(320, 240);
  // determine random start points on load
  x = width/2 + random(width/4);
  y = height/2 + random(height/4);
  setFrameRate(24);
  angleMode(DEGREES);
}

function draw() {
  // determine change of coordinates
  r = random(width/4);
  phi = random(360);
  x = x + cos(phi);
  y = y + sin(phi);
  background(128);
  strokeWeight(12);
  point(x,y);
}
