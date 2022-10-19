let blueButterfly = new Image();
blueButterfly.src = "https://i.ibb.co/4jhcpQ2/butterfly-sprite.png";
blueButterfly.onload = function () {
  init();
};

//leave one as sprite, and others as gifs? 

//function loadBlack() {
//   let blackAndWhiteButterfly = new Image();
//   blackAndWhiteButterfly.src = "https://i.ibb.co/MsKj3c4/black-and-white-2.png";
//   blackAndWhiteButterfly.onload = function () {
//     init();
//   };
//}

let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
const width = 130;
const height = 140;
//ctx.drawImage(img, 0, 0, 400, 346, 0, 0, 400, 346);

function drawFrame(frameX, frameY, canvasX, canvasY) {
  ctx.drawImage(
    blueButterfly,
    frameX * width,
    frameY * height,
    width,
    height,
    canvasX,
    canvasY,
    width,
    height
  );
}
const cycleLoop = [0, 1, 0, 2];
let currentLoopIndex = 0;
let frameCount = 0;

function step() {
  frameCount++;
  if (frameCount < 30) {
    window.requestAnimationFrame(step);
    return;
  }
  frameCount = 0;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawFrame(cycleLoop[currentLoopIndex], 0, 0, 0);
  currentLoopIndex++;
  if (currentLoopIndex >= cycleLoop.length) {
    currentLoopIndex = 0;
  }
  window.requestAnimationFrame(step);
}

function init() {
  //   ctx.drawImage(blueButterfly, 0, 0, width, height, 0, 0, width, height);
  //   ctx.drawImage(blueButterfly, width, 0, width, height, width, 0, width, height);
  //   ctx.drawImage(blueButterfly, width * 2, 0, width, height, width * 2, 0, width, height);
  //    drawFrame(0, 0, 0, 0);
  //    drawFrame(1, 0, width, 0);
  //    drawFrame(0, 0, width * 2, 0);
  //    drawFrame(2, 0, width * 3, 0);
  window.requestAnimationFrame(step);
}
