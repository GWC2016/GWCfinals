(function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();
var background = new Image();
background.src = "japan.jpg";

// Make sure the image is loaded first otherwise nothing will draw.
background.onload = function(){
    setInterval(loop,1000/30);
}
image = new Image();
image.src = "js/girl.png";

image.onload = function() {
        setInterval(loop, 1000 / 30);
    }
japan = new Image();
japan.src = "flags/japan.png";

japan.onload = function() {
        setInterval(loop, 1000 / 30);
    }
run = new Image();
run.src = "girl.running.png";

run.onload = function() {
        setInterval(loop, 1000 / 30);
    }
grass = new Image();
grass.src = "grass.jpg";

grass.onload = function() {
        setInterval(loop, 1000 / 30);
    }
block = new Image();
block.src = "block.png";

block.onload = function() {
        setInterval(loop, 1000 / 30);
    }

info = new Image();
info.src = "info.png";

info.onload = function() {
        setInterval(loop, 1000 / 30);
    }
var u = 0;
var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    width = 1400,
    height = 450,
    player = {
      x : 0,
      y : height,
      width : 100,
      height : 100,
      speed: 3,
      velX: 0,
      velY: 0,
      jumping: false,
      grounded: false
    },
    keys = [],
    friction = 0.8,
    gravity = 0.3;
var xbox = 800;
var ybox = height-90;
var xtext = 90;
var ytext = 100;
var boxes = [];
var blocks= [];
var fact1 = false;
var fact2 = false;
var fact3 = false;
// dimensions
boxes.push({
    x: xbox-500,
    y: ybox,
    width: 50,
    height: 50
});
boxes.push({
    x: xbox,
    y: ybox-130,
    width: 50,
    height: 50
});
boxes.push({
    x: xbox+200,
    y: ybox-130,
    width: 50,
    height: 50
});
blocks.push({
    x: xbox-60,
    y: ybox,
    width: 50,
    height: 50
});
blocks.push({
    x: xbox-100,
    y: ybox,
    width: 50,
    height: 50
});
blocks.push({
    x: xbox-60,
    y: ybox-50,
    width: 50,
    height: 50
});

canvas.width = width;
canvas.height = height;


function update(){
  // check keys
    if (keys[38] || keys[32]) {
        // up arrow or space
      if(!player.jumping){
           player.jumping = true;
           player.grounded=false;
           player.velY = -player.speed*2;
          }
    }
    if (keys[39]) {
            // right arrow
        if (player.velX < player.speed) {
            player.velX++;
            }
        }
    if (keys[37]) {
            // left arrow
        if (player.velX > -player.speed) {
            player.velX--;
            }
        }

    player.velX *= friction;
    player.velY += gravity;


    player.grounded = false;
    for (var i = 0; i < boxes.length; i++) {
        ctx.rect(boxes[i].x, boxes[i].y, boxes[i].width, boxes[i].height);

        var dir = colCheck(player, boxes[0]);

        if (dir === "l" || dir === "r") {
            player.velX = 0;
            player.jumping = false;
        } else if (dir === "b") {
            player.grounded = true;
            player.jumping = false;
            fact1 = true;
        } else if (dir === "t") {
            player.velY *= -1;
        }

    }
    for (var i = 0; i < boxes.length; i++) {
        ctx.rect(boxes[i].x, boxes[i].y, boxes[i].width, boxes[i].height);

        var dir = colCheck(player, boxes[1]);

        if (dir === "l" || dir === "r") {
            player.velX = 0;
            player.jumping = false;
        } else if (dir === "b") {
            player.grounded = true;
            player.jumping = false;
            fact2 = true;
        } else if (dir === "t") {
            player.velY *= -1;
        }

    }
       for (var i = 0; i < boxes.length; i++) {
        ctx.rect(boxes[i].x, boxes[i].y, boxes[i].width, boxes[i].height);

        var dir = colCheck(player, boxes[2]);

        if (dir === "l" || dir === "r") {
            player.velX = 0;
            player.jumping = false;
        } else if (dir === "b") {
            player.grounded = true;
            player.jumping = false;
            fact3 = true;
        } else if (dir === "t") {
            player.velY *= -1;
        }

    }
    for (var i = 0; i < blocks.length; i++) {
        ctx.rect(blocks[i].x, blocks[i].y, blocks[i].width, blocks[i].height);

        var dir = colCheck(player, blocks[i]);

        if (dir === "l" || dir === "r") {
            player.velX = 0;
            player.jumping = false;
        } else if (dir === "b") {
            player.grounded = true;
            player.jumping = false;
        } else if (dir === "t") {
            player.velY *= -1;
        }

    }

    if(player.grounded){
         player.velY = 0;
    }

    player.x += player.velX;
    player.y += player.velY;

    if (player.x >= width-player.width) {
        player.x = width-player.width;
    } else if (player.x <= 0) {
        player.x = 0;
    }

    if(player.y >= height-player.height){
        player.y = height - player.height;
        player.jumping = false;
    }

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(background, 0, 0, width,height);
    ctx.fillStyle = "black";
    ctx.beginPath();

    ctx.drawImage(info, xbox, ybox-130, 50 ,50);
    ctx.drawImage(info, xbox+200, ybox-130, 50 ,50);
    ctx.drawImage(info, xbox-500, ybox, 50 ,50);
    ctx.drawImage(block, xbox-60, ybox, 50 ,50);
    ctx.drawImage(block, xbox-100, ybox, 50 ,50);
    ctx.drawImage(block, xbox-60, ybox-50, 50 ,50);
    ctx.drawImage(block, xbox-80, ybox, 50 ,50);


    ctx.drawImage(japan, player.x+25, player.y-60, 100,100);
    ctx.drawImage(image, player.x, player.y -25, player.width, player.height);
    ctx.drawImage(grass, u, canvas.height-40, canvas.width, 50);
    ctx.fillStyle = "#8B4513";
    ctx.fillRect(u,canvas.height-30,canvas.width*3,100);
    if(fact1){
        ctx.fillStyle = "white";
        ctx.fillRect(xtext,ytext,200,200);
        ctx.fill();
        ctx.stroke();

        ctx.strokeText("JAPAN",xtext + 15,ytext + 10);
        ctx.strokeText("IS THE BOMB", xtext + 15, ytext + 20);
        ctx.strokeText("DOT COM", xtext + 15, ytext + 30);
    }
    if(fact2){
        ctx.fillStyle = "white";
        ctx.fillRect(xtext,ytext,200,200);
        ctx.fill();
        ctx.stroke();

        ctx.strokeText("YOOO",xtext + 15,ytext + 10);
        ctx.strokeText("IS THE BOMB", xtext + 15, ytext + 20);
        ctx.strokeText("DOT COM", xtext + 15, ytext + 30);
    }
      if(fact3){
        ctx.fillStyle = "white";
        ctx.fillRect(xtext,ytext,200,200);
        ctx.fill();
        ctx.stroke();

        ctx.strokeText("YOOO",xtext + 15,ytext + 10);
        ctx.strokeText("IS THE BOMB", xtext + 15, ytext + 20);
        ctx.strokeText("DOT COM", xtext + 15, ytext + 30);
    }





  requestAnimationFrame(update);
}

function colCheck(shapeA, shapeB) {
    // get the vectors to check against
    var vX = (shapeA.x + (shapeA.width / 5)) - (shapeB.x + (shapeB.width / 5)),
        vY = (shapeA.y + (shapeA.height / 5)) - (shapeB.y + (shapeB.height / 5)),
        // add the half widths and half heights of the objects
        hWidths = (shapeA.width / 5) + (shapeB.width / 5),
        hHeights = (shapeA.height / 2) + (shapeB.height / 100),
        colDir = null;

    // if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision
    if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {
        // figures out on which side we are colliding (top, bottom, left, or right)
        var oX = hWidths - Math.abs(vX),
            oY = hHeights - Math.abs(vY);
        if (oX >= oY) {
            if (vY > 0) {
                colDir = "t";
                shapeA.y += oY;
            } else {
                colDir = "b";
                shapeA.y -= oY;
            }
        } else {
            if (vX > 0) {
                colDir = "l";
                shapeA.x += oX;
            } else {
                colDir = "r";
                shapeA.x -= oX;
            }
        }
    }
    return colDir;
}
document.body.addEventListener("keydown", function(e) {
    keys[e.keyCode] = true;
});

document.body.addEventListener("keyup", function(e) {
    keys[e.keyCode] = false;
});


window.addEventListener("load",function(){
    update();
});
