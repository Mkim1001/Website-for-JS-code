
let counter = 0;
let angle = 0;
let numColors = 2;
let colors = [[220,90,90],[90,90,290]];

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(20);
 // myShape();
  
  for(let i = 0; i < 15; i++){
  push()
  scale(0.3);
    translate(i*150, 0);
    
    
  myCircle(angle);
  pop()  
  }
    
angle++
}


function myCircle(angle){


  fill(colors[int(random(numColors))])
  
  beginShape()
    vertex(width/2, height/2);
  
  for(let i = 0; i < 40; i++){
      let radius = 10*random(5,10);
      let x = sin(angle/140*i) * radius;
      let y = cos(angle/10*i) * radius;
     vertex(x+100, y+240); 
  }
  
  endShape(CLOSE);


}







function myShape(){

  fill(colors[int(random(numColors))])
  
  beginShape()
    vertex(130,40);
for(let i = 0; i < 10; i++){
  
 vertex(random(100,300), random(100,300)); 
}
  
  endShape(CLOSE);

}