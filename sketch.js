//import { play, loadModel } from './ai.js';

var leftPaddle;
var rightPaddle;
var ball;

var fps = 50;

var leftScore = 0;
var rightScore = 0;

var myModel;


async function loadMyModel(){
    console.log(true);
    myModel = await tf.models.modelFromJSON('model.json');
    console.log(true);
} 

function play(ball, paddle){
    var current_location = paddle.position.y;

    var ballX = ball.position.x;
    var ballY = ball.position.y;

    var data = [ballX, ballY, ball.vx, ball.vy];

    const prediction = myModel.predict(data);
    console.log(prediction);
}

function setup() {
  loadMyModel();

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
  
  //play(ball, leftPaddle);

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