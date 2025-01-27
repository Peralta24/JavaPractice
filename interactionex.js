//Ejercicios de interacciones 

//SALUDO PERSONALIZADO 
let saludo = prompt("Hola! Cual es tu nombre ")
alert(`Bienvenido ${saludo}! gracias por usar Huekan`)

//CONFIRMAR LA ACCION 
let conf = confirm("Desea continuar con la accion?")
if (conf) {
    alert("Continuaste")
} else {
    alert("Cancelaste la accion")
}

//CALCULAR LA SUMA 
let num1 = prompt("Digital el numero 1")
let num2 = prompt("Digital el numero 2")
numero1 = Number(num1)
numero2 = Number(num2)
alert("La suma es "+ (numero1+numero2))

//EDAD Y PERMISO 
let edad= prompt("Ingresa tu edad")
edad = Number(edad)
if (edad < 18){
    let permiso = confirm("Tienes permiso de tus padres")
    if(permiso){
        alert("Bienvenido puedes acceder")
    }else {
        alert("No tienes acceso")
    }
}else {
    alert("Bienvenido puedes acceder")
}

//Adivina el numero 

let adivinanza = prompt("Adivina un número entre 1 y 10:");
let numeroAleatorio = Math.floor(Math.random() * 10) + 1; // Número aleatorio entre 1 y 10

let acertaste = confirm("El número era " + numeroAleatorio + ". ¿Lo adivinaste?");
if (acertaste && adivinanza == numeroAleatorio) {
    alert("¡Adivinaste correctamente!");
} else {
    alert("No lo adivinaste, el número era: " + numeroAleatorio);
}

//Confirmar cierre 
let cerrar = confirm("Seguro que quieres salir")
if(cerrar){
    alert("Saliendo...")
}else {
    alert("Quedandote aqui..")
}

//MENSAJE DINAMICO 

let mensaje = prompt("Escribe un mensaje personalizado")
alert(mensaje)

//COMBINACION DE NOMBRE Y EDAD
let nombres = prompt("Ingresa tu nombre")
let edads = prompt("Ingresa tu edad")
alert("Tu nombre es "+nombres +"Y tu edad es"+edads)

//DESICIONES IMPORTANTES 
let desicion = confirm("Quieres tomar una desicion")
if (desicion) {
    alert("Esta bien")
} else {
    alert("Dale mas tiempo")
}

//Calcular descuento 
let precio = prompt("Ingresa el precio de tu producto")
let descuento = prompt("Ingresa el descuento de tu producto")
precio = Number(precio)
descuento = Number(descuento)

let precioFinal = precio - (precio *(descuento/100));
alert("El precio final es "+precioFinal)