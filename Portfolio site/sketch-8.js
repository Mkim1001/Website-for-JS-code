let myBubble;
let myBubble2;
let myWall;
let walls = [];

function setup() {
  createCanvas(400, 400);
   background(220);
  
  
  myBubble = new Bubble(100, 200, 50, 240, 1);
 myBubble2 = new Bubble(200, 300, 10, 40 * 110, 9.5);


  
  walls[0] =  new Wall(width - 10,0+10, width-10, height - 10); 
 walls[1] = new Wall(width-150, height -150, 0+150, height - 150);
walls[1] = new Wall(0+10, height - 10, 0 + 10, 0 + 10);
 walls[3]= new Wall(350, 350, 360, 50);
  

  
}

function draw() {
 background("Green");
  myBubble.checkWalls();
  myBubble.move();
  myBubble.display();
  
  
    myBubble2.checkWalls();
    myBubble2.move();
    myBubble2.display();
  
    for(let i = 0; i < 2; i++){ 
 walls[i].display();
  }
  
}




function Bubble(x, y, size, freq, speed){
  this.x = x;
  this.y = y;
  this.size = size;
  this.xspeed = speed;
  this.yspeed = speed;
     this.env = new p5.Envelope(); 
 this.env.setADSR(0.001, 0.19, 1.5);
  this.env.setRange(2.0, 0.0);
  this.osc = new p5.Oscillator();
  this.osc.setType('sine');
  this.osc.freq(freq);
  this.osc.amp(this.env);
  this.osc.start();

  this.display = function(){
  
    ellipse(this.x, this.y, this.size);
  }

  this.checkWalls = function(){
  
    if(this.x > width - this.size/1 - 9 || this.x < this.size/1 + 9) {
        this.xspeed = this.xspeed * -1;
        this.playSound();
    }
    
    if (this.y > height - this.size/2 - 1 || this.y < this.size/2 + 10){
      this.yspeed = this.yspeed * -1;
      this.playSound();
    }
  }
  
  
  this.move = function(){
  
    this.x = this.x + this.xspeed;
    this.y = this.y  + this.yspeed;
    
  };

  
  this.playSound = function(){
    this.env.play();
    
  }

}



function Wall(x1, y1, x2, y2){
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
  
  this.display = function(){
  
    strokeWeight(5);
    stroke("purple");
    line(this.x1, this.y1, this.x2, this.y2);
  
  }
  



}