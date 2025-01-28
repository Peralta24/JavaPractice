//Conversion de tipos 

//Ejercicos convertir a string 
let valor1 = 123;
let valor2 = true;
let valor3 = null;
let valor4 = [1,2,3]

let objeto1 = {
    nombre: "Juan"
}

valor1 = String(valor1)
valor2 = String(valor2)
valor3 = String(valor3)
valor4 = String(valor4)
objeto1 = String(objeto1.nombre)

alert(`El valor 1 es ${valor1} el valor 2 es ${valor2} el valor 3 es ${valor3}
    el valor 4 es ${valor4} el objeto es ${objeto1}`)
console.log(typeof valor1)
console.log(typeof valor2)
console.log(typeof valor3)
console.log(typeof valor4)
console.log(typeof objeto1)

//Convertir a numeros 

console.log(Number("123"))
console.log(Number("12.34"))
console.log(Number(true))
console.log(Number(false))
console.log(Number(""))
console.log(Number("abc"))

//Cadena de entrada y retorna el doble del valor numerico 

let entrada = "25"
console.log(typeof entrada)
entrada = Number(entrada)
entrada = 25 + 25
console.log(entrada)
console.log(typeof entrada)

console.log("5" * 2)
console.log("10" / "2")
console.log("20" - true)

//Conversion a Booleano 

console.log(Boolean(1))
console.log(Boolean(0))
console.log(Boolean(""))
console.log(Boolean("hello"))
console.log(Boolean(undefined))
console.log(Boolean(null))

//Verificar si una cadena esta vacia o no 

let texto = ""

if (Boolean(texto)){
    console.log("La cadena esta llena"+" y es "+texto)
}else {
    console.log("La cadena esta vacia")
}

//Convertir cualquier tipo de dato 

function convertValue(value) {
    if (typeof value === "number") {
        return String(value);
    } else if (typeof value === "string") {
        return Number(value);
    } else if (value === null || value === undefined) {
        return Boolean(value);
    }
}
console.log(convertValue(42));      
console.log(convertValue("123"));  
console.log(convertValue(null));   
