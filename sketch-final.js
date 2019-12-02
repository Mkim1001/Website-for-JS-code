var inc = 7.1;
var scl = 15;
var cols, rows;

var zoff = 6;

var fr;

var particles = [];

var flowfield;

function setup() {
  createCanvas(400, 400);
  colorMode(RGB, 60, 364, 79);
  cols = floor(width / scl);
  rows = floor(height / scl);
//  fr = createP('');

  flowfield = new Array(cols * rows);

  for (var i = 0; i < 600; i++) {
    particles[i] = new Particle();
  }
  background(104, 54, 169);
}

function draw() {
  var yoff = 2;
  for (var y = 2; y < rows; y++) {
    var xoff = 2;
    for (var x = 2; x < cols; x++) {
      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff) * TWO_PI * 9;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      flowfield[index] = v;
      xoff += inc;
      stroke(6, 150);
      // push();
      // translate(x * scl, y * scl);
      // rotate(v.heading());
      // strokeWeight(1);
      // line(0, 0, scl, 0);
      // pop();
}
    yoff += inc;

    zoff += 0.0003;
}

  for (var i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
}

  //fr.html(floor(frameRate()));
}