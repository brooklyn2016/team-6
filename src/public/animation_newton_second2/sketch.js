var ye = 0;
var ya = 150;
var drw = false;

function preload() {
  ele = loadImage("Ele.png");
  ant = loadImage("ant.png");
}

function setup() {
  createCanvas(800, 600); 
  background(217, 167, 109);
  fill('green');
  rect(0,550,800,50);
  image(ele, 0, 0, 200, 200);
  image(ant, 250,  ya, 70, 30);
  fill('yellow');
  stroke('yellow');
  ellipse(750,50,100,100);
}

function draw() {
  if(drw == true){
    ye = ye + 1
    background(217, 167, 109);
    fill('green');
    rect(0,550,800,50);
    image(ele, 0, Math.pow(ye,2)*.2, 200, 200);
    image(ant, 250, Math.pow(ye,2)*.2 + ya, 70, 30);
    fill('yellow');
    stroke('yellow');
    ellipse(750,50,100,100);
  }
    
}

function mousePressed(){
  drw = true;
}
