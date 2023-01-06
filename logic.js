let array = [];
let pixelContador;
let pixelContadorHeight
let canvas;
let context;
let juego={
nivel: 1
}
let player={
    positionX:0,
    positionY:0, 
    generalPosition:0,
    lastPosition:0,  
    tamaño:1,
    score:0,
    speed:20,
    time:0,
    arrayIncremento:[],
    xLast:0,
    yLast:0,
}
let manzana={
    x:1,
    y:1,
    manzana:1,
}
function events(params) {
    snake();
    contadorArray();
    arrayLess();
    arrayClean();
}
function rejillas() {
for(let i=0; i<=canvas.width;i+=10 ){
    context.beginPath();
    context.moveTo(i,0);
    context.lineTo(i,canvas.height);
    context.strokeStyle="white";
    context.lineWidth = 0.1;
    context.stroke();
}
for(let i=0; i<=canvas.height;i+=10 ){
    context.beginPath();
    context.moveTo(0,i);
    context.lineTo(canvas.width,i);
    context.strokeStyle="white";
    context.lineWidth = 0.1;
    context.stroke();
}

}
function snake() {
    canvas = document.getElementById("canvas");
    context= canvas.getContext("2d")

  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;

  context.fillStyle="green";
  context.fillRect(0,0,canvas.width,canvas.height)

  pixelContador= Math.abs(canvas.width/10).toFixed(0);
  pixelContadorHeight=Math.abs(canvas.height/10).toFixed(0);
}
function contadorArray(){
for(let i=0; i<=pixelContador;i++){
array[i]=[]

for(let j=0; j<= pixelContadorHeight; j++){
    array[i][j]=Math.floor(Math.random()*2)
}
}

}
function arrayLess() {
    for(let i=0; i < pixelContador;i++){
        for(let j=0; j <pixelContadorHeight; j++){
        if(array[i][j]==0){
        context.fillStyle = "green";
        context.fillRect(i*10,j*10,10,10);

        }else{
            context.fillStyle = "white";
        context.fillRect(i*10,j*10,10,10);
        }


        }
    }
}
function arrayClean() {
    for(let i=0; i<=pixelContador;i++){
        array[i]=[]
         
        for(let j=0; j<= pixelContadorHeight; j++){
            array[i][j]=0;
        }
        }
}
function crearManzana(params) {
    manzana.x=Math.floor(Math.random()*pixelContador)
    manzana.y=Math.floor(Math.random()*pixelContadorHeight);
}
function comida() {
    if(manzana.manzana==1){
        array[manzana.x][manzana.y]=1;
        context.fillStyle = "red";
    }
    // for(let i=0; i < pixelContador;i++){
    //     for(let j=0; j <pixelContadorHeight; j++){
    //     if(array[i][j]==0){
    //     context.fillStyle = "green";
    //     context.fillRect(i*10,j*10,10,10);

    //     }else{
    //         context.fillStyle = "red";
    //     context.fillRect(i*10,j*10,10,10);
    //     }


    //     }
    // }
}
  
function eventsKeyboard(e) {
    if(e.keyCode==37){
        player.generalPosition=3;
    }
    else if(e.keyCode==38){
        player.generalPosition=0
    }
    else if(e.keyCode==39){
        player.generalPosition=1;
    }
    else if(e.keyCode==40){
        player.generalPosition=2;
    }
}
function playerPos(params) {
    if(player.generalPosition==1){

        if(player.lastPosition == 3){

            player.generalPosition==3
        }else{
            player.positionX++;
        }
    
    }
    if(player.generalPosition==3){

        if(player.lastPosition == 1){

            player.generalPosition==1
        }else{
            player.positionX--;
        }
    
    }
    if(player.generalPosition==0){

        if(player.lastPosition == 2){

            player.generalPosition=2
        }else{
            player.positionY--;
        }
    
    }

    if(player.generalPosition==2){

        if(player.lastPosition == 0){

            player.generalPosition=0
        }else{
            player.positionY++;
        }
    
    }

    for(let i=0; i<player.arrayIncremento.length; i++){
        

        let x = player.arrayIncremento[i][0];
        let y = player.arrayIncremento[i][1];
       

        array[x][y]=1;
        }
    for(let i=0; i< player.arrayIncremento.length; i++){
        if(i==player.arrayIncremento.length-1){
            player.arrayIncremento[i][0]= player.xLast;
            player.arrayIncremento[i][1]= player.yLast;
        }
        else{
            player.arrayIncremento[i][0] = player.arrayIncremento[i+1][0];
            player.arrayIncremento[i][1]= player.arrayIncremento[i+1][1]
        }
    }


player.lastPosition=player.generalPosition

if(player.positionX> pixelContador-1){
     player.positionX=0;
}
else if(player.positionX< 0){
    player.positionX=pixelContador-1
}
else if(player.positionY>pixelContadorHeight-1){
    player.positionY=0
}
else if(player.positionY < 0){
    player.positionY=pixelContadorHeight-1
}

array[player.positionX][player.positionY]=1;

if(player.positionX== manzana.x && player.positionY == manzana.y){
   crearManzana();

   player.arrayIncremento.push([player.xLast, player.yLast])

   console.log(player.arrayIncremento);
   player.score=player.score+1

   console.log(player.score);
}
player.xLast= player.positionX;
player.yLast=player.positionY;



}
function punticos(params) {
    context.fillStyle="white"
    context.font="20px Arial"
    context.fillText("Score: " + player.score,10,30)
}

setInterval(function(){
 // Limpia el array

arrayClean();
playerPos();
// Crea la comida

comida();

// Renderiza el array
arrayLess();

//Pinta el canvas (la Pagina con las rejillas en general)
rejillas();
punticos();
},50)
document.addEventListener("DOMContentLoaded", events)
document.addEventListener("keydown", eventsKeyboard)