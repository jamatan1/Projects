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
  background("white");
  if (frameCount % 30 === 0){
    var photo = {};

    photo.img = video.get();
    photo.tint = color(floor(random(256)), random(256), random(256));

    photos[i % 70] = photo;
    i++;
  }

  for (var l = 0; l < photos.length; l++){
    push();
    tint(photos[l].tint);
    image(photos[l].img, (l % 5) * 70, floor(l / 5) * 70, 70, 70);
    noTint();
    pop();
  }
}
