
let img, bg;
let angle =0;
let myGraphic;



function preload(){

  img = loadImage("Painting.jpg");
  bg = loadImage("IMG_E0234.jpg"); 

}

function setup() {
 
  createCanvas(400, 400, WEBGL);
  noStroke();
  
   
  myGraphic = createGraphics(200, 200);
  myGraphic.background(220,90,220);
  myGraphic.fill(200,20,200);
  myGraphic.ellipse(width/2, height/2, 200);
}

function draw() {
  background(0);
  pointLight(25, 55, 2055, 100, 100, 300);
  
  texture(bg);
  rect(-200, -200, 400, 400);
  
  rotateY(angle);
  rotateZ(angle);
  texture(img);
  sphere(100);
   torus(25, 25);
   angle+=0.01
}