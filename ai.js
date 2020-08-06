// // JavaScript

// import * as tf from './tensorflow.js';

var myModel; 

async function loadMyModel(){
    myModel = await tf.loadLayersModel('localstorage://model');
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