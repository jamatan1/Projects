var video;
var rads = 0;
var photos;
var i;
function setup() {
  canvas = createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  rads = 0;
  photos = [];
  i = 0;
}

function draw() {
  background('white');
  //image(video, 0, 0, width, height);
  if(frameCount % 60 === 0){
    photos[i % 70] = video.get();
    i++;
  }
  for (var l = 0; l < photos.length; l++){
  image(photos[l], floor((l % 5) * 70), floor((l / 5) * 70), 70, 70);
}
}
