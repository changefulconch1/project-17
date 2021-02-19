var PLAY = 1;
var END = 0;
var gameState = PLAY;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score,ground

function preload(){
  
  
  monkeyrun =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,600)

  ground =createSprite(300,580,600,40)
  
  monkey = createSprite(100,580,30,30)
  monkey.addAnimation("monkey_move",monkeyrun)
  monkey.scale = 0.2
  
foodGroup=createGroup()
obstacleGroup=createGroup()
  
  score =0
}


function draw() {

background("white")
     textSize(50) 
  text("Survial time: "+score, 150,100);
  
    if (gameState === PLAY) {
  spawnObstacles()
  spawnfruits()
    
          score = score + Math.round(frameCount/60);
  
      if(keyDown("space")&& monkey.y >= 400) {
        monkey.velocityY = -20 ;
      }
 
      
        monkey.velocityY = monkey.velocityY + 0.8


 
  if (obstacleGroup.isTouching(monkey)) {
    gameState = END
  }}
          monkey.collide(ground);
  if (gameState === END) {
    obstacleGroup.setVelocityXEach(0)
    foodGroup.setVelocityXEach(0)
    monkey.velocityY=0
  }
        drawSprites()
}
console.log();   

function spawnObstacles(){
 if (frameCount % 180 === 0){
   var obstacle = createSprite(650,520,10,40);
   obstacle.velocityX = -6;
   obstacle.scale = 0.25
   obstacle.addImage(obstaceImage)
  obstacleGroup.add(obstacle)
 }}

function spawnfruits(){
 if (frameCount % 80 === 0){
   var fruit = createSprite(650,300,10,40);
   fruit.velocityX = -6;
   fruit.scale = 0.1
   fruit.addImage(bananaImage)
    fruit.y = Math.round(random(200,300));
  foodGroup.add(fruit)

 }}
