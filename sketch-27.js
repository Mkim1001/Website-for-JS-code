//the width of each pixel-like cell
let cellWidth = 10;
//an array to hold our cell states, zeros and ones
let cells = [];
//a counter to keep track of how many generations we've had so far
let generation = 1;
//the ruleset, which will determine the next generation
//there are 8 values which means this is an 8 bit binary code
//which also means there are 256 possible variations
// let ruleset = [0, 1, 0, 1, 1, 0, 1, 0];






function setup() {
  createCanvas(400, 800);
  
function keyPressed(){
 if (key === ' '){ 
      reset();
 }}
  
 ruleset = new Array(8);
  for(let i = 0; i < ruleset.length; i++){
    
    ruleset[i]  = floor(random(0,2));
  }
  //intialize the cell array.  here there will be 40 cells, all zero.
  cells = new Array(width/cellWidth);
  for(let i = 0; i < cells.length; i++){
    cells[i]= 0;
  }
  //wait, let's make the center one be a 1.
  cells[cells.length/2] = 1;
  
  //draw the cells, make a new generation, then draw that.
  //all right here's your task: automate this so it draws the whole screen.
  drawCells();
  
  for(let i=0; i < height/cellWidth; i++){
  generate();
  drawCells();
  
  }

}



//this function will use the ruleset to make the next generation
function generate(){
  //initialize a new array to store the next generation.
  let nextGen = [];
  for(let i = 0; i < cells.length; i++){
    nextGen[i] = 0;
  }
  
  //find the neighboring cells for each cell that isn't on the edge and send the three of them to the rules function
  for(let i = 0; i < cells.length; i++){
   let left = cells[i-1];
    let me = cells[i]
    let right = cells[i+1];
    //we'll 
    nextGen[i] = rules(left, me, right);
  }
  
  //right the new data over the old data
  cells = nextGen;
  //increment the generation counter
  generation++;
  
}


function drawCells(){

  //if 1 then whiteish if zero then blackish
  for (var i = 0; i < cells.length; i++) {
  		if (cells[i] == 1) {
            fill(200);
          } else {
            fill(51);
          }
        noStroke();
  		rect(i * cellWidth, generation*cellWidth, cellWidth, cellWidth);
  	}

}

//compare a, b and c values to the ruleset specified above.
//we can change the ruleset to get a completely different pattern
function rules(a, b, c){
  	if (a == 1 && b == 1 && c == 1) return ruleset[0];
  	if (a == 1 && b == 1 && c === 0) return ruleset[1];
  	if (a == 1 && b === 0 && c == 1) return ruleset[2];
  	if (a == 1 && b === 0 && c === 0) return ruleset[3];
  	if (a === 0 && b == 1 && c == 1) return ruleset[4];
  	if (a === 0 && b == 1 && c === 0) return ruleset[5];
  	if (a === 0 && b === 0 && c == 1) return ruleset[6];
  	if (a === 0 && b === 0 && c === 0) return ruleset[7];
  	return 0;



}
function keyPressed(){
 if (key === ' '){ 
      reset();
 
 }
}
function resset(){




}