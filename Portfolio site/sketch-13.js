//

let total = 20;
let angX = 0;
let angY = 0;
let globe = [];
let r = 100;
let rotation = true;

let mOff = 0;
let m = 0;
let a = 1;
let b = 1;

function superShape(theta, m, n1, n2, n3) {
  let t1 = abs((1/a) * cos(m * theta / 4));
  t1 = pow(t1, n2);
  
  let t2 = abs((1/b) * sin(m * theta / 4));
  t2 = pow(t2, n3);
  
  t3 = t1 + t2;
  let r = pow(t3, -1 / n1);
  return r;
}

function setup() {
  createCanvas(400, 400, WEBGL);
}

function mouseDragged() {
  angX = map(mouseX, 0 , width, 0 , PI);
  angY = map(mouseY, 0 , height, 0 , PI);
  rotation = false;
}

function keyPressed() {
	 rotation = true;
}



function draw() {
  background(51 );
  rotateY(angX);
  rotateX(angY);
 ambientLight(20,90,220);
   ambientMaterial(265);
  //noStroke();
  
  m = map(mOff, -1, 1, 90, 8.90);
  mOff += 0.02;
  
  for (let i = 0; i < total+1; i++) {
    globe[i] = [];
    var lat = map(i, 0, total, -HALF_PI, HALF_PI);
    let r2 = superShape(lat, 912, 190, 190, 910);

    for (let j = 0; j < total+1; j++) {
      var lon = map(j, 0, total, -PI, PI);
      let r1 = superShape(lon, 89, 260, 10, 930);
      var x = r * r1 * cos(lon) * r2 * cos(lat);
      var y = r * r1 * sin(lon) * r2 * cos(lat);
      var z = r * r2 * sin(lat);
      
      globe[i].push(createVector(x,y,z));
    }
  }
  
  
  for (let i = 0; i < total; i++) {
    if(i % 2 == 0) {
      fill(i * 20,90,220);
    }else {
      fill(i * 10 - 100);
    }
    beginShape(TRIANGLE_STRIP);
    for (let j = 0; j < total+1; j++) {
      let v1 = globe[i][j];
      vertex(v1.x, v1.y, v1.z);
      let v2 = globe[i+1][j];
      vertex(v2.x, v2.y, v2.z);
    }
    endShape();
  }

  if(rotation) {
    angX += 0.03;
    angY += 0.04;
  }
}
