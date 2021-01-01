
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	


	
  
	bob1 = new Bob(180,500,100)
	bob2 = new Bob(290,500,100)
	bob3 = new Bob(400,500,100)
	bob4 = new Bob(510,500,100)
	bob5 = new Bob(620,500,100)
	
	Roof = new roof()

	
	chain1 = new Rope(bob1.body,Roof.body,-200,0);
	chain2 = new Rope(bob2.body,Roof.body,-100,0);
	chain3 = new Rope(bob3.body,Roof.body,0,0);
	chain4 = new Rope(bob4.body,Roof.body,100,0);
	chain5 = new Rope(bob5.body,Roof.body,200,0);

}


function draw() {
  rectMode(CENTER);
  background(255,255,0);
  

  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()

  Roof.display()

  chain1.display(200,100)
  chain2.display(300,100)
  chain3.display(400,100)
  chain4.display(500,100)
  chain5.display(600,100)

  
  
  drawSprites();

}

  function keyPressed(){

	if(keyCode === UP_ARROW){
	
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-0.6,y:0})
	
	}
 
  }





