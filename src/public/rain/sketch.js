var x = 0;
var y = 0;

var sprayrange = 800;

function setup() {
  createCanvas(800, 600);
  background(255); // one number 0-255 is dark to light
}

function draw() {

  background(255, 10); // luminosity and alpha
  
  var counter = 0;
  
  // fill up the whole screen every time:
  for(counter = 0;counter<100;counter = counter + 1)
  {

      fill('blue'); // red and green and 0 for blue
      stroke('blue') // just blue
      x = (random(-sprayrange, sprayrange)+random(-sprayrange, sprayrange)+random(-sprayrange, sprayrange)+random(-sprayrange, sprayrange)+random(-sprayrange, sprayrange));
      y = (random(-sprayrange, sprayrange)+random(-sprayrange, sprayrange)+random(-sprayrange, sprayrange)+random(-sprayrange, sprayrange)+random(-sprayrange, sprayrange));
      ellipse(x, y, 5, 5); // square

  }
  

}

