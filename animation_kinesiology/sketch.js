var x = 0;
var drw = false;
var y = 450;

function preload() {
  pic1 = loadImage("dl1.png");
  pic2 = loadImage("dl2.png");
  NFLbg = loadImage("NFLbg.png");
}

function setup() {
  createCanvas(800, 600);
  background(NFLbg); // background color
  image(pic1, x, 450, 100, 100);

 
}

function draw() {
  if(drw == true) {
    background(255); // one number 0-255 is dark to light
    x = x + 1;
    y = y - .7;
    
    if(x%12 >= 6) {
      background(NFLbg);
      image(pic1, x, y, 100, 100); 
    }
    else {
      background(NFLbg);
      image(pic2, x, y, 100, 100);
    }

}
}

function mousePressed() {
    drw = true;
}