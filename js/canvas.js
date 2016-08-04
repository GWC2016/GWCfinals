var canvas = document.querySelector('#canvas');
var context = canvas.getContext("2d");
var height = 700;
var width = 800;
var u = 0;

var xPos = 0;
var yPos = height-130;

image = new Image();
image.src = "js/girl.png";

image.onload = function() {
        setInterval(loop, 1000 / 30);
    }
grass = new Image();
grass.src = "grass.jpg";

grass.onload = function() {
        setInterval(loop, 1000 / 30);
    }

function move(n){
    if(n.keyCode == 39){
        xPos += 10;
    }
    if(n.keyCode == 37){
        xPos -= 10;
    }
    if(n.keyCode == 38){
        yPos -= 10;
    }

var gravity = 1.2;
var isJumping = false;

function jump() {
    if (isJumping == false) {
        yPos = -15;
        isJumping = true;
    }
}

function gameloop(){
 if (isJumping) {
     yPos += gravity;
     character.y += yVel;
         if (character.y > characterGround) {
             character.y = characterGround;
             yPos = 0;
             isJumping = false;
            }
     }
}
    canvas.width = canvas.width;
    context.drawImage(image, xPos, yPos,100,100);
    context.drawImage(grass, u, height-40, width*2, 50);
    context.fillStyle = "#8B4513";
    context.fillRect(u,height-30,width*2,100);
    u-=5;
    if (u >= width){
        u=-100;
    }
    context.stroke();
}
document.onkeydown = move;

