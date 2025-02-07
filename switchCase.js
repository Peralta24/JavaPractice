//Trabajando con Swtich JavaScript

//Sintaxis 
// switch(expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//     // code block
// }

//Ejemplo dia

let day;

switch (new Date().getDay()) {
    case 0:
        day = "Sunday"
        break;
    case 1:
        day = "Monday"
        break;
    case 2:
        day = "Tuesday"
        break;
    case 3:
        day = "Wednesday"
        break;
    case 4:
        day = "Thursday"
        break;
    case 5:
        day = "Friday"
        break;
    case 6:
        day = "Saturdat"
        break;


    default:
        break;
}
console.log(`Hoy es ${day}`)

let videogame = "Smash"

switch (videogame) {
    case "League of Legend":
    case "Supervive":
        console.log("Es un moba")
        break;

    case "Gta V" :    
    case "Wukong" :
        console.log("Es un juego de accion")
        break;
    default:
        console.log("No conocemos ese juego")
        break;
}