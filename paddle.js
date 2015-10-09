/**
 * Created by Espen on 09.10.2015.
 */
function Paddle(x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.lineWidth = height;
    this.speed = new Speed(0,0);
}
Paddle.prototype.render = function(){
    context.fillStyle = paddleColor;
    context.fillRect(this.x, this.y, this.width, this.lineWidth);
};
Paddle.prototype.left = function(){
    return this.x;
};
Paddle.prototype.right = function(){
    return this.x + this.width;
};
Paddle.prototype.top = function(){
    return this.y;
};
Paddle.prototype.bottom = function(){
    return this.y + this.lineWidth;
};
Paddle.prototype.moveLeft = function(){
    this.move(-paddleSpeed,0);
};
Paddle.prototype.moveRight = function(){
    this.move(paddleSpeed, 0);
};
Paddle.prototype.stop = function(){
    this.move(0,0);
};
Paddle.prototype.move = function(x,y){
    this.x += x;
    this.y += y;
    this.speed.xSpeed = x;
    this.speed.ySpeed = y;
    if(this.left() < 0){
        this.x = 0;
        this.speed.xSpeed = 0;
    } else if(this.right() > screenWidth){
        this.x = screenWidth - this.width;
        this.speed.xSpeed = 0;
    }
};