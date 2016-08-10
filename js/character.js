(function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();
var japan = new Image();
japan.src = "Countries/japan.jpg";
japan.onload = function(){
    setInterval(loop,1000/30);
}
image = new Image();
image.src = "js/girl.png";

image.onload = function() {
        setInterval(loop, 1000 / 30);
    }
world = new Image();
world.src = "world.jpg";

world.onload = function() {
        setInterval(loop, 1000 / 30);
    }
japanflag = new Image();
japanflag.src = "flags/japan.png";

japanflag.onload = function() {
        setInterval(loop, 1000 / 30);
    }
brazilflag = new Image();
brazilflag.src = "flags/brazilflag.png";

brazilflag.onload = function() {
        setInterval(loop, 1000 / 30);
    }
indianflag = new Image();
indianflag.src = "flags/indianflag.png";

indianflag.onload = function() {
        setInterval(loop, 1000 / 30);
    }
eritreanflag = new Image();
eritreanflag.src = "flags/eritreanflag.png";

eritreanflag.onload = function() {
        setInterval(loop, 1000 / 30);
    }
endflag = new Image();
endflag.src = "flags/endflag.png";

endflag.onload = function() {
        setInterval(loop, 1000 / 30);
    }
startflag = new Image();
startflag.src = "flags/greenflag.png";

startflag.onload = function() {
        setInterval(loop, 1000 / 30);
    }
brazil = new Image();
brazil.src = "Countries/brazil.jpg";

brazil.onload = function() {
        setInterval(loop, 1000 / 30);
    }
india = new Image();
india.src = "Countries/india.jpg";

india.onload = function() {
        setInterval(loop, 1000 / 30);
    }
eritrea = new Image();
eritrea.src = "Countries/eritrea.jpg";

eritrea.onload = function() {
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
    friction = .8,
    gravity = 0.3;
var xbox = 800;
var ybox = height-90;
var xtext = 0;
var ytext = 0;
var boxes = [];
var blocks= [];
var boxes2 = [];
var blocks2=[];
var boxes3 =[];
var blocks3 = [];
var boxes4 = [];
var blocks4 = [];
var fact1 = false;
var fact2 = false;
var fact3 = false;
var fact4 = false;
var fact5 = false;
var fact6 = false;
var fact7 = false;
var fact8 = false;
var fact9 = false;
var fact10 = false;
var fact11 = false;
var fact12 = false;
var hitFlag = false;
var hitFlag2 = false;
var hitFlag3 = false;
var hitFlag4 = false;
var hitFlag5 = false;
var flags = [];
var flags2 = [];
var flags3 = [];
var flags4 = [];
var flags5 = [];
var score = 0;
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
flags.push({
    x: 1250,
    y: ybox,
    width: 50,
    height: 50
});
boxes2.push({
    x: 1350,
    y: ybox,
    width: 50,
    height: 50
});
boxes2.push({
    x: 2200,
    y: ybox-150,
    width: 50,
    height: 50
});
boxes2.push({
    x: 1550,
    y: ybox-80,
    width: 50,
    height: 50
});
blocks2.push({
    x: 2150,
    y: ybox-50,
    width: 50,
    height: 50
});
blocks2.push({
    x: 2100,
    y: ybox,
    width: 50,
    height: 50
});
blocks2.push({
    x: 1400,
    y: ybox,
    width: 50,
    height: 50
});
blocks2.push({
    x: 1300,
    y: ybox,
    width: 50,
    height: 50
});
flags2.push({
    x: 2500,
    y: ybox,
    width: 50,
    height: 50
});
flags3.push({
    x: 3730,
    y: ybox,
    width: 50,
    height: 50
});
blocks3.push({
    x: 2700,
    y: ybox,
    width: 50,
    height: 50
});
blocks3.push({
    x: 2800,
    y: ybox-50,
    width: 50,
    height: 50
});
blocks3.push({
    x: 2850,
    y: ybox-50,
    width: 50,
    height: 50
});
blocks3.push({
    x: 3050,
    y: ybox-130,
    width: 50,
    height: 50
});
blocks3.push({
    x: 3300,
    y: ybox-130,
    width: 50,
    height: 50
});
boxes3.push({
    x: 2950,
    y: ybox-130,
    width: 50,
    height: 50
});
boxes3.push({
    x: 3400,
    y: ybox-130,
    width: 50,
    height: 50
});
boxes3.push({
    x: 3200,
    y: ybox-130,
    width: 50,
    height: 50
});
boxes4.push({
    x: 3930,
    y: ybox,
    width: 50,
    height: 50
});
boxes4.push({
    x: 4430,
    y: ybox-130,
    width: 50,
    height: 50
});
boxes4.push({
    x: 4630,
    y: ybox-130,
    width: 50,
    height: 50
});
blocks4.push({
    x: 4320,
    y: ybox,
    width: 50,
    height: 50
});
blocks4.push({
    x: 4370,
    y: ybox,
    width: 50,
    height: 50
});
blocks4.push({
    x: 4370,
    y: ybox-50,
    width: 50,
    height: 50
});
flags4.push({
    x: 4900,
    y: ybox,
    width: 50,
    height: 50
});
flags5.push({
    x: 4900,
    y: ybox,
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
//    if (keys[37]) {
//            // left arrow
//        if (player.velX > -player.speed) {
//            player.velX--;
//            }
//        }

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
            score+=1;
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
            score+=1;
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
            score+=1;
        } else if (dir === "t") {
            player.velY *= -1;
        }

    }
    for (var i = 0; i < boxes2.length; i++) {
        ctx.rect(boxes2[i].x, boxes2[i].y, boxes2[i].width, boxes2[i].height);

        var dir = colCheck(player, boxes2[0]);

        if (dir === "l" || dir === "r") {
            player.velX = 0;
            player.jumping = false;
        } else if (dir === "b") {
            player.grounded = true;
            player.jumping = false;
            fact4 = true;
            score+=1;
        } else if (dir === "t") {
            player.velY *= -1;
        }

    }
     for (var i = 0; i < boxes2.length; i++) {
        ctx.rect(boxes2[i].x, boxes2[i].y, boxes2[i].width, boxes2[i].height);

        var dir = colCheck(player, boxes2[1]);

        if (dir === "l" || dir === "r") {
            player.velX = 0;
            player.jumping = false;
        } else if (dir === "b") {
            player.grounded = true;
            player.jumping = false;
            fact5 = true;
            score+=1;
        } else if (dir === "t") {
            player.velY *= -1;
        }

    }
     for (var i = 0; i < boxes2.length; i++) {
        ctx.rect(boxes2[i].x, boxes2[i].y, boxes2[i].width, boxes2[i].height);

        var dir = colCheck(player, boxes2[2]);

        if (dir === "l" || dir === "r") {
            player.velX = 0;
            player.jumping = false;
        } else if (dir === "b") {
            player.grounded = true;
            player.jumping = false;
            fact6= true;
            score+=1;
        } else if (dir === "t") {
            player.velY *= -1;
        }

    }
        for (var i = 0; i < boxes3.length; i++) {
        ctx.rect(boxes3[i].x, boxes3[i].y, boxes3[i].width, boxes3[i].height);

        var dir = colCheck(player, boxes3[0]);

        if (dir === "l" || dir === "r") {
            player.velX = 0;
            player.jumping = false;
        } else if (dir === "b") {
            player.grounded = true;
            player.jumping = false;
            fact7= true;
            score +=1
        } else if (dir === "t") {
            player.velY *= -1;
        }

    }
         for (var i = 0; i < boxes3.length; i++) {
        ctx.rect(boxes3[i].x, boxes3[i].y, boxes3[i].width, boxes3[i].height);

        var dir = colCheck(player, boxes3[1]);

        if (dir === "l" || dir === "r") {
            player.velX = 0;
            player.jumping = false;
        } else if (dir === "b") {
            player.grounded = true;
            player.jumping = false;
            fact8= true;
            score += 1
        } else if (dir === "t") {
            player.velY *= -1;
        }

    }
    for (var i = 0; i < boxes3.length; i++) {
        ctx.rect(boxes3[i].x, boxes3[i].y, boxes3[i].width, boxes3[i].height);

        var dir = colCheck(player, boxes3[2]);

        if (dir === "l" || dir === "r") {
            player.velX = 0;
            player.jumping = false;
        } else if (dir === "b") {
            player.grounded = true;
            player.jumping = false;
            fact9= true;
            score += 1
        } else if (dir === "t") {
            player.velY *= -1;
        }

    }
    for (var i = 0; i < boxes4.length; i++) {
        ctx.rect(boxes4[i].x, boxes4[i].y, boxes4[i].width, boxes4[i].height);

        var dir = colCheck(player, boxes4[0]);

        if (dir === "l" || dir === "r") {
            player.velX = 0;
            player.jumping = false;
        } else if (dir === "b") {
            player.grounded = true;
            player.jumping = false;
            fact10= true;
            score += 1
        } else if (dir === "t") {
            player.velY *= -1;
        }

    }
    for (var i = 0; i < boxes4.length; i++) {
        ctx.rect(boxes4[i].x, boxes4[i].y, boxes4[i].width, boxes4[i].height);

        var dir = colCheck(player, boxes4[1]);

        if (dir === "l" || dir === "r") {
            player.velX = 0;
            player.jumping = false;
        } else if (dir === "b") {
            player.grounded = true;
            player.jumping = false;
            fact11= true;
            score += 1
        } else if (dir === "t") {
            player.velY *= -1;
        }

    }
    for (var i = 0; i < boxes4.length; i++) {
        ctx.rect(boxes4[i].x, boxes4[i].y, boxes4[i].width, boxes4[i].height);

        var dir = colCheck(player, boxes4[2]);

        if (dir === "l" || dir === "r") {
            player.velX = 0;
            player.jumping = false;
        } else if (dir === "b") {
            player.grounded = true;
            player.jumping = false;
            fact12= true;
            score += 1
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
       for (var i = 0; i < blocks2.length; i++) {
        ctx.rect(blocks2[i].x, blocks2[i].y, blocks2[i].width, blocks2[i].height);

        var dir = colCheck(player, blocks2[i]);

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
        for (var i = 0; i < blocks3.length; i++) {
        ctx.rect(blocks3[i].x, blocks3[i].y, blocks3[i].width, blocks3[i].height);

        var dir = colCheck(player, blocks3[i]);

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

        for (var i = 0; i < blocks4.length; i++) {
        ctx.rect(blocks4[i].x, blocks4[i].y, blocks4[i].width, blocks4[i].height);

        var dir = colCheck(player, blocks4[i]);

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
    for (var i = 0; i < flags.length; i++) {
        ctx.rect(flags[i].x, flags[i].y, flags[i].width, flags[i].height);

        var dir = colCheck(player, flags[i]);

        if (dir === "l" || dir === "r") {
            player.velX = 0;
            player.jumping = false;
            hitFlag = true;
        } else if (dir === "b") {
            player.grounded = true;
            player.jumping = false;
            hitFlag = true;
        } else if (dir === "t") {
            player.velY *= -1;
        }
    }
    for (var i = 0; i < flags2.length; i++) {
        ctx.rect(flags2[i].x, flags2[i].y, flags2[i].width, flags2[i].height);

        var dir = colCheck(player, flags2[i]);

        if (dir === "l" || dir === "r") {
            player.velX = 0;
            player.jumping = false;
            hitFlag2 = true;
        } else if (dir === "b") {
            player.grounded = true;
            player.jumping = false;
            hitFlag2 = true;
        } else if (dir === "t") {
            player.velY *= -1;
        }
    }
    for (var i = 0; i < flags3.length; i++) {
        ctx.rect(flags3[i].x, flags3[i].y, flags3[i].width, flags3[i].height);

        var dir = colCheck(player, flags3[i]);

        if (dir === "l" || dir === "r") {
            player.velX = 0;
            player.jumping = false;
            hitFlag3 = true;
        } else if (dir === "b") {
            player.grounded = true;
            player.jumping = false;
            hitFlag3 = true;
        } else if (dir === "t") {
            player.velY *= -1;
        }
    }
      for (var i = 0; i < flags4.length; i++) {
        ctx.rect(flags4[i].x, flags4[i].y, flags4[i].width, flags4[i].height);

        var dir = colCheck(player, flags4[i]);

        if (dir === "l" || dir === "r") {
            player.velX = 0;
            player.jumping = false;
            hitFlag4 = true;
        } else if (dir === "b") {
            player.grounded = true;
            player.jumping = false;
            hitFlag4 = true;
        } else if (dir === "t") {
            player.velY *= -1;
        }
    }
    for (var i = 0; i < flags5.length; i++) {
        ctx.rect(flags5[i].x, flags5[i].y, flags5[i].width, flags5[i].height);

        var dir = colCheck(player, flags5[i]);

        if (dir === "l" || dir === "r") {
            player.velX = 0;
            player.jumping = false;
            hitFlag5 = true;
        } else if (dir === "b") {
            player.grounded = true;
            player.jumping = false;
            hitFlag5 = true;
        } else if (dir === "t") {
            player.velY *= -1;
        }
    }

    if(player.grounded){
         player.velY = 0;
    }

    player.x += player.velX;
    player.y += player.velY;

    /*if (player.x >= width) {
        player.x = width-player.width;
    } else if (player.x <= 0) {
        player.x = 0;
    }*/

    if(player.y >= height-player.height){
        player.y = height - player.height;
        player.jumping = false;
    }

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(japan, 0, 0, width,height);
    ctx.fillStyle = "black";
    ctx.beginPath();
     ctx.stroke();
        ctx.font = "20px Ariel";
        ctx.strokeText("JAPAN",xtext + 650,ytext + 30);
        ctx.font = "20px Ariel";
        ctx.strokeText("Score: "+score,xtext + 1000,ytext + 30);
    ctx.drawImage(info, xbox, ybox-130, 50 ,50);
    ctx.drawImage(info, xbox+200, ybox-130, 50 ,50);
    ctx.drawImage(info, xbox-500, ybox, 50 ,50);
    ctx.drawImage(block, xbox-60, ybox, 50 ,50);
    ctx.drawImage(block, xbox-100, ybox, 50 ,50);
    ctx.drawImage(block, xbox-60, ybox-50, 50 ,50);
    ctx.drawImage(block, xbox-80, ybox, 50 ,50);
    ctx.drawImage(brazilflag, 1250, ybox-70, 120 ,120);
    ctx.drawImage(japanflag, 0, ybox-70, 120 ,120);
    ctx.drawImage(image, player.x, player.y -25, player.width, player.height);
    ctx.drawImage(grass, u, canvas.height-40, canvas.width, 50);
    ctx.fillStyle = "#8B4513";
    ctx.fillRect(u,canvas.height-30,canvas.width*3,100);


    if(fact1){
        ctx.fillStyle = "white";
        ctx.fillRect(xtext,ytext,300,300);
        ctx.fill();
        ctx.stroke();
        ctx.font = "15px Ariel";

        ctx.strokeText("Japan’s national sport is sumo.",xtext + 10,ytext + 30);
        ctx.strokeText("Going back to the 8th century,", xtext + 10, ytext + 50);
        ctx.strokeText("sumo started as a prayer to have a", xtext + 10, ytext + 70);
        ctx.strokeText("good rice harvest, but then turned",xtext + 10,ytext + 90);
        ctx.strokeText("into a public sport, where two men",xtext + 10,ytext + 110);
        ctx.strokeText("fight in a ring. The only way to",xtext + 10,ytext + 130);
        ctx.strokeText("win is when one player knocked the",xtext + 10,ytext + 150);
        ctx.strokeText("other player out of the ring or if any",xtext + 10,ytext + 170);
        ctx.strokeText("of his body part except his feet touched",xtext + 10,ytext + 190);
        ctx.strokeText("the ground. Sumo is still a large",xtext + 10,ytext + 210);
        ctx.strokeText("Japanese tradition which still has",xtext + 10,ytext + 230);
        ctx.strokeText("ancient customs and dress.",xtext + 10,ytext + 250);


    }
    if(fact2){
        ctx.fillStyle = "white";
        ctx.fillRect(xtext,ytext,300,300);
        ctx.fill();
        ctx.stroke();
        ctx.font = "15px Ariel";

        ctx.strokeText("In Japanese buildings if the floor",xtext + 10,ytext + 30);
        ctx.strokeText("is raised it helps show where you", xtext + 15, ytext + 50);
        ctx.strokeText("should take off your shoes.", xtext + 15, ytext + 70);
    }
      if(fact3){
        ctx.fillStyle = "white";
        ctx.fillRect(xtext,ytext,300,300);
        ctx.fill();
        ctx.stroke();
        ctx.font = "15px Ariel";

        ctx.strokeText("If you become sick in Japan you",xtext + 10,ytext + 30);
        ctx.strokeText("should always wear a mask to keep", xtext + 15, ytext + 50);
        ctx.strokeText("the disease from spreading.", xtext + 15, ytext + 70);
    }




    if (hitFlag){


    ctx.clearRect(0,0,width,height);
    ctx.drawImage(brazil, 0, 0, width,height);
    ctx.fillStyle = "black";
    ctx.beginPath();
         ctx.stroke();
        ctx.font = "20px Ariel";
        ctx.strokeText("BRAZIL",xtext + 650,ytext + 30);
        ctx.font = "20px Ariel";
        ctx.strokeText("Score: "+score,xtext + 1000,ytext + 30);

    ctx.drawImage(info, xbox-650, ybox, 50 ,50);
    ctx.drawImage(info, xbox+200, ybox-150, 50 ,50);
    ctx.drawImage(info, xbox-450, ybox-80, 50 ,50);
    ctx.drawImage(block, xbox+150, ybox-50, 50 ,50);
    ctx.drawImage(block, xbox+100, ybox, 50 ,50);
    ctx.drawImage(block, xbox-600, ybox, 50 ,50);

    ctx.drawImage(block, xbox-700, ybox, 50 ,50);
    ctx.drawImage(block, xbox-750, ybox, 50 ,50);

    ctx.drawImage(grass, u, canvas.height-40, canvas.width, 50);
    ctx.fillStyle = "#8B4513";
    ctx.fillRect(u,canvas.height-30,canvas.width*3,100);
    ctx.drawImage(image, player.x-1200,player.y-25, player.width, player.height);
    ctx.drawImage(indianflag, 1300, ybox-70, 120 ,120);

    if(fact4){
        ctx.fillStyle = "white";
        ctx.fillRect(xtext,ytext,300,300);
        ctx.fill();
        ctx.stroke();
        ctx.font = "15px Ariel";

        ctx.strokeText("Brazil is famous for the world’s biggest",xtext + 10,ytext + 30);
        ctx.strokeText("carnival every year in February. It includes", xtext + 15, ytext + 50);
        ctx.strokeText("music, dancing, and food.", xtext + 15, ytext + 70);
    }
    if(fact6){
        ctx.fillStyle = "white";
        ctx.fillRect(xtext,ytext,300,300);
        ctx.fill();
        ctx.stroke();
        ctx.font = "15px Ariel";

        ctx.strokeText("The music played at the carnivals is samba.",xtext + 10,ytext + 30);
        ctx.strokeText(" It came from African slaves in the 17th,", xtext + 15, ytext + 50);
        ctx.strokeText("18th, and 19th century.", xtext + 15, ytext + 70);
    }
      if(fact5){
        ctx.fillStyle = "white";
        ctx.fillRect(xtext,ytext,300,300);
        ctx.fill();
        ctx.stroke();
        ctx.font = "15px Ariel";

        ctx.strokeText("Soccer is the most popular sport in Brazil",xtext + 10,ytext + 30);
        ctx.strokeText(" The national team has won the most World", xtext + 15, ytext + 50);
        ctx.strokeText("Cups (5).", xtext + 15, ytext + 70);
    }

    }
    if (hitFlag2){


    ctx.clearRect(0,0,width,height);
    ctx.drawImage(india, 0, 0, width,height);
    ctx.fillStyle = "black";
    ctx.beginPath();
         ctx.stroke();
        ctx.font = "20px Ariel";
        ctx.strokeText("INDIA",xtext + 650,ytext + 30);
        ctx.font = "20px Ariel";
        ctx.strokeText("Score: "+score,xtext + 1000,ytext + 30);
    ctx.drawImage(info, xbox, ybox-130, 50 ,50);
    ctx.drawImage(info, xbox+200, ybox-130, 50 ,50);
    ctx.drawImage(info, 550, ybox-130, 50 ,50);
    ctx.drawImage(block, 900, ybox-130, 50 ,50);
    ctx.drawImage(block, 300, ybox, 50 ,50);
    ctx.drawImage(block, 400, ybox-50, 50 ,50);
    ctx.drawImage(block, 450, ybox-50, 50 ,50);
    ctx.drawImage(block, 100, ybox, 50 ,50);
    ctx.drawImage(block, 650, ybox-130, 50 ,50);


    //ctx.drawImage(japan, player.x+25, player.y-60, 100,100);
    ctx.drawImage(grass, u, canvas.height-40, canvas.width, 50);
    ctx.fillStyle = "#8B4513";
    ctx.fillRect(u,canvas.height-30,canvas.width*3,100);
    ctx.drawImage(image, player.x-2400,player.y-25, player.width, player.height);
    ctx.drawImage(eritreanflag, 1300, ybox-60, 120 ,120);


    if(fact7){
        ctx.fillStyle = "white";
        ctx.fillRect(xtext,ytext,300,300);
        ctx.fill();
        ctx.stroke();
        ctx.font = "15px Ariel";

        ctx.strokeText("Rivers are very important to India’s",xtext + 10,ytext + 30);
        ctx.strokeText("culture and they have worshiped the rivers", xtext + 15, ytext + 50);
        ctx.strokeText("as goddesses because of the water they bring", xtext + 15, ytext + 70);
        ctx.strokeText(" to dry land. Bathing in the rivers is said", xtext + 15, ytext + 90);
        ctx.strokeText("to wash a person of their sins, and it is", xtext + 15, ytext + 110);
        ctx.strokeText("common to spread a loved one’s ashes", xtext + 15, ytext + 130);
        ctx.strokeText("in the river.", xtext + 15, ytext + 150);
    }
    if(fact9){
        ctx.fillStyle = "white";
        ctx.fillRect(xtext,ytext,300,300);
        ctx.fill();
        ctx.stroke();
        ctx.font = "15px Ariel";

        ctx.strokeText("The national flag has three stripes.",xtext + 10,ytext + 30);
        ctx.strokeText("The saffron side stands for courage,", xtext + 15, ytext + 50);
        ctx.strokeText("the white for honesty and peace, and", xtext + 15, ytext + 70);
         ctx.strokeText("green for faith. The spinning wheel", xtext + 15, ytext + 90);
         ctx.strokeText("represents the wheel of life.", xtext + 15, ytext + 110);
    }
      if(fact8){
        ctx.fillStyle = "white";
        ctx.fillRect(xtext,ytext,300,300);
        ctx.fill();
        ctx.stroke();
        ctx.font = "15px Ariel";

        ctx.strokeText("The national fruit is mango.",xtext + 10,ytext + 30);
        ctx.strokeText("The national bird, which was bred", xtext + 15, ytext + 50);
        ctx.strokeText("for food, is a peacock.", xtext + 15, ytext + 70);
    }
    if (hitFlag3){


            ctx.clearRect(0,0,width,height);
            ctx.drawImage(eritrea, 0, 0, width,height);
            ctx.fillStyle = "black";
            ctx.beginPath();
        ctx.font = "20px Ariel";
        ctx.strokeText("ERITREA",xtext + 650,ytext + 30);
         ctx.stroke();
        ctx.font = "20px Ariel";
        ctx.strokeText("Score: "+score,xtext + 1000,ytext + 30);
         ctx.drawImage(info, xbox, ybox-130, 50 ,50);
        ctx.drawImage(info, xbox+200, ybox-130, 50 ,50);
        ctx.drawImage(info, xbox-500, ybox, 50 ,50);
        ctx.drawImage(block, xbox-60, ybox, 50 ,50);
        ctx.drawImage(block, xbox-100, ybox, 50 ,50);
        ctx.drawImage(block, xbox-60, ybox-50, 50 ,50);
        ctx.drawImage(block, xbox-80, ybox, 50 ,50);
        ctx.drawImage(block, 100, ybox, 50 ,50);

        //ctx.drawImage(japan, player.x+25, player.y-60, 100,100);
        ctx.drawImage(grass, u, canvas.height-40, canvas.width, 50);
        ctx.fillStyle = "#8B4513";
        ctx.fillRect(u,canvas.height-30,canvas.width*3,100);
        ctx.drawImage(image, player.x-1200,player.y-25, player.width, player.height);
        ctx.drawImage(endflag, 1300, ybox-60, 120 ,120);
        ctx.drawImage(image, player.x-3625,player.y-25, player.width, player.height);
        if(fact10){
            ctx.fillStyle = "white";
            ctx.fillRect(xtext,ytext,300,300);
            ctx.fill();
            ctx.stroke();
            ctx.font = "15px Ariel";

            ctx.strokeText("One of the most common parts of",xtext + 10,ytext + 30);
            ctx.strokeText("culture in Eritrea is the coffee ceremony.", xtext + 15, ytext + 50);
            ctx.strokeText("Coffee is served as almost any event, such", xtext + 15, ytext + 70);
            ctx.strokeText("as visiting friends or family, festivities, or", xtext + 15, ytext + 90);
            ctx.strokeText("a part of daily life.", xtext + 15, ytext + 110);
    }
        if(fact11){
            ctx.fillStyle = "white";
            ctx.fillRect(xtext,ytext,300,300);
            ctx.fill();
            ctx.stroke();
            ctx.font = "15px Ariel";

            ctx.strokeText("Eritrea's nine ethnic groups have different",xtext + 10,ytext + 30);
            ctx.strokeText("music and dance styles. The most common", xtext + 15, ytext + 50);
            ctx.strokeText("instrument used is the drums.", xtext + 15, ytext + 70);
        }
          if(fact12){
            ctx.fillStyle = "white";
            ctx.fillRect(xtext,ytext,300,300);
            ctx.fill();
            ctx.stroke();
            ctx.font = "15px Ariel";

            ctx.strokeText("Eritrean food has many types of stews, which",xtext + 10,ytext + 30);
            ctx.strokeText("are called tsebhi. They are made from vegetables", xtext + 15, ytext + 50);
            ctx.strokeText("and meat and is served with a flatbread called injera.", xtext + 15, ytext + 70);
        }

        }
            if (hitFlag4){
                ctx.clearRect(0,0,width,height);
                ctx.drawImage(world, 0, 0, width,height);
                ctx.fillStyle = "white";
                ctx.fillRect(xtext,ytext,300,200);
                ctx.fill();
                ctx.stroke();
                ctx.font = "30px Ariel";
                ctx.strokeText("Your Score: "+score,xtext +15,ytext +60);
                ctx.strokeText("Move to the flag",xtext +15,ytext +100);
                ctx.strokeText("to restart",xtext +15,ytext +130);
                 ctx.drawImage(grass, u, canvas.height-40, canvas.width, 50);
                ctx.fillStyle = "#8B4513";
                ctx.fillRect(u,canvas.height-30,canvas.width*3,100);
                ctx.drawImage(info, xbox+200, ybox-130, 50 ,50);
                ctx.drawImage(startflag, 1300, ybox-60, 120 ,120);
                ctx.drawImage(image, player.x-4500,player.y-25, player.width, player.height);

        }
            if (hitFlag5){
                ctx.clearRect(0,0,width,height);
                score = 0;
                update();
            }




    }
 if (hitFlag5){
        ctx.clearRect(0,0,width,height);
        score = 0;
        update();
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
