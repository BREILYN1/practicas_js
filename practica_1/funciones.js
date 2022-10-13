// declarativas

function funcion(){
    return 3;   
}

// expresion

var funcion = function() {
    return a + b ;
}

funcion();
// saludo 
function saludo (estudiante){
    console.log(estudiante);
}   
saludo("stiven")
function saludo (estudiante){
    console.log(`hola ${estudiante}`);
}
saludo("stiven") // hola stiven
// suma 
function sumar(a,b){
    var resultado = a + b;
    return resultado
} 
sumar (1,3); // 4 
//nombre
var name = "stiven";
function nombre() {
    var miApellido = "velasquez";
    console.log(name +" " + miApellido);
}
name(); //stiven
nombre();
//stiven velasquez