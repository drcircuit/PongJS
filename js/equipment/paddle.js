/**
 * Created by Espen on 09.10.2015.
 */
function Paddle(x, y, width, height, minSpeed){
    this.x = x;
    this.y = y;
    this.width = width;
    this.lineSize = height;
    this.speed = new Speed(minSpeed,minSpeed);
}
Paddle.prototype.render = function(){
    context.fillStyle = paddleColor;
    context.fillRect(this.x, this.y, this.width, this.lineSize);
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
    return this.y + this.lineSize;
};
Paddle.prototype.moveLeft = function(){
    this.move(-paddleSpeed,0);
};
Paddle.prototype.moveRight = function(){
    this.move(paddleSpeed, 0);
};
Paddle.prototype.stop = function(){
    this.move(this.speed.minX,this.speed.minY);
};
Paddle.prototype.move = function(x,y){
    this.x += x;
    this.y += y;
    this.speed.xSpeed = x + this.speed.minX;
    this.speed.ySpeed = y + this.speed.minY;
    if(this.left() < 0){
        this.x = 0;
        this.speed.xSpeed = this.speed.minX;
    } else if(this.right() > screenWidth){
        this.x = screenWidth - this.width;
        this.speed.xSpeed = -this.speed.minX;
    }
};