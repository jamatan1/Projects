//SHOW THIS LINE CHROME
var video;
var photo = {};
var i = 0;
var photos = [];

function setup() {
  createCanvas(500, 500);
  video = createCapture(VIDEO);
  video.hide();
  if(photos !== undefined){
    console.log("we good setup");
  }
  else{
    console.log("we bad setup");
  }
}

function draw() {
  photo.img = video.get();
  photo.tint = color(random(255), random(255), random(255));
  background("white");
  if (frameCount % 60 === 0){
  photos[i % 70] = photo.img;
  i++;
  }
  for (var l = 0; l < photos.length; l++){
    tint(photo.tint);
    image(photos[l], (l % 5) * 70, floor(l / 5) * 70, 70, 70);
  }
}
