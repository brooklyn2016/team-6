// this is a comment

/*
all this stuff
      is also
          a
              comment
*/
var x_rain = 0;
var y_rain = 0;

var sprayrange = 800;

var drw = false;

function preload() {
  pic = loadImage("download.png");
}
function setup() {
  createCanvas(800, 600); // width and height in pixels
  background(128, 128, 128); // background color
  fill('green');
  rect(0,550,800,50);
  x = 0;
  fill('yellow')
  stroke('yellow')
  ellipse(50,50,100,100)
}

function draw() {
  
  var counter = 0;
  
  // fill up the whole screen every time:
  
  if(drw == true) {
  fill(255); // foreground color
  
  x = x + 2;
  y = 600 + (-2.5*x) + Math.pow(x,2)*.0038;

  background(128, 128, 128);
  
  fill('green');
  rect(0,550,800,50);
  
  image(pic, x, y, 50, 50);
  //ellipse( x, y  , 20, 20); // draw
  for(counter = 0;counter<300;counter = counter + 1)
  {   fill('blue'); // red and green and 0 for blue
      stroke('blue') // just blue
      x_rain = (random(-sprayrange, sprayrange)+random(-sprayrange, sprayrange)+random(-sprayrange, sprayrange)+random(-sprayrange, sprayrange)+random(-sprayrange, sprayrange));
      y_rain = (random(-sprayrange, sprayrange)+random(-sprayrange, sprayrange)+random(-sprayrange, sprayrange)+random(-sprayrange, sprayrange)+random(-sprayrange, sprayrange));
      ellipse(x_rain, y_rain, 5, 5); // square
  }
}
  fill('yellow')
  stroke('yellow')
  ellipse(50,50,100,100)
}

function mousePressed() {
  drw = true;
}

