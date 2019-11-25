var r = 100;
let angle=0;
let resolution = 40;
function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  orbitControl();
  background(220);
  
    translate(width/20, height/20);
  
  for(let i =0; i < resolution;i++){
  
    let radius=100;
    let x = radius* cos(angle);
    let y = radius * sin(angle);
    
   
  
  
  sphere(100,20,20);
  
  angle=angle + resolution;
  
}
 stroke(0);
  
  beginShape();
  for(var a=0; a < TWO_PI; a+=0.1){
    var x = r * cos(a);
    var y = r * sin(a);
    vertex(x,y);
   
  
  }
  endShape(CLOSE);
}