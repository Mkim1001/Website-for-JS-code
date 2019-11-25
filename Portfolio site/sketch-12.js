let depth = 15;

function setup() {
  createCanvas(400, 400, WEBGL);
 
}

function draw() {
  background(0);
  
  ambientLight(20,90,220);
  ambientMaterial(265);
  
  translate(-200,0);
  
  
  for(let j = 2; j < depth; j ++){
    for(let i = 0; i < depth*2; i ++){
      let currentZ = - 150 * j;
      let scaler = abs(currentZ);
      console.log(scaler);
      push()
      translate(-500 + i*200, 150, -150*j);
      rotateX(frameCount * 0.01*20/j);
      rotateY(PI/1.2);
      box(100)
      pop()
    }
  }

}



