
var bg,bgI
var p1,p2,p3,p4;
var pWater,pFood,pFirstAid;
var START=0;
var PLAY=1;
var END=2;
var gameState=START;

var water=3;
var FoodStock=4;
var First_Aid=5;

function preload()
{
  bgI = loadImage("bg3.jpg");
  //needWaterImage=loadImage("needWater.jpg");
  heliImage=loadImage("heli.png")

}

function setup() {
  createCanvas(800,600)
  bg = createSprite(700,300,1200,800);
  bg.x=bg.width/2
  bg.visible=false;
   bg.scale = 0.8
   bg.addImage(bgI);

   heli=createSprite(1200,140,80,50);
 
  p2=createSprite(400,140,40,40);
  p2.visible=false;
  p2.shapeColor="yellow"
  p3=createSprite(400,140,40,40);
  p3.visible=false;
  p3.shapeColor="blue"
  
   
}
function draw() {
  rectMode(CENTER);
  background("skyblue");
  if(gameState===PLAY){
    bg.visible=true;
    bg.velocityX=-5;
    if(bg.x<280){
      bg.x=bg.width/2-100;
    }
   
   
  heli.velocityX=-2;
  heli.addImage(heliImage)
  heli.scale=0.5;

    
    if(heli.x===400){
      heli.velocityX=0;
    }
    createMan();
    drawSprites();
    fill("black");
    text("REMAINING...",30,80);
    fill("blue");
    text("WATER SUPPLY-  "  + water,30,110);
    fill("yellow")
    text("FOOD STOCK  "+ FoodStock,30,140);

    fill("red");
    text("FIRST AID  "+First_Aid,30,179)

  }
 
 

  
 
  if(gameState===START){
    textSize(20);
    fill("black");
    text("your country is suffering from a deadly disease.\n The people are dying due to lack of food,\nwater and safety. you are the rescuer\n All the stocks are very limited,\n U cant afford to waste them\n Its a do or die situation\n if you are a real patriot,\n save your country!!!\n ",100,170);
    textSize(30);
    text("YOUR CONTROLS....",500,370);
    
    fill("red");
    textSize(20);
    text("1- FIRST AID",520,420)
  
    fill("blue");
    textSize(20);
    text("2- WATER",520,460);
  
    fill("yellow");
    textSize(20);
    text("3- Food",520,500)

    if(keyDown("space")){
      gameState=PLAY;
    }
  }

 
  fill("black")
  text(mouseX,30,50);
  text(mouseY,80,50);

 
}
function createMan(){
  if(frameCount%400===0){
    var r=Math.round(random(1,3));
    switch(r){
      case 1: pWater=createSprite(1200,430,20,40);
      pWater.shapeColor="blue";
      pWater.velocityX=-2;
      break;

      case 2: pFood=createSprite(1200,430,20,40);
      pFood.shapeColor="yellow";
      pFood.velocityX=-2;
      break;

      case 3: pFirstAid=createSprite(1200,430,20,40);
      pFirstAid.shapeColor="blue";
      pFirstAid.velocityX=-2;
      break;

      default:
        break;

    }
    
  }
}

  function keyPressed(){
    if(keyCode===49 && heli.x===400){
      p1=createSprite(400,140,40,40);
      p1.shapeColor="red"
       p1.velocityY=4;
       First_Aid--;

    }
    if(keyCode===50 && heli.x===400){
      p2=createSprite(400,140,40,40);
      p2.shapeColor="blue"
       p2.velocityY=4;
       water--;

    }
    if(keyCode===51 && heli.x===400){
      p3=createSprite(400,140,40,40);
      p3.shapeColor="yellow"
       p3.velocityY=4;
       FoodStock--

    }
  
  }
  




