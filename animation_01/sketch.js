var x = 0;
var drw = false;

function setup() {
  createCanvas(800, 600);
  fill('red');
  rect(0, 550, 50, 50);
}

function draw() {
  if(drw == true) {
  background(255); // one number 0-255 is dark to light
  x = x + 3;
  fill('red');
  rect(x, 550, 50, 50); 
}
}

function mousePressed() {
  drw = true;
}