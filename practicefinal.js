var jumping = false;
function jump() {

  if (!jumping) {
    jumping = true;
    setTimeout(land, 500);
  }
}
function land() {

  jumping = false;
}
function redraw() {

  var x = charX;
  var y = charY;
  var jumpHeight = 45;

  canvas.width = canvas.width; // clears the canvas

  // Draw shadow
  if (jumping) {
    drawEllipse(x + 40, y + 29, 100 - breathAmt, 4);
  } else {
    drawEllipse(x + 40, y + 29, 160 - breathAmt, 6);
  }

  if (jumping) {
    y -= jumpHeight;
  }

  if (jumping) {
    context.drawImage(images["leftArm-jump"], x + 40, y - 42 - breathAmt);
  } else {
    context.drawImage(images["leftArm"], x + 40, y - 42 - breathAmt);
  }

  if (jumping) {
    context.drawImage(images["legs-jump"], x - 6, y );
  } else {
    context.drawImage(images["legs"], x, y);
  }

  context.drawImage(images["torso"], x, y - 50);
  context.drawImage(images["head"], x - 10, y - 125 - breathAmt);
  context.drawImage(images["hair"], x - 37, y - 138 - breathAmt);

  if (jumping) {
    context.drawImage(images["rightArm-jump"], x - 35, y - 42 - breathAmt);
  } else {
    context.drawImage(images["rightArm"], x - 15, y - 42 - breathAmt);
  }

  // Draw eyes
  drawEllipse(x + 47, y - 68 - breathAmt, 8, curEyeHeight);
  drawEllipse(x + 58, y - 68 - breathAmt, 8, curEyeHeight);
}
