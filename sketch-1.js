function setup() {
  createCanvas(400, 400);

  background("blue");
  equilateralTriangle(0);
  equilateralTriangle(100,100);
  equilateralTriangle(200,100);
  equilateralTriangle(300,100);
  equilateralTriangle(0,100);
  equilateralTriangle(10);
  equilateralTriangle(200,150);
  equilateralTriangle(300,150);
  equilateralTriangle(400,150);
  equilateralTriangle(10,150);
  translate(0,100);
   equilateralTriangle(0,200);
  equilateralTriangle(100,200);
  equilateralTriangle(200,200);
  equilateralTriangle(300,200);
   equilateralTriangle(0,300);
  equilateralTriangle(100,300);
  equilateralTriangle(200,300);
  equilateralTriangle(300,300);
}


function equilateralTriangle(x,y){
  strokeWeight(10);
stroke(random(150,50), 10,90);
fill(random(100),random(200,150),100);
  beginShape();
    vertex(x,y);
    vertex(x+10,y);
    vertex(x+50,y-86.6);
    quadraticVertex(x-80,y-90,x+250,y+240);
    //vertex (150,random(0, 150));
  endShape(CLOSE);
}