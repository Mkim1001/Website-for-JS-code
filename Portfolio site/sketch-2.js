function setup() {
  createCanvas(800, 800);
  
  background(30,20,60,60);
  
  // beginShape()
  // vertex(150,50);
  // bezierVertex(-20,-40,0,0,10,150);
  // bezierVertex(150,250,500,125,100,300);
  // endShape(CLOSE);
  
  
  manyShapes();
  manyShapes();
  manyShapes();
  manyShapes();
  manyShapes();
  manyShapes();
  manyShapes();
  manyShapes();
  manyShapes();
  manyShapes();
  manyShapes();
  manyShapes();
  
  
  
}



function myShape(){

  
  scale(0.95);
  stroke(random(130,20),0,120);
  strokeWeight(random(20));
  fill(200,0,random(180),20);
  beginShape();
  vertex(90,350);
  bezierVertex(random(-20,30),-140,20,300,120,10);
  bezierVertex(200,20,50,12,190,100);
  endShape(CLOSE);

}


function manyShapes(){


  myShape();
  translate(30,0);
  myShape();
    translate(30,0);
  myShape();
    translate(30,0);
  myShape();
    translate(30,0);
  myShape();
    translate(30,0);
  myShape();
    translate(30,0);
  myShape();
    translate(30,0);
  myShape();
}