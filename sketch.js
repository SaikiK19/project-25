
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;
var ground;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	box1 = new Trash(550,570,30,200);
	box2 = new Trash(750,570,30,200);
	box3 = new Trash(650,625,220,20);

	paper = new Circle(100,340,30,30);

	ground = new Ground(400,650,800,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);

  keyPressed();

  box1.display();
  box2.display();
  box3.display();
  paper.display();	
  ground.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:1.9,y:-1.9})
	}
}

