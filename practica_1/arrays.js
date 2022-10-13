var frutas = ["Manzana","Pera","Uva","Cereza"];

console.log(frutas);
//ver la longitud de la array 
console.log(frutas.length);
// ver el elemento exacto de la array
console.log(frutas[0]); //manzana
// para añadir mas elementos a la array
var masFrutas = frutas.push("banano");//console.log(frutas[4]); banano
// eliminar el ultimo elemento de la array
var eliminar = frutas.pop();//console.log(frutas);(4) ['Manzana', 'Pera', 'Uva', 'Cereza']
// para agregar un elemento pero al inicio de la array 
var nuevaFruta = frutas.unshift("pitaya");
// eliminar el primer elemento de la array
var borraFruta = frutas.shift();//console.log(frutas); (5) ['Manzana', 'Pera', 'Uva', 'cereza', 'papaya']
// saber la posicion de un elemento por su nombre
var posicion = frutas.indexOf("Pera");