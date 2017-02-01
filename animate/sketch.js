var video;
var rads = 0;
function setup() {
  canvas = createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  background('white');
  push();
  translate(width/2, height/2);
  rotate(rads);
  imageMode(CENTER);
  image(video, 0, 0, width, height);
  rotate(rads);
  pop();
  push();
  translate(width/4, height*.75);
  rotate(rads);
  textSize(20);
  fill('hotPink');
  text('You spin me right round baby right round', -100, 20);
  pop();
  rads = rads + .02;

}
