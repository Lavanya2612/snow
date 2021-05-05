var baground, santa
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies


function preload(){
  backgroundimg = loadImage('snow3.jpg')
  santaimg= loadImage('santa.png')
  
  }


function setup() {
  createCanvas(800,500);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  //createSprite(400, 200, 50, 50);

 baground = createSprite(400,250)
baground.addImage(backgroundimg)
baground.scale=0.8


snow1= new Snow(50,-10,50,50)
snow2= new Snow(70,-11,50,50)
snow3= new Snow(80,-12,50,50)
snow4= new Snow(90,-13,50,50)
snow5= new Snow(110,-14,50,50)
snow6= new Snow(130,-15,50,50)
snow7= new Snow(150,-16,50,50)
snow8= new Snow(170,-17,50,50)
snow9= new Snow(190,-18,50,50)
snow10= new Snow(210,-17,50,50)
snow11= new Snow(230,-16,50,50)
snow12= new Snow(250,-15,50,50)
snow13= new Snow(270,-14,50,50)
snow14= new Snow(290,-13,50,50)
snow15= new Snow(310,-12,50,50)
snow16= new Snow(330,-11,50,50)
snow17= new Snow(350,-10,50,50)
snow18= new Snow(370,-11,50,50)
snow19= new Snow(390,-12,50,50)

 santa = createSprite(700,420,50,50)
 santa.addImage(santaimg)
 santa.scale=0.6

}



function draw() {
  background(255,255,255);  
  Engine.update(engine)

  if(santa.x<100){
    santa.velocityX= -4
  }
 if(santa.x>=100){
santa.velocityX= 0
 }


  drawSprites();
  snow1.display()
  snow2.display()
  snow3.display()
  snow4.display()
  snow5.display()
  snow6.display()
  snow7.display()
  snow8.display()
  snow9.display()
  snow10.display()
  snow11.display()
  snow12.display()
  snow13.display()
  snow14.display()
  snow15.display()
  snow16.display()
  snow17.display()
  snow18.display()

}