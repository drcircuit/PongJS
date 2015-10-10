/**
 * Created by Espen on 09.10.2015.
 */
function Label(label,initvalue, offsetX, offsetY, font, fontsize, align){
    this.label = label;
    this.value = initvalue;
    this.x = offsetX;
    this.y = offsetY;
    this.font = fontsize + 'px '+font;
    this.align = align;
}
Label.prototype.message = function() {
    return this.label == '' ? this.value : this.value == '' ? this.label : this.label + ' : ' + this.value;
};
Label.prototype.width = function(){
    context.font = this.font;
    return context.measureText(this.message()).width;
};

Label.prototype.render = function(){
    context.font = this.font;
    context.fillStyle = textColor;
    var x = 0;
    switch(this.align){
        case 'center':
            x = (screenWidth - this.width()) / 2;
            break;
        case 'left':
            x = 0;
            break;
        case 'right':
            x = screenWidth - this.width();
            break;
    }
    context.fillText(this.message(), x + this.x, this.y);
};

function CenterLine(width, lineSize, length, gap, color){
    this.width = width;
    this.lineSize = lineSize;
    this.gap = gap;
    this.length = length;
    this.color = color;
}

CenterLine.prototype.render = function(){
    var x = 0;
    var y = (screenHeight - this.lineSize) / 2;
    context.setLineDash([this.gap,this.length]);
    context.beginPath();
    context.moveTo(x,y);
    context.strokeWidth = this.lineSize;
    context.lineTo(this.width, y);
    context.strokeStyle = this.color;
    context.stroke();
};

function WelcomeScreen(welcomeTitle, gameTitle, authorTitle, startTitle, largeFontSize, smallFontSize){
    var spacing = 3;
    var height = smallFontSize * 3 + spacing * 4 + largeFontSize;
    var startY = (screenHeight - height) / 2;
    this.welcome = new Label(welcomeTitle, '', 0,startY,'VT323',smallFontSize,'center');
    this.game = new Label(gameTitle, '', 0,startY + largeFontSize - smallFontSize ,'VT323',largeFontSize,'center');
    this.author = new Label(authorTitle, '', 0,startY + smallFontSize + spacing + largeFontSize + spacing,'VT323',smallFontSize,'center');
    this.start = new Label(startTitle, '', 0,startY + smallFontSize + spacing + largeFontSize + spacing + smallFontSize + smallFontSize,'VT323',smallFontSize,'center');

}
WelcomeScreen.prototype.render = function(){
    context.fillStyle = "rgba(0,0,0,0.6)";
    context.fillRect(0,0,screenWidth,screenHeight);
    this.welcome.render();
    this.game.render();
    this.author.render();
    this.start.render();
};