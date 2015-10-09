/**
 * Created by Espen on 09.10.2015.
 */
function HumanPlayer(paddle){
    this.update = function(){
        for(var key in controlKeys)
            switch (Number(key)) {
                case leftKey:
                    this.paddle.moveLeft();
                    break;
                case rightKey:
                    this.paddle.moveRight();
                    break;
                default:
                    this.paddle.stop();
                    break;
            }
    };
    Player.apply(this, arguments);
    this.paddle = paddle;
};
HumanPlayer.prototype = Player.prototype;
HumanPlayer.prototype.constructor = HumanPlayer;