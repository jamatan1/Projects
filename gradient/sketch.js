var loops = 0;
var x = 1;
var r = 255;
var g = 0;
var b = 0;
var diag;
function setup() {
  background("white");
  createCanvas(100, 100);
  diag = (Math.sqrt(width**2 + height**2));
}
function draw(){
  for(i = 0; i < width; i++){
    var col = color(r, g, b);
    set([i, 100], loops, col);
    updatePixels();
}
loops = loops + x;
  r = r - (255/(diag*10));
  b = b + (255/(diag*10));
  if(loops === 100){
    noLoop();
  }
}
