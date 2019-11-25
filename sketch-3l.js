
let bottom = 350;
let side = 50;

function setup() {
  createCanvas(400,400);
  background(20,222,222);


}
  
  function draw(){
  stroke(100,100,100);
strokeWeight(10);
  
  for(let x = 1; x < 7; x++){
    let xval = x*50;
    //console.log(xval, bottom);
    point(xval+50,bottom);
  }
    
    for(let j = 0; j < 6; j++){
    
      let yValue = 300 - (j*50);
      console.log(yValue)
    point(side, yValue);
  
  }
       for(let i = 0; i < 6; i++){
    
         
         stroke(random(255),random(255),random(255));
        
         strokeWeight(3);
   
         let x1 = 50*i+50+50;
         let y2 = 50*i+50;
        
        line(x1,350,50,y2);
    
    }

}    


