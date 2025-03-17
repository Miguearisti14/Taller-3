import { addDestino } from "./supabase.js";

export async function setupAddDestinoForm() {
    const form = document.getElementById("destino-form");

    if (!form) return;

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const destinoData = {
            Destino: form.querySelector("#destino").value.trim(),
            Pais: form.querySelector("#pais").value.trim(),
            Continente: form.querySelector("#continente").value.trim(),
            Idioma: form.querySelector("#idioma").value.trim(),
            Moneda: form.querySelector("#moneda").value.trim(),
        };

        try {
            await addDestino(destinoData);
            alert("Destino agregado exitosamente!");
            form.reset();
            window.location.href = "destinos.html";
        } catch (error) {
            console.error("Error al agregar destino:", error);
            alert("No se pudo agregar el destino.");
        }
    });
}
