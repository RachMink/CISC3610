var canvas, ctx;
var step,
  steps = 0;

function init(){
  canvas = document.getElementById("cartoonCanvas");
  ctx = canvas.getContext("2d");
  var backgroundGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  // add colors to the gradient
  backgroundGradient.addColorStop(1, "#ffaa00");
  backgroundGradient.addColorStop(0.75, "#fa7373");
  backgroundGradient.addColorStop(0.5, "#da73fa");
  backgroundGradient.addColorStop(0.25, "#73c6fa");
  backgroundGradient.addColorStop(0, "#FFFFFF");
 
  // Now draw!
  ctx.fillStyle = backgroundGradient;

  ctx.fillRect(0, 0, canvas.width, canvas.height);

  //sun
  ctx.fillStyle = "rgb(255, 170, 0, .4)";
  ctx.beginPath();
  ctx.arc(600, 330, 75, 0, 2 * Math.PI);
  ctx.fill();

  // left cloud
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.beginPath();
  ctx.arc(100, 170, 100, 0, 2 * Math.PI);
  ctx.fill();

  for (var i = 0; i < 3; i = i + 2) {
    ctx.beginPath();
    ctx.arc(i * 100, 190, 70, 0, 2 * Math.PI);
    ctx.fill();
  }

  //right cloud
  ctx.beginPath();
  ctx.arc(800, 20, 100, 0, 2 * Math.PI);
  ctx.fill();

  for (var i = 0; i < 3; i = i + 2) {
    ctx.beginPath();
    ctx.arc(700 + i * 100, 50 + i * 10, 60, 0, 2 * Math.PI);
    ctx.fill();
  }

  //Caption Text
  ctx.fillStyle="black";
  ctx.font = "30px Arial";
  ctx.fillText("Let's Go to Mars", 500, 50);

  //iceberg
  ctx.fillStyle = "#f79f57";
  ctx.beginPath();
  ctx.moveTo(900, 25);
  ctx.lineTo(800, 75);
  ctx.lineTo(600, 400);
  ctx.lineTo(550, 350);
  ctx.lineTo(450, 380);
  ctx.lineTo(400, 500);
  ctx.lineTo(300, 600);
  ctx.lineTo(1550, 600);
  ctx.lineTo(1110, 200);
  ctx.lineTo(1000, 200);
  ctx.fill();

  //mt in front A
  ctx.fillStyle = "#fad44b";
  ctx.beginPath();
  ctx.moveTo(800, 400);
  ctx.lineTo(600, 600);
  ctx.lineTo(900, 600);
  ctx.fill();

  //mt in front shadow A
  ctx.fillStyle = "#d1b13f";
  ctx.beginPath();
  ctx.moveTo(800, 400);
  ctx.lineTo(810, 600);
  ctx.lineTo(900, 600);
  ctx.fill();

  //mt in front B
  ctx.fillStyle = "#ff75c1";
  ctx.beginPath();
  ctx.moveTo(1000, 300);
  ctx.lineTo(830, 600);
  ctx.lineTo(1100, 600);
  ctx.fill();

  //mt in front shadow B
  ctx.fillStyle = "#c2518f";
  ctx.beginPath();
  ctx.moveTo(1000, 300);
  ctx.lineTo(1110, 600);
  ctx.lineTo(1000, 600);
  ctx.fill();

  //shadowing
  ctx.fillStyle = "#fa7d4b";
  ctx.beginPath();
  ctx.moveTo(900, 25);
  ctx.lineTo(800, 350);
  ctx.lineTo(1000, 200);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(550, 350);
  ctx.lineTo(600, 400);
  ctx.lineTo(650, 500);
  ctx.fill();

  //UFO legs
  ctx.beginPath();
  ctx.fillStyle = "#fab32d";
  ctx.moveTo(80, 530);
  ctx.lineTo(80, 590);
  ctx.lineTo(110, 530);
  ctx.fill();

  ctx.moveTo(320, 530);
  ctx.lineTo(320, 590);
  ctx.lineTo(290, 530);
  ctx.stroke();
  ctx.fill();

  ctx.moveTo(190, 530);
  ctx.lineTo(210, 530);
  ctx.lineTo(200, 590);
  ctx.stroke();
  ctx.fill();

  //sin wave ground
  ctx.beginPath();
  ctx.fillStyle = "#fadc64";
  ctx.moveTo(0, 575);
  ctx.quadraticCurveTo(100, 550, 200, 575);
  ctx.quadraticCurveTo(300, 600, 400, 575);
  ctx.quadraticCurveTo(500, 550, 600, 575);
  ctx.quadraticCurveTo(700, 600, 800, 575);
  ctx.quadraticCurveTo(900, 550, 1000, 575);
  ctx.quadraticCurveTo(1100, 600, 1200, 575);
  ctx.lineTo(1200, 600);
  ctx.lineTo(0, 600);
  ctx.fill();

  //UFO bottom discs
  for (let i = 0; i <= 4; i++) {
    for (let j = 0; j <= 4; j++) {
      switch (i) {
        case 0:
          ctx.fillStyle = "#ffa600";
          break;
        case 1:
          ctx.fillStyle = "#d0ff00";
          break;
        case 2:
          ctx.fillStyle = "#00fc88";
          break;
        case 3:
          ctx.fillStyle = "#00fcf8";
          break;
      }
      ctx.beginPath();
      ctx.ellipse(200, 530 - 10 * i, 25, 175, Math.PI / 2, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();
    }
  }

  //UFO dome (radial color)
  var rg = ctx.createRadialGradient(200, 500, 125, 300, 270, 125);
  // add colors
  rg.addColorStop(1, "da73fa");
  rg.addColorStop(0.5, "00fcf8");
  rg.addColorStop(0, "00fcf8");
  // set the fill style to the new gradient
  ctx.fillStyle = rg;
  // draw some filled objects; in this case the dome
  ctx.beginPath();
  ctx.arc(200, 500, 125, 0, Math.PI, true);
  ctx.fill();
  ctx.closePath();

  // top antena
  ctx.beginPath();
  ctx.moveTo(190, 375);
  ctx.lineTo(210, 375);
  ctx.lineTo(200, 320);
  ctx.fillStyle = "#d0ff00";
  ctx.fill();

  ctx.fillStyle = "grey";
  ctx.beginPath();
  ctx.ellipse(200, 320, 10, 10, Math.PI / 2, 0, 2 * Math.PI);
  ctx.fill();

  //screen with moving text
  roundedRect(ctx, 120, 420, 160, 50, 15);
  step = 0;
  steps = 280;
  ctx.clip();
  RunTextLeftToRight();
  ctx.restore();
}

function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radius);
  ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
  ctx.arcTo(x + width, y, x + width - radius, y, radius);
  ctx.arcTo(x, y, x, y + radius, radius);
  ctx.fill();
}

//text animation
function RunTextLeftToRight() {
  step++;
  ctx.clearRect(120, 420, 160, 50);
  ctx.save();
  ctx.translate(step, 450);
  ctx.font ="bold 16px Arial";
  ctx.fillText("Welcome Earthlings!", 0, 0);
  ctx.restore();
  if (step == steps) step = 0;
  if (step < steps) var t = setTimeout("RunTextLeftToRight()", 20);
}
