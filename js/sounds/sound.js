/**
 * Created by Espen on 10/10/2015.
 */
function HitSound(audioFile){
    this.audio = new Audio(audioFile);
}

HitSound.prototype.play = function(){
        this.audio.currentTime = 0;
        this.audio.play();
};

function SilentSound(){
    this.play = function(){};
}