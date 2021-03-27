
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var wall
var bob1,bob2,bob3,bob4,bob5
var chain1,chain2,chain3,chain4,chain5
 
// function preload()
// {
	
// }

function setup() {
	createCanvas(800, 700);
     

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	wall=new Wall(400,150,400,50)
	
	bob1=new Bob(400,500,50)
	bob2=new Bob(350,500,50)
	bob3=new Bob(300,500,50)
	bob4=new Bob(450,500,50)
	bob5=new Bob(500,500,50)


	chain1=new Chain(bob1.body,{x:400,y:175})
	chain2=new Chain(bob2.body,{x:350,y:175})
	chain3=new Chain(bob3.body,{x:300,y:175})
	chain4=new Chain(bob4.body,{x:450,y:175})
	chain5=new Chain(bob5.body,{x:500,y:175})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
 wall.display()
 bob1.display()
 bob2.display()
 bob3.display()
 bob4.display()
 bob5.display()
 chain1.display()
 chain2.display()
 chain3.display()
 chain4.display()
 chain5.display()
}


function keyPressed(){
	if(keyCode=== LEFT_ARROW){
		Matter.Body.applyForce( bob3.body, bob3.body.position,{x:-90,y:90})
		//Matter.Body.applyForce( bob5.body, bob5.body.position,{x:105,y:-105})
	}
	if(keyCode=== RIGHT_ARROW){
	//	Matter.Body.applyForce( bob3.body, bob3.body.position,{x:-100,y:100})
		Matter.Body.applyForce( bob5.body, bob5.body.position,{x:90,y:-90})
	}
}

