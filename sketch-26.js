let r = 30;
let angle =0;
let time = 0;
function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(220,20,202);
  
  for(let j =0; j < height/r; j++){
    for(let i = 0; i < width/r; i++){
      const xAngle = map(0, 0, width, -4 * PI, 4 * PI, true);
      const yAngle = map(0, 0, height, -4 * PI, 4 * PI, true);
      // and also varies based on the particle's location
      const angle = (xAngle * (i / width)*4) + (yAngle * (j / height)*8);
    
    let bigX= i *  r;
    let bigY= j * r;
    
    let x = bigX + r * cos(TWO_PI * angle + time);
    let y = bigY + r * sin(TWO_PI * angle + time);
  
    noFill();
    stroke(120);
    ellipse(bigX, bigY, r * 2);
      
      let colorVal = map(angle,-1,1,-2,2);
      
      let rVal=0.5 - cos(colorVal*17.0)*225;
      let gVal=0.5 - cos(colorVal*13.0)*225;
      let bVal=0.5 - cos(colorVal*23.0)*225;
      
    fill(rVal,gVal,bVal,150);
    ellipse(x,y,r*2);
    }  
  }
  
  
  time+=0.01
  
}