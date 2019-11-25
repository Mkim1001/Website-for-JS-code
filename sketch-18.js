let img;
let copy;


function preload(){


  img = loadImage('Painting.jpg');
  
  
  

}


function setup() {
  createCanvas(img.width, img.height);
  pixelDensity(1);
  
  cp = createImage(img.width, img.height);
 
  
  
}

function draw() {
  //background(220);
  
   img.loadPixels();
    cp.loadPixels();
  
  
    console.log(img.pixels.length/4);
  for(let x = 0; x < width; x++) {
    for(let y = 0; y < height; y ++){
  
      // i need to get each location in this square
      let loc = (x + y * width) * 4;
   
      let r = img.pixels[loc];
      let g = img.pixels[loc+1];
      let b = img.pixels[loc+2];
      let a = img.pixels[loc + 3];
      
      
      
      let centerX = width/2;
      let centerY = height/2;
      
      let distanceFromCenter = dist(mouseX, mouseY, centerX, centerY);
      
      let addR  = map(distanceFromCenter, 0, 500, 0, 100);
      
      
      r = r - addR;
      g = g - addR;
      b = r;
      
      
      cp.pixels[loc] = r;
      cp.pixels[loc+1] = g;
      cp.pixels[loc+2] = b;
      cp.pixels[loc + 3] = a;
      
      
    
    }
  } 
  
  img.updatePixels();
  cp.updatePixels();
  
   image(cp, 0, 0);
  
}