var video;
var vScale = 8;

function setup() {
  createCanvas(320, 240);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.hide();

}

function draw() {
  background('black');

  video.loadPixels();
  loadPixels();

  for(var y = 0; y < height; y++){
      for(var x = 0; x < width; x++){
        var index = (x + y * width) * 4;
        var r = video.pixels[index+0];
        var g = video.pixels[index+1];
        var b = video.pixels[index+2];

        var bright = (r + g + b)/3;

        var w = map(bright, 0, 255, 0, vScale);

        noStroke();
        fill(255);
        rectMode(CENTER);
        rect(x*vScale, y*vScale, w, w);
      }
  }
}
