var car,wall;
var speed,weight;
var gameState,PLAY,END;
var model,model1,model2;
function setup() {
  createCanvas(1600,1000);
   car = createSprite(50, 100, 50, 50);
   wall = createSprite(1300,100,30,150)
   car1 = createSprite(50, 300, 50, 50);
   wall1 = createSprite(1300,300,30,150)
   car2 = createSprite(50, 500, 50, 50);
   wall2 = createSprite(1300,500,30,150)
   car3 = createSprite(50, 700, 50, 50);
   wall3 = createSprite(1300,700,30,150)
   model = createSprite(50,500,50,50)
   model.shapeColor = "red"
   model1 = createSprite(50,600,50,50)
   model1.shapeColor = "yellow"
   model3 = createSprite(50,700,50,50)
   model3.shapeColor = "green"
  
   wall.shapeColor = "white"
   wall1.shapeColor = "white"
   wall2.shapeColor = "white"
   wall3.shapeColor = "white"
  speed= random(55,90)
  weight = random(400,1500)
  speed1= random(55,90)
  weight1 = random(400,1500)
  speed2= random(55,90)
  weight2 = random(400,1500)
  speed3= random(55,90)
  weight3 = random(400,1500)
  gameState = PLAY

}

function draw() {
  background(0);  
  text("Lethal",100,500)
  text("Average",100,600)
  text("Good",100,700)
if(gameState === PLAY){ 
car.velocityX = speed
car1.velocityX = speed1
car2.velocityX = speed2
car3.velocityX = speed3

}
  
  
  if(wall.x-car.x<(car.width+wall.width)/2){
  
      car.velocityX = 0;
      var deformation = 0.5 *weight*speed*speed/22509;
      if(deformation>180){
      car.shapeColor = "red"
      gameState = END
  }
    
if(deformation<180 && deformation>100){

car.shapeColor = "yellow"
gameState = END
}
  
if(deformation<100){

  car.shapeColor = "green"
  gameState = END
  }

  } 

  if(wall1.x-car1.x<(car1.width+wall1.width)/2){
    car1.velocityX = 0;
    var deformation = 0.5 *weight*speed1*speed1/22509;
    if(deformation>180){
    car1.shapeColor = "red"
    gameState = END
}
  
if(deformation<180 && deformation>100){

car1.shapeColor = "yellow"
gameState = END

}

if(deformation<100){

car1.shapeColor = "green"
gameState = END

}

} 
if(wall2.x-car2.x<(car2.width+wall2.width)/2){
  car2.velocityX = 0;
  var deformation = 0.5 *weight*speed2*speed2/22509;
  if(deformation>180){
  car2.shapeColor = "red"
  gameState = END
}

if(deformation<180 && deformation>100){

car2.shapeColor = "yellow"
gameState = END

}

if(deformation<100){

car2.shapeColor = "green"
gameState = END

}

} 
if(wall3.x-car3.x<(car3.width+wall3.width)/2){
  car3.velocityX = 0;
  var deformation = 0.5 *weight*speed3*speed3/22509;
  if(deformation>180){
  car3.shapeColor = "red"
  gameState = END
}

if(deformation<180 && deformation>100){
  gameState = END
car3.shapeColor = "yellow"

}

if(deformation<100){
  gameState = END
car3.shapeColor = "green"

}

} 



if(gameState === END){
text("Press R To Restart",500,300)
if(keyDown("r")&&gameState ===END){
car.x = 50;
car1.x = 50;
car2.x = 50;
car3.x = 50;
gameState = PLAY
speed= random(55,90)
  weight = random(400,1500)
  speed1= random(55,90)
  weight1 = random(400,1500)
  speed2= random(55,90)
  weight2 = random(400,1500)
  speed3= random(55,90)
  weight3 = random(400,1500)
  car.shapeColor = "grey"
  car1.shapeColor = "grey"
  car2.shapeColor = "grey"
  car3.shapeColor = "grey"


}

}
  drawSprites();
}