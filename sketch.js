var leftPaddle;
var rightPaddle;
var ball;

var fps = 50;

var leftScore = 0;
var rightScore = 0;

function setup() {
  frameRate(fps);
  
  createCanvas(800, 600);
  leftPaddle = new Paddle();
  rightPaddle = new Paddle();
  ball = new Ball();
  
  rightPaddle.position.x = 780;
}

function draw() {
  background(52);
  rightPaddle.show();
  leftPaddle.show();
  ball.show();
  
  ball.update();
  
  var t = 'Player A: ' + leftScore + ' Player B: ' + rightScore;
  
  fill(255);
  textSize(32);
  text(t, 230, 30);
  
  
  //LEFT PADDLE MOVEMENT
  if(keyIsDown(87)){
      leftPaddle.moveUp();
  }
  
  if(keyIsDown(83)){
      leftPaddle.moveDown();
  }
  
  //RIGHT PADDLE MOVEMENT
  if(keyIsDown(75)){
      rightPaddle.moveUp();
  }
  
  if(keyIsDown(77)){
      rightPaddle.moveDown();
  }
}