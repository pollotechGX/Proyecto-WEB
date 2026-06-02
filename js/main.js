// ==========================================================================
// Documentación e interactividad del Microproyecto
// ==========================================================================

// Mensaje de verificación requerido en la consola para confirmar la carga de la arquitectura
console.log("Hola mundo");

// Añadimos una interacción simple para que las tarjetas reaccionen al hacer clic
document.addEventListener("DOMContentLoaded", () => {
    const tarjetas = document.querySelectorAll(".movie-card");

    tarjetas.forEach((tarjeta, indice) => {
        tarjeta.addEventListener("click", () => {
            alert(`Reproduciendo el Video Destacado número ${indice + 1}...`);
        });
    });
});