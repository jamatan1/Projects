
var canvas;
var video;
var serious;
var trans;
var bg;
var bg1 = "libraries/space.mp4";
var bg2 = "libraries/fireworks.mp4";
var bg3 = "libraries/lightspeed.mp4";
function preload(){
  bg = createVideo(null);
  video = createVideo('libraries/dog.mp4');
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
  video.hide();
  playVideo(video);

  /*bg1.size(640, 480);
  bg1.elt.muted = true;
  playVideo(bg1);
  bg1.hide();

  bg2.size(640, 480);
  bg2.elt.muted = true;
  playVideo(bg2);
  bg2.hide();

  bg3.size(640, 480);
  bg3.elt.muted = true;
  playVideo(bg3);
  bg3.hide();*/

  bg.src = bg1;
  bg.elt.muted = true;
  bg.id("bgvideo");
  bg.loop();

  var seriously = new Seriously();

  var trans = seriously.transform('reformat');
  trans.src = bg;
  trans.width = 480;
  trans.height = 640;

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
  vid.loop();
}

function draw() {
  background('white');
  image(bg, 0, 0);
  image(serious, mouseX, mouseY, 100, 100);
}


function keyPressed(){
  if(bg !== bg1 && keyCode === 49){
    bg.src = bg1;
    bg.loop();
  }
  if(bg !== bg2 && keyCode === 50){
    /*bg.pause();
    bg = bg2;
    bg.elt.muted = true;
    bg.play();*/
    bg.src = bg2;
    bg.loop();

  }
  if(bg !== bg3 && keyCode === 51){
    /*bg.pause();
    bg = bg3;
    bg.elt.muted = true;
    bg.play();*/
    bg.src = bg3;
    bg.loop();
  }
}
