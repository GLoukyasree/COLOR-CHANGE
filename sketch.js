var box
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200);
  box.scale=0.5;
}

function draw() 
{
  background(30);
  if(keyIsDown(UP_ARROW)){
    background("green");
  }

  if(keyIsDown(DOWN_ARROW)){
    background("RED");
  }

  if(keyIsDown(RIGHT_ARROW)){
    background("BLUE");
  }

  if(keyIsDown(LEFT_ARROW)){
    background("YELLOW");
  }
  drawSprites();
}




