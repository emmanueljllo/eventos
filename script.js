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

let index = 0;
const imagenes = document.querySelectorAll(".carrusel-4k img");
const total = imagenes.length;

function mostrarImagen(i) {
  imagenes.forEach((img, idx) => {
    img.classList.remove("activa");
    if (idx === i) img.classList.add("activa");
  });
}

function siguiente() {
  index = (index + 1) % total;
  mostrarImagen(index);
}

function anterior() {
  index = (index - 1 + total) % total;
  mostrarImagen(index);
}

document.querySelector(".siguiente").addEventListener("click", siguiente);
document.querySelector(".anterior").addEventListener("click", anterior);

// Cambio automático cada 5 segundos
setInterval(siguiente, 5000);

// Iniciar con la primera imagen
mostrarImagen(index);
