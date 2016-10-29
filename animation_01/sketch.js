var x = 0;
var drw = false;

function preload() {
  pic = loadImage("download.png");
}

function setup() {
  createCanvas(800, 600);
  background(173, 216, 230); // background color
  fill('green');
  rect(0,550,800,50);
  image(pic, x, 500, 50, 50);
}

function draw() {
  if(drw == true) {
  background(255); // one number 0-255 is dark to light
  x = x + 3;
  background(173, 216, 230);
  
  fill('green');
  rect(0,550,800,50);
  
  image(pic, x, 500, 50, 50); 
}
}

function mousePressed() {
  drw = true;
}