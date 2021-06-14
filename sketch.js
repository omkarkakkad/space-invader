var invader_Image;

var ship,ship_Image;

var leftEdge,righEdge;

var laser,laser_Image,laserGroup;

var score = 0;

//group1

var invader1,invader2,invader3,invader4,invader5,invader6;

//group2

var invader7,invader8,invader9,invader10,invader11,invader12;

//group3

var invader13,invader14,invader15,invader16,invader17,invader18;

var die_Sound,hit_Sound,fire_Sound;

var gameOver,gameOver_Image;


function preload(){

  invader_Image = loadImage("invader.png");

  ship_Image = loadImage("ship.png");

  laser_Image = loadImage("laser.png");

  hit_Sound = loadSound("hit_Sound.mp3");
  fire_Sound = loadSound("fire_Sound.mp3");

  gameOver_Image = loadImage("gameOver.png");

}

function setup(){
  createCanvas(550,650);

  ship = createSprite(250,600,10,10);
  ship.addImage("player",ship_Image);
  ship.scale = 0.8; 
  
  leftEdge = createSprite(-15,605,8,80);
  leftEdge.visible = false;

  rightEdge = createSprite(565,605,8,80);
  rightEdge.visible = false;

  gameOver = createSprite(250,250,10,10);
  gameOver.addImage("end",gameOver_Image);
  gameOver.scale = 3.5;
  gameOver.visible = false;

  //group1

  invader1 = createSprite(65,100);
  invader1.addImage("enemy1",invader_Image);
  invader1.scale = 0.07;

  invader2 = createSprite(145,100);
  invader2.addImage("enemy2",invader_Image);
  invader2.scale = 0.07;

  invader3 = createSprite(225,100);
  invader3.addImage("enemy3",invader_Image);
  invader3.scale = 0.07;

  invader4 = createSprite(305,100);
  invader4.addImage("enemy4",invader_Image);
  invader4.scale = 0.07;

  invader5 = createSprite(385,100);
  invader5.addImage("enemy5",invader_Image);
  invader5.scale = 0.07;

  invader6 = createSprite(465,100);
  invader6.addImage("enemy6",invader_Image);
  invader6.scale = 0.07;

  //group2

  invader7 = createSprite(65,180);
  invader7.addImage("enemy7",invader_Image);
  invader7.scale = 0.07;

  invader8 = createSprite(145,180);
  invader8.addImage("enemy8",invader_Image);
  invader8.scale = 0.07;

  invader9 = createSprite(225,180);
  invader9.addImage("enemy9",invader_Image);
  invader9.scale = 0.07;

  invader10 = createSprite(305,180);
  invader10.addImage("enemy10",invader_Image);
  invader10.scale = 0.07;

  invader11 = createSprite(385,180);
  invader11.addImage("enemy11",invader_Image);
  invader11.scale = 0.07;

  invader12 = createSprite(465,180);
  invader12.addImage("enemy12",invader_Image);
  invader12.scale = 0.07;

  //group3

  invader13 = createSprite(65,260);
  invader13.addImage("enemy13",invader_Image);
  invader13.scale = 0.07;

  invader14 = createSprite(145,260);
  invader14.addImage("enemy14",invader_Image);
  invader14.scale = 0.07;

  invader15 = createSprite(225,260);
  invader15.addImage("enemy15",invader_Image);
  invader15.scale = 0.07;

  invader16 = createSprite(305,260);
  invader16.addImage("enemy16",invader_Image);
  invader16.scale = 0.07;

  invader17 = createSprite(385,260);
  invader17.addImage("enemy17",invader_Image);
  invader17.scale = 0.07;

  invader18 = createSprite(465,260);
  invader18.addImage("enemy18",invader_Image);
  invader18.scale = 0.07;

  laserGroup = new Group();

  score = 0;


}

function draw(){
  background("black");

  fill("white");
  textSize(20);
  text("SCORE "+ score,30,40);

  if(keyDown("left_arrow")){
    ship.x = ship.x - 10;
  }

  if(keyDown("right_arrow")){
    ship.x = ship.x + 10;
  }

  if(keyDown("space")){
    createLaser();
    hit_Sound.play();
  }

  ship.collide(leftEdge);
  ship.collide(rightEdge);

  //group1

  if(laserGroup.isTouching(invader1)){
    laserGroup.destroyEach();
    invader1.destroy();
    fire_Sound.play();
    score = score + 2;

  }

  if(laserGroup.isTouching(invader2)){
    laserGroup.destroyEach();
    invader2.destroy();
    fire_Sound.play();
    score = score + 2;

  }

  if(laserGroup.isTouching(invader3)){
    laserGroup.destroyEach();
    invader3.destroy();
    fire_Sound.play();
    score = score + 2;

  }

  if(laserGroup.isTouching(invader4)){
    laserGroup.destroyEach();
    invader4.destroy();
    fire_Sound.play();
    score = score + 2;

  }

  if(laserGroup.isTouching(invader5)){
    laserGroup.destroyEach();
    invader5.destroy();
    fire_Sound.play();
    score = score + 2;

  }

  if(laserGroup.isTouching(invader6)){
    laserGroup.destroyEach();
    invader6.destroy();
    fire_Sound.play();
    score = score + 2;

  }

    //group2

  if(laserGroup.isTouching(invader7)){
    laserGroup.destroyEach();
    invader7.destroy();
    fire_Sound.play();
    score = score + 2;

  }

  if(laserGroup.isTouching(invader8)){
    laserGroup.destroyEach();
    invader8.destroy();
    fire_Sound.play();
    score = score + 2;

  }

  if(laserGroup.isTouching(invader9)){
    laserGroup.destroyEach();
    invader9.destroy();
    fire_Sound.play();
    score = score + 2;

  }

  if(laserGroup.isTouching(invader10)){
    laserGroup.destroyEach();
    invader10.destroy();
    fire_Sound.play();
    score = score + 2;

  }

  if(laserGroup.isTouching(invader11)){
    laserGroup.destroyEach();
    invader11.destroy();
    fire_Sound.play();
    score = score + 2;

  }

  if(laserGroup.isTouching(invader12)){
    laserGroup.destroyEach();
    invader12.destroy();
    fire_Sound.play();
    score = score + 2;

  }

  //group3

  if(laserGroup.isTouching(invader13)){
    laserGroup.destroyEach();
    invader13.destroy();
    fire_Sound.play();
    score = score + 2;


  }

  if(laserGroup.isTouching(invader14)){
    laserGroup.destroyEach();
    invader14.destroy();
    fire_Sound.play();
    score = score + 2;

  }

  if(laserGroup.isTouching(invader15)){
    laserGroup.destroyEach();
    invader15.destroy();
    fire_Sound.play();
    score = score + 2;

  }

  if(laserGroup.isTouching(invader16)){
    laserGroup.destroyEach();
    invader16.destroy();
    fire_Sound.play();
    score = score + 2;

  }

  if(laserGroup.isTouching(invader17)){
    laserGroup.destroyEach();
    invader17.destroy();
    fire_Sound.play();
    score = score + 2;


  }

  if(laserGroup.isTouching(invader18)){
    laserGroup.destroyEach();
    invader18.destroy();
    fire_Sound.play();
    score = score + 2;

  }

  if(score === 36){
    gameOver.visible = true;
    fill("white");
    textSize(50);
    text("YOU WIN",130,400);
    ship.destroy();
    laserGroup.destroyEach();

  }
 

  drawSprites();
}

function createLaser(){
  laser = createSprite(ship.x,590);
  laser.addImage("fire",laser_Image);
  laser.scale = 1.7;
  laserGroup.add(laser);
  laser.velocityY = - 40;
}

