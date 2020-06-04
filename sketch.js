var bul,w,s,wall,d;
var thickness

function setup() {
  createCanvas(1600,400);

 thickness=round(random(22,83))
 
 wall=createSprite(1200,200,thickness,200)
// wall.shapeColor(80,80,80)

 s =random(100,150);

  w =random(30,52)

 bul=createSprite(25,200,50,10)
 bul.velocityX=s

}

function draw() {
  background(255,255,0);

 d=round(w*s*s*1/thickness*1/thickness*1/thickness)

textSize(20)
text("thickness="+thickness,350,75)

    textSize(30)
    text("destruction="+d,300,380)
  if(bul.collide(wall)){
   if(d>10){
     bul.shapeColor="red"
   }
   else{
     bul.shapeColor="green"
   }

    
  }
  

  drawSprites();
}
