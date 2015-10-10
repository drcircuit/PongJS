
/**
 * Created by Espen on 09.10.2015.
 */
function Ball(x,y, radius){
    this.x = x;
    this.y = y;
    this.minX = x;
    this.minY = y;
    this.radius = radius;
    this.speed = new Speed(0, initialBallSpeed);
}
Ball.prototype.render = function(){
    context.beginPath();
    context.arc(this.x, this.y, this.radius,0, 2*Math.PI, false);
    context.fillStyle = ballColor;
    context.fill();
};
Ball.prototype.left = function(){
    return this.x - this.radius;
};
Ball.prototype.right = function(){
    return this.x + this.radius;
};
Ball.prototype.top = function(){
    return this.y - this.radius;
};
Ball.prototype.bottom = function(){
    return this.y + this.radius;
};
Ball.prototype.placeCenter = function(){
    this.x = screenWidth/2;
    this.y = screenHeight/2;
};
Ball.prototype.behindTopPlayer = function(){
    return this.top() < 0;
};
Ball.prototype.behindBottomPlayer = function(){
    return this.bottom() > screenHeight;
};
Ball.prototype.hitPaddle = function(paddle){
    var hitTopOrBottom = this.bottom() >= paddle.top() || this.top() <= paddle.bottom();
    var withinPaddleBoundary = this.left() >= paddle.left() && this.right() <= paddle.right();
    return(withinPaddleBoundary && hitTopOrBottom);
};
/* Update methods */
Ball.prototype.update = function(player, cpu){
    this.x += this.speed.xSpeed;
    this.y += this.speed.ySpeed;

    if(this.left() < 0){
        this.x = this.radius;
        this.speed.turnX();

    }  else if(this.right() > screenWidth){
        this.x = screenWidth - this.radius;
        this.speed.turnX();
    }
    if(this.behindBottomPlayer() || this.behindTopPlayer() ){
        if(this.behindBottomPlayer())
            cpu.score++;
        if(this.behindTopPlayer())
            player.score++;
        ball.speed.reset();
        ball.placeCenter();
    }
    if(this.top() > player.paddle.top()){
        if(this.hitPaddle(player.paddle)){
            this.speed.turnY();
            this.speed.xSpeed += player.paddle.speed.xSpeed / 2;
            this.y += this.speed.ySpeed;
        }
    } else if(this.bottom()< cpu.paddle.bottom()){
        if(this.hitPaddle(cpu.paddle)){
            this.speed.turnY();
            this.speed.xSpeed += cpu.paddle.speed.xSpeed / 2;
            this.y += this.speed.ySpeed;
        }
    }
};