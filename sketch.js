
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


	


function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,380,800,20)
	ball=new Ball(100,200,30)
	dustbin1=new Block(650,360,130,20)
		dustBin=new Dustbin(590,220,120,130)
	dustbin2=new Block(575,307,20,130)
dustbin3=new Block(724,307,20,130)
//paper=new Paper(100,200,10)
	Engine.run(engine);
  
}


function draw() {
  
  background(255);
  fill(255)
  
  text("x:"+mouseX+",y:"+mouseY,21,10)
  Engine.update(engine)
  ground.display()
 ball.display()
dustbin1.display()
dustbin2.display()
dustbin3.display()
//paper.display()

dustBin.display()

  
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:147.5,y:-146.3})
	}
}




