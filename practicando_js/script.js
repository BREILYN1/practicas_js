const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#inpuId');
const input2 = document.querySelector('#inpuId2');
const button = document.querySelector('#btnCalcular');
const resultado = document.querySelector('#result');

form.addEventListener('submit', sumarinput);

function sumarinput(event){
        // console.log("event");
        event.preventDefault();  
        const suma = input1.value + input2.value;
        resultado.innerText = "resultado: " + suma;  
}