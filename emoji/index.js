const face = document.getElementById("face");
const pupils = document.querySelectorAll(".pupil");

const move = (event) => {
    let x = (event.clientX / (window.innerWidth / 110));
    let y = (event.clientY / 7);
    let fX = (event.clientX / 20);
    let fY = (event.clientY / 20);

    // Mover la cara
    face.style.transform = `translate(${fX}px, ${fY}px)`;

    // Cambiar el color de fondo
    document.body.style.backgroundColor = `rgba(${y}, ${x}, ${fY}, 50%)`;

    // Mover las pupilas
    for (const pupil of pupils) {
        pupil.style.transform = `translate(${x}px, ${y}px)`;
    }
}

// Llamar a la función `move` cada vez que se mueva el ratón
document.addEventListener('mousemove', move);
