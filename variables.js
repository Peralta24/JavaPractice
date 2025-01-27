
//Definir e imprimir
const nombre = "José";
let edad = "21";
console.log(nombre,edad)

//Interpolacion de texto
let ciudad = "Puebla";
let pais = "Mexico";
console.log(ciudad,pais)
//Actualizar variales
let contador = 0;
console.log(contador)
contador++;
console.log(contador)
contador++
console.log(contador)
contador++
console.log(contador)

//Concatenacion de cadenas
const primerNombre = "Jose";
const apellidoPaterno = "Peralta"
const apellidoMaterno = "Martinez"
alert(`Mi nombre es ${primerNombre} ${apellidoMaterno} ${apellidoPaterno}`)

//Calculos simples 
const numero1 = 212;
const numero2 = 215;
const suma = numero1+numero2;
console.log(suma)

//Constantes 
const pi = 3.1416;
console.log(`El valor de pi es : ${pi}`)

//Valores booleanos 
var esEstudiante = false;
if(esEstudiante){
    alert("Soy estudiante")
}else {
    alert("No soy estudiante")
}
//Cambiar valores 
let x = 10;
let y = 20;
let temp = x//Defenimos un temp para que guarde el valor de x 
x = y;
y = temp;
console.log(`El valor de x es ${x} y el valor de y es ${y}`)

//Calculando con variables 
let radio = 21;
const pi2 = 3.1416;

let area = pi*(radio*radio);
console.log(area)

//Mensaje dinamico 
var hora = 20;
if (hora < 12) {
    alert("Buenos dias")
}else if(hora <= 18) {
    alert("Buenas tardes")

}else{
    alert("Buenas noches")
}