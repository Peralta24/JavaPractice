const laptop = "MacBookPro M4";

const carrito = [
    {nombre:"Monitor de 20 pulgadas",precio:"300 dolares"},
    {nombre:"Bocinas Solnos",precio:"300 dolares"},
    { nombre: "Bocinas Thunder", precio: 300 },
    { nombre: "Audífonos", precio: 150 },
    { nombre: "Bocinas Mini", precio: 100 },
    {nombre:"Teclado Custom",precio:"200 dolares"}
]
console.table(carrito);

const nuevocarrito = [...carrito,{nombre:"iPad Pro",precio:"300 dolares"}];
console.table(nuevocarrito);

const nuevocar =[{nombre:"iPad Pro",precio:"300 dolares"},...carrito];
console.table(nuevocar);

resultadoBusqueda = carrito.some(function(producto){
    return producto.nombre ==="Teclado Custom"
});

const resultadofiltrado=carrito.filter(function(producto){
    return producto.nombre.includes ("a")
})

console.log(resultadoBusqueda)
console.log(resultadofiltrado)

function sumar(num1,num2){
    return (num1+num2)
}

sumar(2,2);

console.log(sumar)