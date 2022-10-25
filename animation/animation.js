let blueButterfly = new Image();
blueButterfly.src = "https://i.ibb.co/4jhcpQ2/butterfly-sprite.png";

let blackAndWhiteButterfly = new Image();
blackAndWhiteButterfly.src = "https://i.ibb.co/MsKj3c4/black-and-white-2.png";

let orangeButterfly = new Image();
orangeButterfly.src =
  "https://i.ibb.co/16bCvX2/338-3382426-butterfly-sprite2-butterfly-sprite-sheet-removebg-preview.png";


blueButterfly.onload = function () {
  init();
};

let canvas = document.querySelector("canvas");
let cntx = canvas.getContext("2d");
const width = 130;
const height = 140;

function drawFrame(frameX, frameY, canvasX, canvasY, canvasZ, canvaz) {
  cntx.drawImage(
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

  cntx.drawImage(
    blackAndWhiteButterfly,
    frameX * width,
    frameY * height,
    width,
    110,
    canvasZ,
    100,
    width,
    height
  );

  cntx.drawImage(
    orangeButterfly,
    frameX * width,
    frameY * height,
    80,
    80,
    400,
    300,
    canvaz,
    height
  );

}

const cycleLoop = [0, 1, 2, 0, 3, 4];
const heightBlueLoop = [500, 450, 400, 300, 200, 100];
const widthBlueLoop = [900, 800, 600, 400, 200, 100];
const widthBlackLoop = [900, 500, 300, 100, 0];
const heightOrangeLoop = [400, 300, 200, 100, 0];

let currentLoopIndex = 0;
let frameCount = 0;

function step() {
  frameCount++;
  if (frameCount < 20) {
    window.requestAnimationFrame(step);
    return;
  }
  frameCount = 0;

  cntx.clearRect(0, 0, canvas.width, canvas.height);

  drawFrame(
    cycleLoop[currentLoopIndex],
    0,
    heightBlueLoop[currentLoopIndex],
    widthBlueLoop[currentLoopIndex],
    widthBlackLoop[currentLoopIndex],
    heightOrangeLoop[currentLoopIndex]
  );
  currentLoopIndex++;
  if (currentLoopIndex >= cycleLoop.length) {
    currentLoopIndex = 0;
  }
  window.requestAnimationFrame(step);
}

function init() {
  window.requestAnimationFrame(step);
}
