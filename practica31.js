//Practica del dia 01/31

var btnAction = document.querySelector(".prueba");
btnAction.addEventListener("click",pruebaS)
function pruebaS(){
var name = prompt("Ingresa tu nombre")
    if (name) {
        alert("Bienvenido al sistema" +"  "+name)
    }else {
        alert("No ingresaste tu nombre")
    }
}


var confirmacion = confirm('DEBES SER MAYOR DE EDAD PARA ACCEDER');

if (!confirmacion) {
    alert("Saliendo del sistema...");
} else {
    var edad = prompt("Ingresa tu edad");

    if (edad !== null && edad >= 18) {
        alert("Tienes acceso al sistema");
    } else {
        alert("No tienes acceso al sistema");
    }
}

// var confirmacion2= confirm('hola quieres acceder')
