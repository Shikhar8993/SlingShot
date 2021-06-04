
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var dustbin,dustbin1,dustbin2;
var ground;
var ball;

function preload() {
	dustbinImg = loadImage("sprites/Dustbin.png");
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.




    line1 = new Dustbin(800, 355, 15, 230);
	line2 = new Dustbin(880, 382, 145, 15);
	line3 = new Dustbin(950, 355, 15, 230);
   

	ball=new Ball(105,350,50);

    slingshot = new SlingShot(ball.body,{x:100, y:50});

    //fill("red");
	ground = Bodies.rectangle(300,390, 1000, 20 , {isStatic:true} );
	World.add(world, ground);
	
   
	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(255);

	rect(ground.position.x,ground.position.y,1000,20);

	
	
	ball.display();
	line1.display();
	line2.display();
	line3.display();
    image(dustbinImg,775,180,200,220);

  
 
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}