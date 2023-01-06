
 let width = 30;
 let posicion;
 let comida;
 let snake;
 let direccion;
 let score=0;
 let lives=3;
 let velocidad;
 let time;
 let interval;
 let stop;
 let contadorScore;
 let contadorVida;
 let tablero;
function events(params) {
   tableroLogic(); 
}
function tableroLogic(params) {
   let  grid = document.querySelectorAll(".tablero");
    let start = document.querySelectorAll(".start");
    contadorScore= document.querySelectorAll(".contador")
    contadorVida= document.querySelectorAll(".contadorVidas")
    tablero= document.querySelectorAll(".tablero div");
}
function controls(e) {
    
if(e.keyCode==39 && direccion != -1){
    direccion=1;
}else if(e.keyCode==38 && direccion != width){
    direccion= -width
}
else if(e.keyCode==37 && direccion != 1){
    direccion= -1
}
else if(e.keyCode==40 && direccion != width){
    direccion= width
}
let start = document.querySelectorAll(".start");
start.addEventListener("click", empezar)

}
function empezar(){
    if(snake){
        snake.forEach(element=> tablero[element].classList.remove("snake"))
        tablero.forEach(element=> tablero[element].classList.remove("comida"))
        clearInterval(interval)
    }

    direccion=1;
    time=250;
    snake=[452,451,450];
    posicion=0
    speed=0.97
    comida=0
    stop= 0
    contadorScore.innerText= score;
    contadorVida= innerText= lives
    posicion.forEach(element  => tablero[element].classList.add("snake"));
    interval=setInterval(positionSnake,time)
    
}

function comidaGenerator(boolean){

    if((score% 3 == 0) && boolean){
        for(let i=0; i< array.lenght; i++){
            do{
                comida=Math.floor(Math.random * squares.lenght)
            }
            while(tablero[comida].classList.contains("snake"));
            if(i==0){
                tablero[comida].classList.add("comida");
            }else{
                tablero[comida].classList.add("comidaChetada");
            }
            setTimeout(()=>{
                tablero[comida].classList.remove("comidaChetada");
            }, 2000)
        }
    }
}



document.addEventListener("DOMContentLoaded", events)
document.addEventListener("keydown", controls)