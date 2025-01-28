// //Booleano es el resultado 
// alert (2>1)
// alert (5<4)
// alert (191>=191)

// let resultado = 20<10
// alert (resultado)

//Comparacion de cadenas 

// alert ('Z'<'A')
// alert ('Glow'<'Glee')
// alert ('Bee'<'Be')

//Ejercicios de comparacion de datos 

console.log("casa" > "cafe"); //true
console.log("perro" < "gato"); //false
console.log("manzana" == "manzana"); //true 
console.log("manzana" === "manzana");//true
console.log("manzana" === "Manzana");//false

console.log ("-----------------------------")

//Compraracion estrica a no estricta 
console.log(5 == "5");//true
console.log(5 === "5");//false
console.log(null == undefined);//true
console.log(null === undefined);//false
console.log(true == 1);//true
console.log(false == 0);//true

console.log ("-----------------------------")

let valor1 = undefined;
let valor2 = null;


if (valor1 == null || valor2 == null) {
    console.log("Al menos uno es null o undefined");
} else {
    console.log("Ninguno es null o undefined");
}

console.log("-----------------------------------")

console.log("10" > 5);//true
console.log(null >= 0);//true
console.log(undefined < 0);//false
console.log(null == 0);//false
console.log(null === 0);//false

console.log("-------------------------------------")

//Ordenamiento con cadenas 

const palabras = ["zapato","perro","arbol","gato","nino"]
console.log(palabras.sort())

console.log("-------------------------------------")

//Deteccion de valores nulos  y comparaion de numeros

function compararValores(a,b) {
    if (a == null ||b== null) {
        return "Uno de los dos valores es null o undefined"
    }

    if (a<b) return `El numero ${a} es menor que el numero ${b}`
    else if (a>b) return `El numero ${a} es mayor que el numero ${b}`
    else return     `${a} es igual a ${b}`
}

console.log(compararValores(1,2))

console.log ("-----------------------------")

//Booleanos y operadores

console.log(0 == false); // true
console.log(0 === false); // false
console.log(" " == 0); // true
console.log(" " === 0); // false
console.log("true" == true); // false

