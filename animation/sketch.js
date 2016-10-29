// this is a comment

/*
all this stuff
      is also
          a
              comment
*/
function preload() {
  pic = loadImage("download.png");
}
function setup() {
  createCanvas(800, 600); // width and height in pixels
  background(173, 216, 230); // background color
  fill('green');
  rect(0,550,800,50);
  x = 0;
}

function draw() {
  fill(255); // foreground color
  
  x = x + 2;
  y = 600 + (-3*x) + Math.pow(x,2)*.0038;

  background(173, 216, 230);
  
  fill('green');
  rect(0,550,800,50);
  
  image(pic, x, y, 50, 50);
  //ellipse( x, y  , 20, 20); // draw

}

