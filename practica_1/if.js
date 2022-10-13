// var edad = 18

// if (edad === 18) {
//     console.log("pude votar, por primera vez")
// }
// else if (edad > 18) {
//     console.log("puede votar otra vez")
// } 
// else {
//     console.log("no puede votar")
// }

// juego 
var jugador;
var computador;

if (jugador == "tijeras"  && computador == "papel") 
{
    console.log("Ganaste");
}
else if (jugador == "Piedra"  && computador == "tijeras") 
{
    console.log("Ganaste");
}
else if (jugador == "papel"  && computador == "piedra") 
{
    console.log("Ganaste");
}
else if (jugador == computador ) 
{
    console.log("empate");
}
else {
    console.log("Perdiste")
}