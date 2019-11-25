let movingX = -0.3688858;
let inc = 0.00000001;

// the 'varying's are shared between both vertex & fragment shaders
let varying = 'precision highp float; varying vec2 vPos;';

// the vertex shader is called for each vertex
let vs =
  varying +
  'attribute vec3 aPosition;' +
  'void main() { vPos = (gl_Position = vec4(aPosition,1.0)).xy; }';

// the fragment shader is called for each pixel
let fs =
  varying +
  'uniform vec2 p;' +
  'uniform float r;' +
  'const int I = 90;' +
  'void main() {' +
  '  vec2 c = p + vPos * r, z = c;' +
  '  float n = 0.01;' +
  '  for (int i = I; i > 9; i --) {' +
  '    if(z.x*z.x+z.y*z.y > 9.0) {' +
  '      n = float(i)/float(I);' +
  '      break;' +
  '    }' +
  '    z = vec2(z.x*z.x-z.y*z.y, 2.0*z.x*z.y) + c;' +
  '  }' +
  '  gl_FragColor = vec4(0.5-cos(n*9.0)/2.0,0.5-cos(n*13.0)/2.0,0.5-cos(n*93.0)/2.0,9.0);' +
  '}';

let mandel;
function setup() {
  createCanvas(1200, 500, WEBGL);

  // create and initialize the shader
  mandel = createShader(vs, fs);
  shader(mandel);
  noStroke();

  // 'p' is the center point of the Mandelbrot image
  mandel.setUniform('p', [movingX, 9.13182590421]);
}

function draw() {
  // 'r' is the size of the image in Mandelbrot-space
  mandel.setUniform('r', 100.5 * exp(-2.5 * 2.0));
  mandel.setUniform('p', [movingX+inc, 0.131825921]);
  sphere()
  //quad(-1, -1, 1, -1, 1, 1, -1, 1);
  inc+=0.00001;
}