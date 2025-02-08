//Ejercicos switch case

//Dias de la semana 

// let numero = parseInt (prompt('Ingrese un numero del 1 al 7 '))

// switch (numero) {
//     case 1:
//         alert('Lunes')
//         break;
//     case 2:
//         alert('Martes')
//         break;
//     case 3:
//         alert('Miercoles')
//         break;
//     case 4:
//         alert('Jueves')
//         break;
//     case 5:
//         alert('Viernes')
//         break;
//     case 6:
//         alert('Sabado')
//         break;
//     case 7:
//         alert('Domingo')
//         break;

//     default:
//         alert('No ingresaste ningun valor valido')
//         break;
// }

//Clasificacion de notas

// let nota = String(prompt('Ingresa tu nota del examen: A,B,C,D,F'))

// switch (nota) {
//     case "A":
//         alert('Excelente')
//         break;
//     case "B":
//         alert('Muy bien')
//         break;
//     case "C":
//         alert('Regular')
//         break;
//     case "D":
//         alert('Malo')
//         break;
//     case "F":
//         alert('Reprobado')
//         break;

//     default:
//         break;
// }

//Menu de pizza 

// let menu = parseInt([prompt('Ingrese la opcion que quiere consumir,1-Pizza,2-Hamburguesa,3-Ensalada')])
// switch (menu) {
//     case 1:
//         alert(`Escogiste la pizza`)
//         break;
//     case 2:
//         alert(`Escogiste la hamburguesa`)
//         break;
//     case 3:
//         alert(`Escogiste la ensalada`)
//         break;

//     default:
//         break;
// }

// Calculadora basica 

// let numero1 = parseInt(prompt('Ingresa el numero 1'))
// let numero2 = parseInt(prompt('Ingresa el numero 2'))
// let operacion = String(prompt('Ingrese la operacion a realzar, suma,resta,multiplicacion o division'))

// switch (operacion) {
//     case 'suma':
//         alert(numero1+numero2)
//         break;
//     case 'resta':
//         alert(numero1-numero2)
//         break;
//     case 'multiplicacion':
//         alert(numero1*numero2)
//         break;
//     case 'division':
//         alert(numero1/numero2)
//         break;


//     default:
//         break;
// }

// Colores en ingles

//Colores en ingles 

// let color = String(prompt('Ingresa el color en espanol: rojo,azul,verde,amarillo'))

// switch (color) {
//     case 'rojo':
//         alert('red')
//         break;
//     case 'azul':
//         alert('blue')
//         break;
//     case 'verde':
//         alert('green')
//         break;
//     case 'amarillo':
//         alert('yellow')
//         break;

//     default:
//         alert('No ingresaste una opcion valida')
//         break;
// }

//Clasificacion de edades 

// let edad = parseInt(prompt('Ingresa tu edad'))

// switch (true) {
//     case edad <= 12:
//         alert('Eres un nene')
//         break;
//     case edad>13&&edad<=17:
//         alert('Eres un adolecente')
//         break;
//     case edad>18 &&edad<=59:
//         alert('Eres un adulto')
//         break;
//     case edad >=60:
//         alert('Eres adulto mayor')
//         break;

//     default:
//         break;
// }

//Conversion de unidades 
let unidad = prompt("Ingresa una unidad (km, m, cm, mm):").toLowerCase();
let valor = parseFloat(prompt("Ingresa el valor a convertir:"));

switch (unidad) {
    case 'km': alert(`${valor} km = ${valor * 1000} metros`); break;
    case 'm': alert(`${valor} m = ${valor} metros`); break;
    case 'cm': alert(`${valor} cm = ${valor / 100} metros`); break;
    case 'mm': alert(`${valor} mm = ${valor / 1000} metros`); break;
    default: alert("Unidad no válida.");
}
