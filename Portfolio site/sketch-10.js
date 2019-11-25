//circle

var r = 100;
let angle=0;
let numCircles = 12;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
    translate(width/2, height/2);
  
  for(let i =0; i < 360/numCircles;i++){
  
    let radius=100;
    let x = radius* cos(angle);
    let y = radius * sin(angle);
    
  ellipse(x,y,10);
  
  angle=angle + numCircles;
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