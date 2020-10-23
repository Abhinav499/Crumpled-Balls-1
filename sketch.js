
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	 dustbin1=new Dustbin(880,330,200,20);
	 dustbin2=new Dustbin(785,290,20,100);
	 dustbin3=new Dustbin(975,290,20,100);
	 ground=new Dustbin(width/2,height/2,1200,20);
	 crumpled=new Ball(100,100);
	Engine.run(engine);
	keyPressed();
}


function draw() {
  rectMode(CENTER);
  background(0);

 dustbin1.display();
 dustbin2.display();
 dustbin3.display();
 crumpled.display();
 ground.display();

 
  drawSprites();
  Engine.update(engine); 
}



function keyPressed() {
	if (keyCode === UP_ARROW){
	   Matter.Body.applyForce(crumpled.body,crumpled.body.position,{x:85,y:-170});
	 }
   
   if (keyCode === DOWN_ARROW){
	Matter.Body.applyForce(crumpled.body,crumpled.body.position,{x:-85,y:-170});
  }
}