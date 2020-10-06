const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;

 ground= new Ground(200,700,100,10); 

}

function draw() {
  background("red");  
  Engine.update(engine);

  ground.display();

  
}