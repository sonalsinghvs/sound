var amplitude;
var bird;
var circleX = 500
var circleY = 500

function preload() {
  bird = loadSound('bird.wav');
}

function setup() {
  let cnv = createCanvas(800, 800);
  cnv.mousePressed(canvasPressed);
  background(220);
  amplitude = new p5.Amplitude();
}

function canvasPressed() {
  bird.play();
}

function draw() {
  background(220);
  text('Tap to play bird', 50, 50);

  let level = amplitude.getLevel();
  stroke('white');
  strokeWeight(2);
  textSize(20);
  fill('orange');
  circleX = level * 5000
  circleY = level * 2500 
  ellipse(200, 200, circleX, circleY);
}
