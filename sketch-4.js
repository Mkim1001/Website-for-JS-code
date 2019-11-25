let diameter = 50;
let numberCircles = 10
let xBegin = 0;
let yBegin = 0;
let color1 = [20,80,110];
let color2 = [90,90,220];
let color3 = [220,240,210];
let color4 = [190,230,250];

//let x = 100;
//let y = 100;
let counter = 0;
let rotationVal = 0
let addX = 0;
function setup() {
  createCanvas(400, 400);
  noStroke();
  
}

function draw() {
  background(20,22);
  

  
  
  for(let i = 0; i < numberCircles; i++){
    for(let j = 0; j < numberCircles; j++){
    let addX = 0;
    let x = diameter*i + addX;
    let y = diameter*j + addX;
    
   if(i%2==0){
       rotationVal = PI;
       addX = diameter/2;
       thisColor = color4;
   } else {
       rotationVal = 0;   
       thisColor = color3
     }
      
  if(j%2 == 0){
    rotationVal = rotationVal + PI/4;
    thisColor = color1;
  }else{
    rotationVal = rotationVal - PI*4;
    thisColor = color1;
  }
      x = x + addX;
      
    push();
    
translate(x+2,y*1);    
     rotate(rotationVal+counter/100);
      translate(-x, -y);
    
      fill(color1);
      arc(x -10, y - 100, diameter, diameter, 1000, PI);
      fill(color2);
      arc(x -100, y - 100, diameter, diameter, PI, TWO_PI );
    pop();
    

    }
  }

  counter+=1
}