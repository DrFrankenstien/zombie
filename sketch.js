var bg,bgImg;
var player,shooterImg,shooter_shooting
var heart1, heart2, heart3;
var heartImg1, heartImg2, heartImg3;
var zombieImg, zombieGroup, zombie;
var score=0;
var bullets=70;
var life=3;
var gameState="fight"

function preload(){
    bgImg=loadImage("assets/bg.jpeg");
    shooterImg=loadImage("assets/shooter_2.png");
    heartImg3=loadImage("assets/heart_3.png");
    heartImg2=loadImage("assets/heart_2.png");
    heartImg1=loadImage("assets/heart_1.png");
    zombieImg=loadImage("assets/zombie.png");
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  bg=createSprite(displayWidth/2-20, displayHeight/2-40,20,20);
  bg.addImage(bgImg);
  bg.scale=1.1;

  player=createSprite(displayWidth-1500, displayHeight-500, 10,10);
  player.addImage(shooterImg);
  player.debug = true;
  player.setCollider("rectangle",0,0,300,300);

  heart1=createSprite(displayWidth-150, 40,20,20);
  heart1.visible=false;
  heart1.addImage("heart1",heartImg1);
  heart1.scale=0.4

  heart2=createSprite(displayWidth-100, 40,20,20);
  heart2.visible=false;
  heart2.addImage("heart2",heartImg2);
  heart2.scale=0.4

  heart3=createSprite(displayWidth-150, 40,20,20);
  heart3.visible=false;
  heart3.addImage("heart3",heartImg3);
  heart3.scale=0.4

  zombieGroup = new Group()
  bulletGroup = new Group()
}

function draw(){
    background(0);
    if(gameState === "fight"){
      if(keyDown("UP_ARROW")||touches.length>0){
        player.y = player.y-30
      }
      if(keyDown("DOWN_ARROW")||touches.length>0){
       player.y = player.y+30
      }
      if(keyWentDown("space")){
        bullet=createSprite(displayWidth-1/50,player.y-30, 20,10)
        bullet.velocityX=20

        bulletGroup.add(bullet)
       player.depth = bullet.depth
        player.depth = player.depth+2
        player.addImage(shooter_shooting)
       bullets = bullets-1
      }
      else if(keyWentUp("space")){
        player.addImage(shooterImg)
      }


    
      drawSprites();
      textSize(20)
  fill("white")
  text("Bullets = " + bullets,displayWidth-210,displayHeight/2-250)
   text("Score = " + score,displayWidth-200,displayHeight/2-220)
    text("Lives = " + life,displayWidth-200,displayHeight/2-280)
   enemy();
    }
   
    
}

 function enemy(){
  if(frameCount%50===0){
    zombie = createSprite(random(500,1100),random(100,500),40,40)

    zombie.addImage(zombieImg)
    zombie.scale=0.15
    zombie.debug= true
    zombie.setCollider("rectangle",0,0,400,400)
    zombie.velocityX=-3
    zombie.lifetime = 400
    zombieGroup.add(zombie);
  }

}
