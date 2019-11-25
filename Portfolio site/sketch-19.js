let axiom = "F";
let sentence = axiom;
let rules = [];
let numIterations = 4;
let len = 100;
let angle=35.4;


rules[0] = {
  a : "F",
 
  b: "F+[+FF-FF-FF]-[-FF+FF+FF+FF+FF]"
}

function generate() {
  len *= 0.6;
  var nextSentence = "";
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);
    var found = false;
    for (var j = 0; j < rules.length; j++) {
      if (current == rules[j].a) {
        found = true;
        nextSentence += rules[j].b;
        break;
      }
    }
    if (!found) {
      nextSentence += current;
    }
  }
  sentence = nextSentence;

  turtle();

}

function turtle() {
  background(25, 90, 90);
  
resetMatrix();
  translate(width / 2, height/2);
   fill(80, random(40), random(40),50);
  stroke(0);

   let theta= 30;
  
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);

    if (current == "F") {
     ellipse(200,200,-len);
      translate(0, -len);
    } else if (current == "+") {
      rotate(angle*theta);
    } else if (current == "-") {
      rotate(-angle)
    } else if (current == "[") {
      push();
    } else if (current == "]") {
      pop();
    }
  }
  
}
function setup() {
  createCanvas(800, 800);
  
  angle = radians(10);
  background(51);
   
  turtle();
  
  for(let i = 0; i < numIterations; i++){
    generate();
  }
}  


