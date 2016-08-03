var canvas = document.querySelector('#canvas');
var context = canvas.getContext("2d");

var xPos = 0;
var yPos = 0;

image = new Image();
image.src = "js/girl.png";

image.onload = function() {
        setInterval(loop, 1000 / 30);
    }


function move(n){
    if(n.keyCode == 39){
        xPos += 10;
    }
    if(n.keyCode == 37){
        xPos -= 10;
    }
    if(n.keyCode == 40){
        yPos += 10;
    }
    if(n.keyCode == 38){
        yPos -= 10;
    }
    canvas.width = canvas.width;
    context.drawImage(image, xPos, yPos,100,100);
    context.stroke();
}
document.onkeydown = move;
