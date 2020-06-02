var wall,thickness;
var bullet,speed,weight;
function setup() {
  createCanvas(1600,400);
  speed = random(50,55);
  weight = random(30,52);
  thickness = random(22,83);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  bullet = createSprite(50,200,30,10);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";
  
}

function draw() {
  background(0);  
  if(bullet.x-wall.x<wall.width/2+bullet.width/2
    &&wall.x-bullet.x<wall.width/2+bullet.width/2
    &&bullet.y-wall.y<wall.height/2+bullet.height/2
    &&wall.y-bullet.y<wall.height/2+bullet.height/2){
  bullet.velocityX = 0;
  var damage = 0.5*weight*speed*speed/thickness*thickness*thickness;
  

   if (damage<=10){
     wall.shapeColor = color(0,255,0);
   }
  
   if (damage>10){
     wall.shapeColor = color(255,0,0);
   }
  }
  drawSprites();
}