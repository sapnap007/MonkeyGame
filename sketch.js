
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {

  


  var survivalTime=0;

   monkey=createSprite(80,315,20,20);
   monkey.addAnimation("moving", monkey_running);

   monkey.scale=0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)

  bananaGroup = new Group();
  obstaclesGroup = new Group();

  score = 0;
 
  
}


function draw() {
  
  background(255);
  
    
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  
  
   
    if(keyDown("space") ) {
      monkey.velocityY = -12;
    }
    monkey.velocityY = monkey.velocityY + 0.8;
  
    monkey.collide(ground);   
    banana();
    obstacle();
 
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);        
  
  
    if(obstaclesGroup.isTouching(monkey)){
        ground.velocityX = 0;
        monkey.velocityY = 0;
        obstaclesGroup.setVelocityXEach(0);
        bananaGroup.setVelocityXEach(0);
        obstaclesGroup.setLifetimeEach(-1);
        bananaGroup.setLifetimeEach(-1);
    
    
    }
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);
}



function banana() {
  //write code here to spawn the Food
  if (frameCount % 80 === 0) {
    banana1 = createSprite(600,250,40,10);
    banana1.y = random(120,200);    
    banana1.velocityX = -5;
    
     //assign lifetime to the variable
    banana1.lifetime = 300;
    monkey.depth = banana1.depth + 1;
    
    //add image of banana
     banana1.addImage(bananaImage);
     banana1.scale=0.05;
    
    //add each banana to the group
    bananaGroup.add(banana1);
  }
}

function obstacle() {
  if(frameCount % 300 === 0) {
    obstacle1 = createSprite(800,320,10,40);
    obstacle1.velocityX = -6;
    
    //add image to the obstacle 
    obstacle1.addImage(obstaceImage);
    obstacle1.scale=0.15;
    
    //lifetime to the obstacle     
    obstacle1.lifetime = 300;
    
    //add each obstacle to the group
    obstaclesGroup.add(obstacle1);
  }
}