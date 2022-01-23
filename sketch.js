var barco,mare;

function preload(){
    
    ship_Image = loadImage("ship-1.png")
    oceano_Image = loadImage("sea.png")
    ship2_Image = loadImage("ship-2.png")
}

function setup(){
    createCanvas(400,400)
    
    
    
    barco = createSprite(100,300,20,50)
    barco.addImage(ship_Image)
    oceano = createSprite(200,300,20,20)
    barco.scale = 0.20
    oceano.addImage(oceano_Image)
    oceano.scale= 0.20
    oceano.depth = barco.depth
    barco.depth = barco.depth + 1
    oceano.velocityX=-5
    if(oceano.x < 0){
    oceano.x = oceano.width/2;
    }
}


function draw() {
    
    
    
    drawSprites();
}
