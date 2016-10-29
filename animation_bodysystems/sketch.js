var thestuff = new Array(20);
var thenum = new Array(20);
var foodPics, fork, back, calcur;
var countdown;
var currentTime;
var isRunning = true;
var playwinsound= false;

function preload() {
  back = loadImage("177513940.jpg");
  foodPics = [loadImage("egg_PNG49.png"), loadImage("bread-free-images-at-clker-com-vector-clip-art-online-royalty-Zs4b4W-clipart.png"), loadImage("Bacon.png"), loadImage("Sausage-Free-PNG-Image.png")];
  fork = loadImage("fork_PNG3063.png");
}

function setup() {
  createCanvas(800, 600);
  background(back);
  fill(0);
  calcur = 0;
  for(var i =0;i<thestuff.length;i++)
  {
    thenum[i] = floor(random(4))
    thestuff[i] = new FoodDraw(foodPics[thenum[i]]);
  }
  
  countdown = 50;
  currentTime = millis();
}

function draw() {
  background(back);

  if(isRunning) {
    countdown = countdown-((millis()-currentTime)/1000.);
    currentTime=millis();
    if(countdown<0) gameOver();
    image(fork, mouseX-25, mouseY-25, 50, 50);

    // draw everything!!!!!!!:
    for(var i in thestuff) {
      thestuff[i].doit(mouseX, mouseY);
      if(thestuff[i].killme==1) {
        thestuff.splice(i, 1);
        if(thenum[i] == 0){
          calcur = calcur + 91
        }
        if(thenum[i] == 1){
          calcur = calcur + 64
        }
        if(thenum[i] == 2){
          calcur = calcur + 103
        }
        if(thenum[i] == 3){
          calcur = calcur + 229
        }
      }
    }

  }
  else
  {
    fill(255, 0, 255);
    text("PAUSED!!!!!!!", 400, 600);
  }
  
  resetMatrix();
  textSize(24);
  if(calcur>=1500) {
    fill(255, 0, 0);
    text("YOU WON!!!!", width/2, height/2);
    countdown=30;
    if(playwinsound==false) {
      playwinsound=true;
    }
  } else
  {
    fill(0);
    //text("FOOD REMAINING: " + thestuff.length, 20, 20);
    text("CURRENT CALORIES: " + str(calcur),20, 20);
    text("CALORIE GOAL: 1500", 20, 45);
    text("TIME REMAINING: " + floor(countdown), 20, 70);
  }
  
}


function keyPressed()
{
  if(key=='P') isRunning = !isRunning;
  if(key=='N') gameOver();
}

function gameOver() {
  playwinsound=false;
  countdown = 30;
  thestuff = new Array(50);
  for(var i =0;i<thestuff.length;i++)
  {
    thestuff[i] = new FoodDraw(foodPics);
  }
}

// THIS IS A CLASS:
// assign this to a variable and it'll make it an OBJECT
// e.g. var foo = new Circle();
// you can declare any function as an object
var FoodDraw = function(_p)
{
  // these are properties:
  this.pic = _p;
  this.x = random(width);
  this.y = random(height);
  this.d = 50;
  this.dir = -1.;
  this.v = random(0.001, 0.002);
  this.killme = 0;

  // these are methods:
  this.doit = function(_mx, _my)
  {
    
    var distance = dist(_mx, _my, this.x, this.y);
    var angle = atan2(_my-this.y, _mx-this.x);

    resetMatrix();
    translate(this.x, this.y);
    ///rotate(angle);
    image(this.pic, 0-this.d/2, 0-this.d/2, this.d, this.d);
    
    //console.log(distance);
    if(distance<25) this.killme = 1;
    
    this.x += this.dir*this.v*(distance*cos(angle));
    this.y += this.dir*this.v*(distance*sin(angle));
    
    //this.x += random(-5, 5);
    //this.y += random(-5, 5);
    if(this.x>(width-50)) this.reset();
    if(this.x<50) this.reset();
    if(this.y>(height-50)) this.reset();
    if(this.y<50) this.reset();

  }
  
};

FoodDraw.prototype.reset = function()
{
    this.x = random(width);
    this.y = random(height);
    this.v = random(0.001, 0.002);
};