var video;
function setup() {
  canvas = createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  background('white');
  image(video, 0, 0, width, height);
}
