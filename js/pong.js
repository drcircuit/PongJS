/**
 * Created by Espen on 09.10.2015.
 */

/* constants */
const screenWidth = 400;
const screenHeight = 600;
const paddleColor = '#cceeff';
const ballColor = '#cceeff';
const textColor = '#cceeff';
const scoreSize = 80;
const screenColor = '#000';
const ballRadius = 5;
const initialBallSpeed = 3;
const paddleSpeed = 4;
const leftKey = 37;
const rightKey = 39;
const startKey =  32;
var started = false;
var validKeys = {};

validKeys[leftKey] = true;
validKeys[rightKey] = true;

/* globals */
var canvas = document.createElement('canvas');
var controlKeys = {};

canvas.width = screenWidth;
canvas.height = screenHeight;
var context = canvas.getContext('2d');

/* main methods */
var animate = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function(callback){window.setTimeout(callback, 1000/60)};

var update = function(){
    if(!started)
        human.update(ball);
    else
        human.update();
    computer.update(ball);
    ball.update(human, computer);
    labels[0].value = human.score;
    labels[1].value = computer.score;

};

var render = function(){
    context.fillStyle = screenColor;
    context.fillRect(0,0,screenWidth,screenHeight);
    centerLine.render();
    human.render();
    computer.render();
    ball.render();
    for(var key in labels){
        labels[key].render();
    }
    if(!started){
        welcomeScreen.render();
    }
};

var step = function (){
    update();
    render();
    animate(step);
};

/* Setup objects */
var welcomeScreen = new WelcomeScreen('Welcome to','PongJs','by O2','press SPACEBAR to start the game',100,20);
var centerLine = new CenterLine(screenWidth, 5, 13,13,textColor);
var human = new AIPlayer(new Paddle(350,580,50,10));
var computer = new AIPlayer(new Paddle(350,10,50,10));
var ball = new Ball(10,378,ballRadius);

var labels = [
    new Label('', 0,0,screenHeight - (100 + scoreSize / 2), 'VT323',scoreSize, 'center'),
    new Label('', 0,0,100 + scoreSize, 'VT323',scoreSize, 'center')
];

/* EventListeners */
window.addEventListener('keydown',function(event){
    if(validKeys[event.keyCode])
        controlKeys[event.keyCode] = true;
    if(event.keyCode === startKey){
        human = new HumanPlayer(new Paddle(175,580,50,10));
        computer = new AIPlayer(new Paddle(175,10,50,10));
        ball = new Ball(200,300,ballRadius);
        started = true;
    }
});

window.addEventListener('keyup', function(event){
    if(validKeys[event.keyCode])
        delete controlKeys[event.keyCode];
});

/* bootstrap */

window.onload = function(){
    canvas.style.width = screenWidth;
    canvas.style.height = screenHeight;
    document.body.appendChild(canvas);
    animate(step);
};