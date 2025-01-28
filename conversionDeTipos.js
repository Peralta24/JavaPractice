// Conversion de tipos

//To String 
let value = true;
alert(typeof value)

value= String(value)
alert(typeof value)

let value2 = 28
alert(typeof value2)

value2= String(value2)
alert(typeof value2)

// To number 
//un texto arbitrario en lugar de numero marca error NaN
let str = "123"
alert(typeof str)

str = Number(str)
alert(typeof str)

//Booleanos 
alert(Boolean(0))//Siempre es False
alert(Boolean(1))//Siempre es True

alert(Boolean("hola"))
alert(Boolean(" "))