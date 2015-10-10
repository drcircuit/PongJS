/**
 * Created by Espen on 09.10.2015.
 */
function Speed(startX, startY){
    this.minX = startX;
    this.minY = startY;
    this.xSpeed = startX;
    this.ySpeed = startY;
}
Speed.prototype.turnX = function(){
    this.xSpeed = -this.xSpeed;
};
Speed.prototype.turnY = function(){
    this.ySpeed = -this.ySpeed;
};
Speed.prototype.reset = function(){
    this.xSpeed = this.minX;
    this.ySpeed = this.minY;
};