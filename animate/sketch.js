//SHOW THIS LINE CHROME
var video;
var i;
var photos;

function setup() {
  colorMode(HSB);
  createCanvas(500, 500);

  video = createCapture(VIDEO);
  video.hide();
  photos = [];
  i = 0;
}

function draw() {
  if (frameCount % 30 === 0){
    photos[i] = video.get();
    tint(color(floor(random(255)), 50, 100));
    image(video, ((i % 25 ) % 5) * 70, floor((i % 25) / 5) * 70, 70, 70);
    i++;
  }
}
