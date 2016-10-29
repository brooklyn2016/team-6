var x = 0;
var drw = false;

function preload() {
  pic1 = loadImage("dl1.png");
  pic2 = loadImage("dl2.png");
}

function setup() {
  createCanvas(800, 600);
  background(173, 216, 230); // background color
  fill('green');
  rect(0,550,800,50);
  image(pic1, x, 450, 100, 100);
  fill('yellow')
  stroke('yellow')
  ellipse(50,50,100,100)
}

function draw() {
  if(drw == true) {
    background(255); // one number 0-255 is dark to light
    x = x + 1;
    if(x%12 >= 6) {
      background(173, 216, 230);
  
      fill('green');
      rect(0,550,800,50);
  
      image(pic1, x, 450, 100, 100); 
    }
    else {
      background(173, 216, 230);
  
      fill('green');
      rect(0,550,800,50);
  
      image(pic2, x, 450, 100, 100);
    }
  fill('yellow')
  stroke('yellow')
  ellipse(50,50,100,100)
}
}

function keyPressed() {
  if(keyCode == RIGHT_ARROW){
    drw = true;
  }
}