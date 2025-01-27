const btn = document.querySelector("button")
const txt = document.querySelector('#boton')

btn.addEventListener("click" ,updateBtn);

function updateBtn() {
    if (btn.textContent==="Start machine") {
        btn.textContent = "Stop Machine"
        txt.textContent = "The machine has started!"
    } else {
        btn.textContent = "Start machine"
        txt.textContent = "The machine is stopped"
    }
}

const numero1 = 1;
const numero2 = 1;
const numero3 = 32;
const numero4 = 8;

const suma= numero1+numero2;
const resta = numero3-numero4;
const finalresult = suma* resta; 
const evenOddResul = finalresult%2;

console.log(finalresult)
console.log(evenOddResul)


let result = 7 + 13 / 9 + 7;
let result2 = 100 / 2 * 6;
let multiplicacion = result * result2
let multiplicaciond = multiplicacion.toFixed(2)


console.log(multiplicaciond)


// Statement 1: The elephant weighs less than the mouse
const eleWeight = 1000;
const mouseWeight = 2;

// Statement 2: The Ostrich is taller than the duck
const ostrichHeight = 2;
const duckHeight = 0.3;

// Statement 3: The two passwords match
const pwd1 = 'stromboli';
const pwd2 = 'stROmBoLi';

weighComparation = eleWeight < mouseWeight;
heigComparasion = ostrichHeight < duckHeight;
pwdMatch = pwd1 < pwd2

console.log(weighComparation)
console.log(heigComparasion)
console.log(pwdMatch)