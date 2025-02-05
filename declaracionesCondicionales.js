//declaraciones condicionales 
// if, else,elseif,switch

//La declaracion if

let hora = 15;

if (hora < 18) {
    console.log("Buenas tardes o dias") 
} else {
    console.log("Buenas noches") 
}

console.log("----------------------------------------------------")

if (hora <= 10) {
    console.log("Buenos dias")
}else if(hora <= 20) {
    console.log("Buenas tardes")
}else {
    console.log("Buenas noches")
}

console.log("-------Example-------")

//Hour 
//  if hour is between 6am and 12pm: Good Morning!
// if it is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening

let hour = 20;

if (hour >= 6 && hour < 12) 
    console.log("Good Morning!")
else if (hour>=12 && hour < 18)
    console.log("Good afternoon!")
else 
    console.log("Good evening!")

//if con prompt 

let permiso = confirm('Debes ser mayor de edad para accedr')

let edad = prompt('Cual es tu edad')
if (edad<18) {
    alert(' No puedes acceder')
} else {
    alert('Puedes acceder ')
}

//Boton 

var btnA = document.querySelector(".teamo")

btnA.addEventListener("click",teamo)

 function teamo() {
    var nombre = prompt("Ingresa tu nombre")
    if (nombre == 'Xana') {
        alert( `Te amo mi vida ${nombre}`)
    } else {
        alert("Quien gonorrea eres")
    }
    
 }


