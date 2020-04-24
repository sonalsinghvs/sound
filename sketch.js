let level;
let mySound;
let lineX = 250
let lineY = 250
function preload() {
  mySound = loadSound('bird.wav');
}

function setup() {
  let cnv = createCanvas(800, 800);
  cnv.mousePressed(canvasPressed);
  background(220);
  text('tap here to play', 10, 20);
  amplitude = new p5.Amplitude();
}

function canvasPressed() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  mySound.play();
}

function draw() {
  background(220);
  text('tap to play', 20, 20);

  let level = amplitude.getLevel();
  let size = map(level, 0, 1, 0, 200);
  ellipse(width, height, size, size);
}