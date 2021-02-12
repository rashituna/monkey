var bananagroup,bananaimg,obstacleimg,obstaclegroup,obstacle,bg,bgimg,monkeyimg,monkey,ground;
var score=0;

function preload(){
  bgimg=loadImage("jungle.jpg"); monkeyimg=loadAnimation("monkey_01.png,monkey_02.png,monkey_03.png,monkey_04.png,monkey_05.png,monkey_06.png,monkey_07.png,monkey_08.png,monkey_09.png,monkey_10.png,");
  bananaimg =loadImage("banana.png");
  obstacleimg=loadImage("stone.png");
  
}
function setup() {
  createCanvas(400, 400);
  bg=createSprite(200,200,400,400);
 bg.addImage("background",bgimg)
  bg.velocityX=-5
  bg.x=bg.width/2
  monkey=createSprite(20,390,20,20);
 monkey.addAnimation("monkey",monkeyimg);
  monkey.scale=0.6
  banana=createSprite(400,200,10,10);
  banana.addImage("banana",bananaimg);
  banana.scale=0.4
  obstacle=createSprite(400,200,10,10)
  obstacle.addAnimation("obos",obstacleimg)
  obstaclegroup=createGroup()
   bananagroup=createGroup()
}

function draw() {
  background("white");
  if(bg.x<0){
    bg.x=bg.width/2
    stoke("black");
    fill("grey");
    textSize(20);
    text("score;"+score,500,50)
    switch(score){
      case 10: monkey.scale=0.12;
        break;
        case 20: monkey.scale=0.14;
        break;
        case 30: monkey.scale=0.15;
        break;
        case 40: monkey.scale=0.16;
        break;
    }
    ground.visible=false;
    if(obstaclegroup.isTouching(monkey)){
      monkey.scale=0.4;
    }
    obo();
    drawSprites();
  }
}
function obo(){
  if(World.frameCount%80===0){
   obstacle=createSprite(400,200,10,10)
   obstacle.addAnimation("obos",obstacleimg)
    obstacle.velocity=-4
   obstaclegroup.add(obstacle)
    obstacle.lifetime=200
    
  }
}
