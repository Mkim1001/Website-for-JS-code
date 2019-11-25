let Chakra

let fft; 

function preload(){
  
  yodel = loadSound('Chakra.mp3');

}

function setup() {
  createCanvas(1024, 255);
  noFill();
  yodel.rate(1.0);
  yodel.loop();
  
  

  
  
  fft = new p5.FFT();
  
  spectrum = fft.analyze();
  console.log(spectrum);
  console.log(spectrum.length);
}

function draw() {
  background(5);
  spectrum = fft.analyze();
  
  beginShape();
  for(let i=0; i<spectrum.length; i++){
  fill(random(25),random(255),random(255))
    strokeWeight(1)
    // noFill()
  xVal=map(i,0,spectrum.length, 0, width);
  yVal= map(spectrum[i],0,255, height,0);
    
ellipse(i*10,height/2,spectrum[i])
  }
  
}
