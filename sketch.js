var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];

var divisionHeight=300;
var score = 0;
var ball = 0;
var gameState ="start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
    
  for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

}
 
function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  fill("white");
  textSize(20)
  text(" 500 ", 15 , 550);
  text(" 500 ", 95, 550);
  text(" 500 ", 175, 550);
  text(" 500 ", 260, 550);
  text(" 100 ", 335, 550);
  text(" 100 ", 415, 550);
  text(" 100 ", 495, 550);
  text(" 200 ", 575, 550);
  text(" 200 ", 655, 550);
  text(" 200 ", 735, 550);
  ground.display();
  Engine.update(engine);

  if ( ball>= 5) {
    gameState ="end";
    textSize(100);
    text("GameOver", 150, 250);
  }
 
  for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   for (var i = 0; i < particles.length; i++) {
    
    particles[i].display();
   
  
   if (particles[i].body.position.x < 300 && particles[i].body.position.y>760) {

    score=score+500;
    particles.pop();
   
  }
  else if (particles[i].body.position.x < 600 && particles[i].body.position.x > 301 && particles[i].body.position.y > 760) {
    
    score = score + 100;
    particles.pop();
 
  }
  else if (particles[i].body.position.x < 900 && particles[i].body.position.x > 601 && particles[i].body.position.y > 760) {
    
    score = score + 200;
    particles.pop();
  
  }
}
  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }
 }  

  
   
   function mousePressed(){
    if(gameState!=="end"){
        ball++;
       particles.push(new Particle(mouseX, 10, 10, 10)); 
    }   
  }