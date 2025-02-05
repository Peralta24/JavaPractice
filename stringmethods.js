//Metodos de los String 

const texto1 = "Me gusta mucho NF"

console.log(texto1.length) //Te da el numero de caracteres del string
console.log(texto1.charAt(0)) //Te retorna el caracter de la posicion 0 
console.log(texto1.charCodeAt(0)) //Te retorna el numero ASCII del caracter

//El  at()método devuelve el carácter en un índice (posición) especificado en una cadena.
console.log(texto1.at(4))//Te retorna el caracter de la posicion 4
console.log(texto1[0]);

console.log("---------------------------------------------------")

//Extraer partes de una cadena 

//CON SLICE

let texto2 = "Mi cancion favorita es Paralyzed";

console.log(texto2.slice(0,7)) //Obtener un fragmento del string el parametro 1 es donde empieza y el segundo donde acaba
console.log(texto2.slice(-12)) //Cuando el parametro es negativo. se cuenta desde el final del string
console.log(texto2.slice(-12,-6))

//CON SUBSTRING  es lo mismo solo que no acepta valores negativo y cuando el numero de fin sea as grande
//que el numero uno los cambia de posicion para realizar las operaciones 

console.log("---------------------------------------------------")

//toUpperCase () toLowerCase()

console.log(texto2.toLowerCase())
console.log(texto2.toUpperCase())

console.log("------------------------------------------------")

//concatenar cadenas 

let texto3 = "Pero tambien me gusta mucho Happy"

console.log(`La union de la cadena es ${texto2} ${texto3}`)
console.log ("Hello".concat(" " ,"Adios"))//metodo .concat


console.log("----------------------------------------")

//Metodo Trim 

let texto4 = "          Hello World              "
console.log(texto4.trim())
console.log(texto4.trimEnd())
console.log(texto4.trimStart())

//Metodo padStart()

let texto5 = "5"
console.log(texto5.padStart(4,"0")) //Rellena la cadena con 0 y lo repite 4 veces
console.log(texto5.padEnd(9,"1"))
//Si quieres rellenar un numero primero debes de transformarlo a string 
let num1 = 5;
let texto6 = String(num1)
console.log(texto6.padEnd(2,"0"))

//Metodo REPEAT()

let texto7 = "Hola Mundo"
console.log(texto7.repeat(5)) //Repite la cadena 5 veces .repeat(5)


//Metodo Replace()
//Reemplaza contenido de la cadena 
// El replace()método no cambia la cadena en la que se llama.

// El replace()método devuelve una nueva cadena.

// El replace()método reemplaza solo la primera coincidencia.

// Si desea reemplazar todas las coincidencias, utilice una expresión regular con el indicador /g activado.

let texto8 = "Cambiando Cadenas,de las Cadenas"
console.log(texto8.replace("Cadenas","Playeras"))

console.log(texto8.replace(/CADENAS/i,"Adios")) //Para reemplazar la cadena sin importan si lo ponemos en
//mayusculas o minusculas usamos /i

console.log(texto8.replace(/Cadenas/g,"ADIos"))//Para reemplazar todas las que son iguales usamos g

console.log(texto8.replaceAll("Cadenas","cadeninas"))

//Division de codenas de JavaScript

console.log(texto8.split(",")) //matriz separada por comas
console.log(texto8.split(" "))//matriz separada por espacion
console.log(texto8.split("|") )//mastriz separada
console.log(texto8.split(""))// te muestra todos los caracteres 
