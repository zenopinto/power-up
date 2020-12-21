const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world, engine;
var dustbin1, dustbin2, dustbin3;
var paper;
var ground;
var bg;
var dustbinImg;

function preload() {
	
	dustbinImg = loadImage("dustbinFinal.png");
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);


	dustbin1 = new Bin(610, 463, 50, 200);
	dustbin2 = new Bin(400, 463, 50, 200);
	dustbin3 = new Bin(505.5, 583, 260, 50);
	ground = new Ground(200, 665, 3000, 30);
	paper = new Paper(65, 590, 75);

}


function draw() {
	Engine.update(engine);
	rectMode(CENTER);
	background("yellow");
	
	
	dustbin1.display();
	dustbin2.display()
	dustbin3.display()
	ground.display();
	paper.display();
	image(dustbinImg,505,430,200,238);
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, { x: 600, y: -1000 });
	}
}
