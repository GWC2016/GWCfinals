(function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();

image = new Image();
image.src = "js/girl.png";

image.onload = function() {
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
var u = 0;
var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    width = 700,
    height = 600,
    player = {
      x : width - 700,
      y : height - 5,
      width : 100,
      height : 100,
      speed: 3,
      velX: 0,
      velY: 0,
      jumping: false
    },
    keys = [],
    friction = 0.8,
    gravity = 0.3;

canvas.width = width;
canvas.height = height;


function update(){
  // check keys
    if (keys[38] || keys[32]) {
        // up arrow or space
      if(!player.jumping){
       player.jumping = true;
       player.velY = -player.speed*2;
      }
    }
    if (keys[39]) {
        // right arrow
        if (player.velX < player.speed) {
            player.velX++;
            u-=3
        }
    }
//    if (keys[37]) {
//        // left arrow
//        if (player.velX > -player.speed) {
//            player.velX--;
//        }
//    }

    player.velX *= friction;

    player.velY += gravity;

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

  ctx.clearRect(0,0,width,height);
  ctx.drawImage(image, player.x, player.y - 30, player.width, player.height);
//    ctx.drawImage(grass, u, height-40, width*2, 50);
    ctx.drawImage(grass, u, canvas.height-40, canvas.width*3, 50);
    ctx.fillStyle = "#8B4513";
    ctx.fillRect(u,canvas.height-30,canvas.width*3,100);
    if (u <=-700){
        u=0;
    }

  requestAnimationFrame(update);
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
