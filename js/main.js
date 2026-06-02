
console.log("Hola mundo");

//clic
document.addEventListener("DOMContentLoaded", () => {
    const tarjetas = document.querySelectorAll(".movie-card");

    tarjetas.forEach((tarjeta, indice) => {
        tarjeta.addEventListener("click", () => {
            alert(`Reproduciendo el Video Destacado número ${indice + 1}...`);
        });
    });
});