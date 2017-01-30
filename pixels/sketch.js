var loops = 0;
var x = 1;
col1 = 255;
col2 = 0;
col3 = 255;
function setup() {
  background("white");
  createCanvas(100, 100);
}

function draw() {
  for(i = 0; i < width; i++){
    var col = color(random(0, 255), random(0, 255), random(0, 255));
    set(i, loops, col);
    updatePixels();
  }
  if(loops < 1 && x === -1){
    x = 1;
  }
  else if (loops > height && x === 1){
    x = -1
  }
  loops = loops + x;
}
