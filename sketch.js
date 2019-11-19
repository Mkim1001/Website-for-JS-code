// Coding Challenge #102: 2D Water Ripple - 
// Video: https://www.youtube.com/watch?v=BZUdGqeOD0w
// Algorithm: https://web.archive.org/web/20160418004149/http://freespace.virgin.net/hugo.elias/graphics/x_water.htm 
  let cols, rows,
    current = [],
    previous = [],
    damping = 0.99;


  function mouseDragged() {
    current[mouseX][mouseY] = 55
    // current[mouseX][mouseY+1] = 255
    // current[mouseX][mouseY-1] = 255
    // current[mouseX+1][mouseY] = 255
    // current[mouseX+1][mouseY+1] = 255
    // current[mouseX+1][mouseY-1] = 255
    // current[mouseX-1][mouseY] = 255
    // current[mouseX-1][mouseY+1] = 255
    // current[mouseX-1][mouseY-1] = 255
  }

  function setup() {
    pixelDensity(1)
    createCanvas(400, 400)
    cols = width
    rows = height
    for (let i = 0; i < cols; i++) {
      current[i] = []
      previous[i] = []
      for (let j = 0; j < rows; j++) {
        current[i][j] = 0
        previous[i][j] = 0
      }
    }
    previous[200][200] = 55
  }

  function draw() {
   // background(0);
    loadPixels()
    
    for (let i = 1; i < cols - 1; i++) {
      for (let j = 1; j < rows - 1; j++) {
        current[i][j] =
          (previous[i - 1][j] + previous[i + 1][j] +
            previous[i][j - 1] + previous[i][j + 1] +
            previous[i - 1][j - 1] + previous[i - 1][j + 1] +
            previous[i + 1][j - 1] + previous[i + 1][j + 1]
          ) / 4 - current[i][j];
        current[i][j] = current[i][j] * damping
        let index = (i + j * cols) * 4;
        
        let n = current[i][j];
        
        let r = 0.5-cos(n*57.0);
        let g = 0.5-cos(n*1.0);
        let b = 0.5-cos(n*23.0);
        
        if(i === 1 && j ==1){
        console.log(r);
        }
        
         pixels[index + 0] = r * 55;
         pixels[index + 1] = g * 255;
         pixels[index + 2] = b * 255;
        pixels[index + 3] = 255;
    
      }
    }
    updatePixels()

    //swap buffers
    let temp = previous
    previous = current
    current = temp
  
  }