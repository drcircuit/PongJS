/**
 * Created by Espen on 09.10.2015.
 */
function Player(paddle){
    this.paddle = paddle;
    this.score = 0;
}

/* Render methods*/
Player.prototype.render = function(){
    this.paddle.render();
};
