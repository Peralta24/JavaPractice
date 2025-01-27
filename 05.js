//CONCATENACION EN TEXTO \\

//CADENAS

 var botonaction2 = document.querySelector(".boton2")

botonaction2.addEventListener("click",sayHi)

 function sayHi() {
    var nombre = prompt("Ingresa tu nombre")
    if (nombre) {
        alert("Bienvenido al sistema" +"  "+nombre)
    } else {
        alert("No ingresaste tu nombre")
    }
    
 }

var quote = "HolaSubstring"
var original ="No me gustan los huevos verdes y el jamon,dijo Sam I am"

quoteLenght = quote.length
index = quote.substring(4)
var revisedQuote =original.slice(0,41)

console.log(quoteLenght)
console.log(index)
console.log(revisedQuote)              
