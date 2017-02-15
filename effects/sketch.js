
var canvas;
var graphics;
var video;
var serious;
var bg;
var bg1;
var bg2;
var bg3;
function preload(){
  video = createVideo("libraries/dog.mp4", confirmLoad);
  bg1 = createVideo("libraries/space.mp4", confirmLoad);
  bg2 = createVideo("libraries/wormhole.avi", confirmLoad);
  bg3 = createVideo("libraries/lightspeed.mp4", confirmLoad);
}
function setup() {

  canvas = createCanvas(640, 480);
  canvas.id('p5canvas');


  serious = createGraphics(640, 480, WEBGL);
  serious.size(640, 480);
  serious.id('seriouscanvas');
  serious.hide();

  video.id("mainvideo");
  video.size(640, 480);
  video.muted = true;
  video.loop();
  video.hide();
  playVideo(video);

  bg = bg2;
  bg.id("bgvideo");
  bg.size(640, 480);
  bg.muted = true;
  bg.loop();
  bg.hide();
  playVideo(bg);


  graphics = createGraphics(640, 480);
  graphics.size(640, 480);
  graphics.id('graphicscanvas');
  graphics.hide();

  var seriously = new Seriously();

  /*var trans = seriously.transform('reformat');
  trans.width = width;
  trans.height = height;*/

  var src = seriously.source('#mainvideo');
  var target = seriously.target('#seriouscanvas');
  var chroma = seriously.effect('chroma');

  target.source = chroma;
  chroma.source = src;

  seriously.go();
}

function confirmLoad() {
  console.log("Video loaded.");
}

function playVideo(vid){
  vid.play();
}

function draw() {
  image(bg, 0, 0);
  image(serious, mouseX, mouseY, 100, 100);
}

function keyPressed(){
  if(bg !== bg1 && keyCode === 49){
    bg = bg1;
  }
  if(bg !== bg2 && keyCode === 50){
    bg = bg2;
  }
  if(bg !== bg3 && keyCode === 51){
    bg = bg3;
  }
}
