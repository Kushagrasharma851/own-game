var backgroundImage,marioImage,floorImage,outImages,runningImage,stillImage,wonImage,throwingballImage;
var mario,floor;
function preload(){

backgroundImage=loadImage("images/background.png");
floorImage = loadImage("images/floor.png");
marioImage = loadAnimation("images/running.png");
outImages = loadAnimation("images/out.png");
stillImage = loadAnimation("images/still.png");
wonImage = loadAnimation("images/won.png");
throwingballImage = loadAnimation("images/throwing ball.png");

}



function setup() {
  createCanvas(displayWidth,displayHeight);
  mario = createSprite(100, 150, 50, 50);
  mario.scale=0.5;
  mario.addAnimation("still",stillImage);
  floor = createSprite(displayWidth/2,displayHeight-120 ,displayWidth, 150);

}


function draw() {
  background(backgroundImage);  
 // image(floorImage,displayWidth/2,displayHeight-80,displayWidth,50);
mario.velocityY+=8;
mario.collide(floor);
mario.setCollider("rectangle",0,0,100,100);
floor.debug=true;
if(keyDown (UP_ARROW) && mario.y>400){

 mario.addAnimation("run",outImages);

  mario.velocityY=-40;

}
if(keyDown (RIGHT_ARROW) ){

  mario.x+=10;

}
if(keyDown (LEFT_ARROW) ){

  mario.x-=10;

}
  drawSprites();

}







