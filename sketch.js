var quadradinho;

function setup() {
  createCanvas(400,400);
quadradinho = createSprite (200,200,20,20);
quadradinho.shapeColor = "crimson";
}

function draw() 
{
  background(51);
  drawSprites();
  if (keyIsDown(RIGHT_ARROW)) {
    quadradinho.x += 3;
    
  }
  if (keyIsDown(LEFT_ARROW)) {
    quadradinho.x -= 3;
    
  }
  if (keyIsDown(UP_ARROW)) {
    quadradinho.y -= 3;
    
  } 
  if (keyIsDown(DOWN_ARROW)) {
    quadradinho.y += 3;
    
  }
}




