var bgImg;
var cat;
var mouse;
var catimg1, catimg2, catimg3;
var mouseimg2, mouseimg1,mouseimg3;



function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
 catimg1  = loadAnimation("images/cat1.png");

// falta una i
  mouseimg1= loadAnimation("images/mouse1.png");

  catimg2  = loadAnimation("images/cat2.png","images/cat3.png");
  mouseimg2= loadAnimation("images/mouse2.png","images/mouse3.png");
 catimg3=loadAnimation("images/cat4.png");
 mouseimg3=loadAnimation("images/mouse4.png")
// falta catimg3 y mouseimg3
 
}
 
function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite(870,600);
cat.addAnimation("gatoSentado",catimg1);
cat.scale=0.2;

mouse = createSprite(200,600);
mouse.addAnimation("ratonparado",mouseimg1);
mouse.scale=0.2;
 
}
 
function draw() {
 
    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
 if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    { 
        cat.velocityX=0;
    cat.addAnimation("gatoSentado2lassecuela",catimg3);
    cat.x=300;
    cat.scale=0.2
    cat.changeAnimation("gatoSentado2lassecuela");
    mouse.addAnimation("ratondectetive",mouseimg3);
    mouse.scale=0.15;
    mouse.changeAnimation("ratondectetive")
    
    }
    drawSprites();
}
 
function keyPressed(){
 
  
 
if(keyCode === LEFT_ARROW){
    //falta
     cat.velocityX = -5; 
        cat.addAnimation("gatocorriendo", catimg2);
        cat.changeAnimation("gatocorriendo");

    mouse.addAnimation("ratonmolestandio",mouseimg2);
    mouse.frameDelay =25;
    mouse.changeAnimation("ratonmolestando");

}
}