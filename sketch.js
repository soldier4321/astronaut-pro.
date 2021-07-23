var bg,sleep,brush,gym,eat,drink,move,bath;
var back,astronaut;

function preload(){
bg=loadImage("iss.png");
sleep=loadImage("sleep.png")
brush=loadImage("brush.png")
gym=loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png")
eat=loadAnimation("eat1.png","eat2.png")
drink=loadAnimation("drink1.png","drink2.png")
move=loadAnimation("move.png","move1.png")
bath=loadAnimation("bath1.png","bath2.png")
}
function setup() {
  createCanvas(500, 500);
  
  back=createSprite(250,250,10,10)
  back.addAnimation("background",bg)
 astronaut=createSprite(200,100)
 astronaut.addAnimation("sleeping",sleep)
 astronaut.scale=0.1
}

function draw() {
  background(220);
  
 
  if(keyDown("UP_ARROW")){
astronaut.addAnimation("brushing",brush)
astronaut.changeAnimation("brushing",brush)
astronaut.y=200;
astronaut.velocityX=0
astronaut.velocityY=0
}
if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gyming",gym)
  astronaut.changeAnimation("gyming",gym)
  astronaut.y=200;
  astronaut.velocityX=0
  astronaut.velocityY=0
  }
 
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bathing",bath)
    astronaut.changeAnimation("bathing",bath)
    astronaut.y=200;
    astronaut.velocityX=0
    astronaut.velocityY=0
    }
    
    if(keyDown("RIGHT_ARROW")){
      astronaut.addAnimation("eating",eat)
      astronaut.changeAnimation("eating",eat)
      astronaut.y=200;
      astronaut.velocityX=0
      astronaut.velocityY=0
      }
      
     
 
        drawSprites();      
      }
