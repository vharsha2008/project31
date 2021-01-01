const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;



function setup(){
    var canvas = createCanvas(410,600);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(250,570,500,10)
    divisions1 = new Divisions(10,465,5,200)
    divisions2 = new Divisions(80,465,5,200)
    divisions3 = new Divisions(150,465,5,200)
    divisions4 = new Divisions(210,465,5,200)
    divisions5 = new Divisions(280,465,5,200)
    divisions6 = new Divisions(330,465,5,200)
    divisions7 = new Divisions(380,465,5,200)

   
   particles2 = new Particles(300,10,20,20)
 



}


function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    divisions1.display();
    divisions2.display();
    divisions3.display();
    divisions4.display();
    divisions5.display();
    divisions6.display();
    divisions7.display();
    
    particles2.display();
    

    
   
    


   
    


}
