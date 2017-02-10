var video;
var r;
var g;
var b;
var chroma;
var target;
var src;
var rSlider;
var gSlider;
var bSlider;
function setup() {
  canvas = createCanvas(640, 480, WEBGL);
  canvas.id('p5canvas');
  video = "#testvideo";
  video.size = (width, height);

    rSlider = createSlider(0, 1, (66/255), (1/255));
    rSlider.position(width, 20);
    gSlider = createSlider(0, 1, (195/255), (1/255));
    gSlider.position(width, 50);
    bSlider = createSlider(0, 1, (31/255), (1/255));
    bSlider.position(width, 80);

  seriously = new Seriously();
  src = seriously.source(video);
  target = seriously.target('#p5canvas');
  chroma = seriously.effect('chroma');
  chroma.source = src;
  target.source = chroma;


}

function draw() {

  var r = rSlider.value();
  var g = gSlider.value();
  var b = bSlider.value();
  chroma.screen = color(r, g, b);
  //chroma.clipWhite = 1;
  //chroma.clipBlack = 0;
  seriously.go();
}
