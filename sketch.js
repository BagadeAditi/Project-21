var canvas;
var music;
var cube;
var edge,edge1,edge2,edge3;
var block1,block2,block3,block3;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(400,400);
    cube=createSprite(random(20,380),50,25,25)
    cube.shapeColor="white"
    cube.velocityX=4
    cube.velocityY=5

    edge=createSprite(410,200,10,400)
    edge1=createSprite(-10,200,10,400)
    edge2=createSprite(200,380,400,20)
    edge3=createSprite(200,-10,400,10)

    block1=createSprite(50,380,80,20)
    block1.shapeColor="blue"
    block2=createSprite(150,380,80,20)
    block2.shapeColor="yellow"
    block3=createSprite(250,380,80,20)
    block3.shapeColor="purple"
    block4=createSprite(350,380,80,20)
    block4.shapeColor="red"


}

function draw() {
    background(rgb(169,169,169));

    if(cube.isTouching(block1) && cube.bounceOff(block1)){
        cube.shapeColor="blue" 
        music.loop();   
    }
    if(cube.isTouching(block2)){
    cube.velocityX=0
    cube.velocityY=0
    cube.shapeColor="yellow"
    music.stop();
    }
    if(cube.isTouching(block3) && cube.bounceOff(block3)){
        cube.shapeColor="purple"    
    }
    if(cube.isTouching(block4) && cube.bounceOff(block4)){
        cube.shapeColor="red"    
    }
    edge2.visible=false
    //add condition to check if box touching surface and make it box
    cube.bounceOff(edge);
    cube.bounceOff(edge1);
    cube.bounceOff(block1);
    cube.bounceOff(block2);
    cube.bounceOff(block3);
    cube.bounceOff(block4);
    cube.bounceOff(edge3);
    cube.bounceOff(edge2);
    drawSprites();
}
