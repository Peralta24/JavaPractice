//Identificador de tipos de datos
let number = 123
let string = "String"
let bigInt = 1234n
let boolen = true;
const null2 = null 
let un = undefined

console.log(typeof(number))
console.log(typeof(string))
console.log(typeof(bigInt))
console.log(typeof(boolen))
console.log(typeof(null2))
console.log(typeof(un))

//Numero grande con BigInt 
let num1 = 1212134213123131232131232131313213123n
let num2 = 2133219382138213821983928938192839182938129381283n
let suma =num1 + num2;
console.log(suma)
console.log(typeof(suma))

//Cadena de caracteres 

let texto = "Hola Buenos dias"
let textoconcatenado = texto+ ", como estas?"
let mensajeTemplate =  `${texto}, ¿cómo estás?`;

console.log(texto)
console.log(typeof(texto))
console.log(textoconcatenado)
console.log(typeof(textoconcatenado))
console.log(mensajeTemplate)
console.log(typeof(mensajeTemplate))

//Booleanos simples 

let valor1 = true;
let valor2 = false;

if (valor2){
    console.log("Bienvenido")

}else {
    console.log("No eres Bienvenido")

}
console.log(typeof(valor1))
console.log(typeof(valor2))

//Null vs Undefined 

let n1 = null;
let n2;

console.log(typeof(n1))
console.log(typeof(n2))

//Uso de symbol 
let simbolo1 = Symbol("id")
let simbolo2 = Symbol("id")
console.log(simbolo1 == simbolo2);
console.log(typeof(simbolo1))
console.log(typeof(simbolo2))

//Objeto simple 

let objeto =  {
    nombre: "audifonos",
    edad: 29,
    ciudad: "Oaxaca"

}

console.log(typeof objeto)
console.log(objeto.nombre)
console.log(objeto.edad)
console.log(objeto.ciudad)
console.log(typeof(objeto.nombre))
console.log(typeof(objeto.edad))
console.log(typeof(objeto.ciudad))



//identificar multiples tipos 

let arreglo = [2,"hola",null,121232n,true,undefined]
for(let elemento of arreglo ) {
    console.log(elemento , typeof elemento)
}

//Convertir tipos 

let numCadena = 21;
let cadenaConvertida = String(numCadena)
let cadenaNum = "123";
let numeroConvertido = Number(cadenaNum)

console.log(cadenaConvertida)
console.log(numeroConvertido)

//Error de Null 
let vnull = null;
console.log(typeof(vnull))


let objeto2 = {
    nombre: "GodMonitor",
    costo: 35000,
    tamaño: "49 pulgadas",
    marca: "lg",
    color: "negro",
    pantalla: "lcd"
}

let numeroco = String(objeto2.costo)
console.log(typeof(numeroco))

let arregloraro = [2,null,,"hola",2131121n,2.3,true,false]
for (let element of arregloraro) {
    console.log(element,typeof element)
}