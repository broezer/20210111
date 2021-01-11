// Constants
const Y_AXIS = 1;
const X_AXIS = 2;
let c1, c2, c3;

function setup() {
  createCanvas(400, 400);
  c1 = color(75, 120, 196);
  //c2 = color(156, 129, 188);
  c2 = color(250,250,255);
  c3 = color(229, 100, 100);
}

function draw() {
  setGradient(0, 0, width, height/2, c1, c2, Y_AXIS);
  setGradient(0, height/2, width, height/2, c2, c3, Y_AXIS);
   
  translate( -width*0.105, height*0.1);
  for (let i = 1; i <=3; i++) {
    translate( width * 0.3, 0);
    grdDiamond(0, 0, height*0.2, c1, c2, c3);
    
  }
  
  translate( width * 0.3, height*0.3);
  for (let i = 1; i <=3; i++) {
    translate( -width * 0.3, 0);
    grdDiamond(0, 0, height*0.2, c3, c2, c1);
  }
  
  translate( (width * 0.3)*3, height*0.3);
  for (let i = 1; i <=3; i++) {
    translate( -width * 0.3, 0);
    grdDiamond(0, 0, height*0.2, c1, c2, c3);
  }
  
  save("20210111.png");
  noLoop();
  
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}

function grdDiamond(x, y, h, c1, c2, c3){
  for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, (y + h)/2, 0, 1);
      let c = lerpColor(c1, c2, inter);
      
      let inter02 = map(i, (y + h)/2 ,  y + h , 0, 1);
      let p = lerpColor(c2, c3, inter02);
      
      if ( i <= ((y + h)/2)){
        stroke(c);
        line( (x * h) - (i), i, (x * h) + i, i);
      }else{
        stroke(p);
        line( (x - h) + i , i, (x + h) - i , i);
      }
    }
}
