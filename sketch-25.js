
let iterations = 55;


function setup() {
  createCanvas(400, 400);
pixelDensity(1);
loadPixels();
  
  
for (let x=0; x< width; x++){
 for (let y=0; y<height; y++){
   
   let loc = (x+y*width)*4;
  

     
    let a = map(x, 0, width, -2, 2);
     let b = map(y, 0, height, -2, 2);
     
     let originalA = a;
     let originalB = b;
    
   
    let n = 0;
  
   while (n < iterations){
     
     let aa = a * a - b * b;
     let bb = 2 * a * b;
     
     a = aa + originalA;
     b = bb + originalB;
     
     if(a+b > 16) {
       
      break  
     }
      
      n++ 
   }
   
   
   let colorVal = map(n, 0 , iterations, 0, 255);
     
     
   

     
     
     if (n === 255){
       
      colorVal = 0; 
       
     }
     
     let myRed = map(0.5-cos(n*17.0)/2.0, 0.0, 1.0, 0, 55);
     let myGreen = map(0.5-sin(n*13.0)/9.0,0.0, 1.0, 0, 55);
     let myBlue= map(0.5-tan(n*23.0)/2.0, 0.0, 1.0, 0, 255);
     
   
   
   pixels[loc] = myRed;
    pixels[loc+1]=myGreen;
    pixels[loc+2] = myBlue;
    pixels[loc+3] = 255;
   
   
   
 }
  
  
}
  updatePixels();
  

}
