/**
 * Created by Espen on 09.10.2015.
 */
function AIPlayer(paddle){
    var chase = function(x, my){
        var spot = -((my.paddle.x + (my.paddle.width / 2)) - x);
        if(spot < 0 && spot < -paddleSpeed){
            return -5;
        } else if(spot > 0 && spot > paddleSpeed){
            return 5;
        }
        return spot;
    };
    this.update = function(ball){
        this.paddle.move(chase(ball.x,this),0);
    };
    Player.apply(this, arguments);
    this.paddle = paddle;
    this.scoreSound = new SilentSound();
    this.loseSound = new SilentSound();
}
AIPlayer.prototype = Player.prototype;
AIPlayer.prototype.constructor = AIPlayer;