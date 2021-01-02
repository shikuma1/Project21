var bullet,wall, thickness;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 50);
  bullet.shapeColor = "white"
  wall = createSprite(1200,200,thickness,height/2)
  wall.shapeColor = "white"

  thickness = random(22,83)

  bullet.debug = false
  wall.debug = false

  


  speed = random(223,321)
  weight = random(30,52)
}

function draw() {
  background("black");  
  bullet.velocityX = speed;
  wall.depth = bullet.depth
  bullet.depth = bullet.depth + 1

  if(collided(bullet,wall)){
    var damage = 0.5 *weight * speed * speed/ (thickness * thickness* thickness);
    if(damage>10){
      wall.shapeColor = color(255,0,0)
    }
    if(damage<10){
      wall.shapeColor = color(0,255,0)
    }
  }
  drawSprites();
}
function collided(lbullet, lwall){
  bulletRightEdge = lbullet.x + lbullet.width
  wallLeftEdge = lwall.x
  if(bulletRightEdge >= wallLeftEdge){
    return true
  }
  return false

}