let angle = 0, angle2 = 0;
let resolution = 40;
let r = 150;
let xAngle = 0;
let heightColumn = 10;

function setup() {
  //don't forget to specify webgl
  createCanvas(400, 400, WEBGL); 
frameRate(5);
}

function draw() {
  background(25,20,90);
  //orbitcontrol is a function that lets you move through the space using the mouse
  orbitControl();

  
  for(let j = 0; j < resolution-5; j++){
 //resolution is the number of spheres and also the number of loops
  for(let i = 0; i < resolution; i++){
   
    let x = r * sin(angle) * cos(angle2);
    let y = r * sin(angle)* sin(angle2);
    let z = r * cos(angle);


    
    //push and pop around the translation so it only applies to the one sphere in this loop
    push()
    translate(x,y, z);

    sphere(10);
    
    
    
    
    
    
    pop()
    
    //increment the angle by 2pi (a full circle) divided by the number of loops
    angle+=TWO_PI/resolution; 
  } 
    angle2+=PI/resolution;
  }
}


  