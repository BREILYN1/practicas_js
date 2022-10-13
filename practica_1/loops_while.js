var estudiantes = ["pedro","juan","matias","stiven","david"];

function saludoEstudiante(estudiante){
    console.log(`hola ${estudiante}`);
}

while(estudiantes.length > 0){
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    saludoEstudiante(estudiante);
}  