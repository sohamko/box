
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;

var engine,world,ground,pokeball,box;



function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

  ground=new Ground(200,200,50,10);
  
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  ground.display;
  drawSprites();
}