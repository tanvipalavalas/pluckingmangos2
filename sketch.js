const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var groundpic, tree,treePicture;
var boy, boyPicture;
var stones;
var mango, mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9;

function preload(){
	treePicture=loadImage("tree.png");
	boyPicture=loadImage("boy.png");
}

function setup() {
	createCanvas(1000, 650);

	engine = Engine.create();
	world = engine.world;

	dground=new Ground();
	stones=new Stone(120,460,23);
	mango1=new Mango(600,290,34);
	mango2=new Mango(855,325,35);
	mango3=new Mango(670,260,35);
	mango4=new Mango(730,200,35);
	mango5=new Mango(710,320,36);
	mango6=new Mango(780,250,35);
	mango7=new Mango(825,170,33);
	mango8=new Mango(880,260,35);
	mango9=new Mango(940,220,35);
	mango10=new Mango(980,305,35);

	attach=new Throw1(stones.body,{x:100,y:465});

	tree=createSprite(775,368);
	tree.addImage(treePicture);
	tree.scale=0.42;

	boy=createSprite(160,550);
	boy.addImage(boyPicture);
	boy.scale=0.25;

	Engine.run(engine);
  console.log(stones.radiusmetre);
}

function draw() {
  rectMode(CENTER);
  background("grey");

  fill("black");
  textSize(18);
  



  drawSprites();

  stones.display();
  dground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();


  detectCollision(stones, mango1)
  detectCollision(stones, mango2)
  detectCollision(stones, mango3)
  detectCollision(stones, mango5)
  detectCollision(stones, mango6)
  detectCollision(stones, mango7)
  detectCollision(stones, mango8)
  detectCollision(stones, mango9)
  detectCollision(stones, mango10)
  detectCollision(stones, mango4)

}

function mouseDragged(){
	Matter.Body.setPosition(stones.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	attach.fly();
}


 
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stones.body,{x:100,y:465});
		attach.Launch(stones.body);
	}
}

function keyPressed(){
	if(keyCode === 32){
		Matter.body.setPosition(stoneObj.body, {x:235, y:420})
		launcherObject.attach(stoneObj.body);
	}
}

function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stonesBodyPosition=lstone.body.position

	var distance=dist(stonesBodyPosition.x, stonesBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	console.log(lmango.radiusmetre+lstone.radiusmetre)
	if(distance<=lmango.radiusmetre+lstone.radiusmetre){
		Matter.Body.setStatic(lmango.body,false);
	}
}