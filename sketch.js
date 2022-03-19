var raquete
function preload(){

  }


function setup(){

createCanvas(500,400)

   raquete = createSprite(200,350,120,10)

var edges = createEdgeSprites()

criarLinha(65,"red")
criarLinha(65+29,"blue")
criarLinha(65+29+29,"yellow")
criarLinha(65+29+29+29,"pink")


}

function draw(){
background(0)
raquete.x = World.mouseX

if(raquete.x < 65){
    raquete.x = 65
}

if(raquete.x > 435){
  raquete.x = 435
}



drawSprites()
}



function criarLinha(y,cor){

  for(var c = 0; c<6; c++){

    var brick = createSprite(65+54*c,y,50,25)
 
     brick.shapeColor = cor
 
 }

}