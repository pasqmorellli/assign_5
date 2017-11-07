var myImg, mySong;
var col = 255;

function preload() {
  myImg = loadImage('./image/fluid.jpg');
  
  mySong = loadSound('./sound/renegade.mp3')
}

function setup() {
  createCanvas(500,500);
  
  mySong.play();
  analyzer = new p5.Amplitude();
  analyzer.setInput(mySong);
}

function draw() {
  var vol = analyzer.getLevel();
  
  if (vol >= 0.5) {
    col = 0;
  }
  
  text(vol,20,20);
  
  image(myImg, 0, 0, width, height);
  myImg.filter("threshold", 0.5);
  
  ellipse (width/2, height/2, vol*500, vol*500);
  fill(0, 0, col);
  noStroke();
  
  if (vol >= 0.5) {
    myImg.filter("invert");
  }
  
  col = 255;
}