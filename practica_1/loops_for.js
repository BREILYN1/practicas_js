var estudiantes = ["pedro","juan","matias","stiven","david"];

function saludoEstudiante (estudiante){
    console.log(`hola ${estudiante}`); 
}
//opcion|1
// for(var i = 0; i < estudiantes.length; i++){
//     saludoEstudiante(estudiantes[i])
// }

//opcion|2
for(var estudiante of estudiantes){
    saludoEstudiante(estudiante);
}