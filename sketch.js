//Created by Nadifa Omar
//Last edited: March 27, 2024

var img
var img2
let sound
var speedR = 1.5
var speedS = 1
var speedL = -1
var value = 1
var i = 0

function preload() {
  soundFormats('ogg', 'mp3');
  song = loadSound('bbc_bubbles--c_07074121.mp3')
}

function setup() {
  createCanvas(400, 400);
  frameRate(120);
  img = loadImage("ocean.jpg");
  img2 = loadImage("loadingPage.jpg");
}

function draw() {
  background(220);
  image(img2, 0, 0, 400, 400)
  
  if(mouseIsPressed)value = 0;
  
  if(value == 0){
    image(img, 0, 0, 400, 400)
    song.rate(0.7);
    song.amp(0.05);
    song.play();
    song.loop();
  
  //Fishies moving right
  if(307 + speedL*i < -10){i = 0 - i}
  
  fill("#fc59a3");
  triangle(40 + speedR*i, 100, 20 + speedR*i, 85, 20 + speedR*i, 115)
  circle(50 + speedR*i, 100, 30)
  
  fill("#8e3ccb");
  triangle(230 + speedR*i, 130, 220 + speedR*i, 135, 220 + speedR*i, 125)
  circle(230 + speedR*i, 130, 10)
  
  fill("#ffd400");
  triangle(260 + speedR*i, 210, 240 + speedR*i, 222, 240 + speedR*i, 198)
  circle(270 + speedR*i, 210, 24)
    
  fill("#e90eff");
  triangle(20 + speedR*i, 350, 9 + speedR*i, 342, 9 + speedR*i, 358)
  circle(25 + speedR*i, 350, 16)
  
  //Fishies moving left
  
  fill("#01dddd");
  triangle(109 + speedL*i, 280, 118 + speedL*i, 285, 118 + speedL*i, 275)
  circle(100 + speedL*i, 280, 18)
  
  fill("#82F44A");
  triangle(307 + speedL*i, 300, 320 + speedL*i, 290, 320 + speedL*i, 310)
  circle(300 + speedL*i, 300, 20)
  
  fill("#fe7e0f");
  triangle(130 + speedL*i, 180, 150 + speedL*i, 175, 150 + speedL*i, 185)
  circle(135 + speedL*i, 180, 14)
  
  //Shark moving right
  fill("#6C7780");
  //Face
  triangle(170 + speedS*i, 50, 150 + speedS*i, 40, 150 + speedS*i, 60)
  //Fin
  triangle(150 + speedS*i, 40, 120 + speedS*i, 40, 120 + speedS*i, 30)
  //Body
  rect(110 + speedS*i, 40, 40, 20)
  //Back fin
  triangle(110 + speedS*i, 40, 110 + speedS*i, 60, 90 + speedS*i, 50)
  //Fins
  triangle(90 + speedS*i, 50, 80 + speedS*i, 30, 100 + speedS*i, 45)
  triangle(90 + speedS*i, 50, 80 + speedS*i, 70, 100 + speedS*i, 55)
  //Belly
  fill("#B1D4E0");
  quad(170 + speedS*i, 50, 145 + speedS*i, 50, 128 + speedS*i, 60, 150 + speedS*i, 60)
  //Side fin
  fill("#6C7780");
  triangle(120 + speedS*i, 50, 145 + speedS*i, 50, 115 + speedS*i, 65)
  //Outline
  line(150 + speedS*i, 40, 150 + speedS*i, 60)
  
  i++;
  
  }
}

