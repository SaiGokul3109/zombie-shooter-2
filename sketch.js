var bg_1, bg_2;
var player, shooter_1, shooter_2;
var zombie, zombieImg;
var heart1, heart2, heart3;
var heart_1, heart_2,heart_3;

function preload(){
bg_1 = loadImage("assets/bg.jpeg");
shooter_1 = loadImage("assets/shooter_2.png");
shooter_2 = loadImage("assets/shooter_3.png");
heart_1 = loadImage("assets/heart_1.png");
heart_2 = loadImage("assets/heart_2.png");
heart_3 = loadImage("assets/heart_3.png");
zombieImg = loadImage("assets/zombie.png");
}

function setup(){
createCanvas(windowWidth,windowHeight);

bg_2 = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
bg_2.addImage(bg_1);
bg_2.scale = 1.1;

player = createSprite(displayWidth-1150,displayHeight-300,50,50);
player.addImage(shooter_1);
player.scale = 0.35;

player.setCollider("rectangle",0,0,300,500);
player.debug = true;

heart1 = createSprite(displayWidth-150,40,20,20);
heart1.visible = true;
heart1.addImage(heart_1);
heart1.scale = 0.4;

heart2 = createSprite(displayWidth-110,40,20,20);
heart2.visible = true;
heart2.addImage(heart_2);
heart2.scale = 0.4;

heart3 = createSprite(displayWidth-150,40,20,20);
heart3.visible = true;
heart3.addImage(heart_3);
heart3.scale = 0.4;

zombieGroup = new Group();

}

function draw(){
  background("white");

  if(keyDown("UP_ARROW")|| touches.length>0){
  player.y = player.y-30;
  }

  if(keyDown("DOWN_ARROW")|| touches.length>0){
    player.y = player.y+30;
    }

  if(keyDown("RIGHT_ARROW")|| touches.width>0){
    player.x = player.x+30;
    }  
    
  if(keyDown("LEFT_ARROW")|| touches.width>0){
    player.x = player.x-30;
    }

  if(keyWentDown("space")){
    player.addImage(shooter_2);
  }

  else if(keyWentUp("space")){
    player.addImage(shooter_1);
  }

  if(zombieGroup.isTouching(player)){
  for(var i = 0;i<zombieGroup.length; i++){
    if(zombieGroup[i].isTouching(player)){
    zombieGroup[i].destroy();
    }
  }
  
  }

  spawnZombies();
  drawSprites();
}

function spawnZombies(){
  if(frameCount%50===0){
    zombie = createSprite(random(500,1100),random(100,500),40,40);
    zombie.addImage(zombieImg);
    zombie.scale = 0.15;
    zombie.velocityX = -3;
    zombie.setCollider("rectangle",0,0,450,1000);
    zombie.debug = true;
    zombie.lifetime = 400;
    zombieGroup.add(zombie);
  }
}