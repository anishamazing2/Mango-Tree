
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var tree;
var mango;
var mango2;
var mango3;
var mango4;
var mango5;
var mango6;
var mango7;
var mango8;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
	boy = createSprite(20, 100, 10, 70);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground();
	tree = new Tree();
	mango = new Mangoe();
	mango2 = new Mangoe();
	mango3 = new Mangoe();
	mango4 = new Mangoe();
	mango5 = new Mangoe();
	mango6 = new Mangoe();
	mango7 = new Mangoe();
	mango8 = new Mangoe();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
	ground.display();
	tree.display();
	mango.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();

  drawSprites();
 
}



