let numberVertexes = 90;
let radius = 100;
let velocity1 = 0
let velocity2 = 0
let angle = 9;
let angleVelocity = 0;
function setup() {
  createCanvas(400, 400);
frameRate (20);


}

function draw() {
 velocity2 = millis()/1000;
  velocity1 = millis()/10000;
  background(20);
  translate (width/2, height/2);
  
beginShape();
  
  
  for(let i = 0; i<numberVertexes; i++){
    
    let x = sin(angle*velocity1)* radius;
    let y =cos(angle* velocity2+2)* radius;
  stroke(50);
  strokeWeight(5);
  vertex(x,y);
    angleVelocity+=0.1;
    //console.log(angleVelocity);
    angle+=angleVelocity;
  }
  endShape();

}