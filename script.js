// Validación del formulario
function enviarFormulario() {
    alert("¡Gracias por tu mensaje! Nos pondremos en contacto pronto.");
}

  // Puedes agregar aquí funciones si necesitas interacción con el mapa
console.log("Mapa cargado correctamente");

let current = 0;
const imges = document.querySelectorAll(".carousel-container img");

function showNextImage() {
    imges[current].classList.remove("active");
    current = (current + 1) % imges.length;
    imges[current].classList.add("active");
}

  // Cambia de imagen cada 5 segundos
    setInterval(showNextImage, 5000);