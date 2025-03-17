import { deleteDestino } from "./supabase.js";

export async function fetchDestinos() {
    const createDest = (destino) => {
        const destinoHtml = document.createElement('div');
        destinoHtml.classList.add("list-group-item", "list-group-item-action");
        destinoHtml.style.cursor = "pointer";

        // Contenido del destino
        destinoHtml.innerHTML = `
            <h5 class="mb-1 text-capitalize">${destino.Destino}</h5>
            <p class="mb-1 text-capitalize"><strong>País:</strong> ${destino.Pais}</p>
            <p class="mb-1 text-capitalize"><strong>Continente:</strong> ${destino.Continente}</p>
            <p class="mb-1 text-capitalize"><strong>Idioma:</strong> ${destino.Idioma}</p>
            <p class="mb-1 text-capitalize"><strong>Moneda:</strong> ${destino.Moneda}</p>
            <button class="delete-btn" data-id="${destino.id}">🗑 Eliminar</button>
        `;

        // Evento de eliminación
        const deleteButton = destinoHtml.querySelector(".delete-btn");
        deleteButton.addEventListener("click", async () => {
            if (confirm(`¿Seguro que quieres eliminar "${destino.Destino}"?`)) {
                await deleteDestino(destino.id);
                destinoHtml.remove();
            }
        });

        return destinoHtml;
    };

    const token = localStorage.getItem("token");

    if (!token) {
        location.href = "/login";
        return;
    }

    try {
        const response = await fetch(
            "https://pggepqcytcttzxlncwqd.supabase.co/rest/v1/Destinos?select=*",
            {
                headers: {
                    "Content-Type": "application/json",
                    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBnZ2VwcWN5dGN0dHp4bG5jd3FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIwNzEwMTMsImV4cCI6MjA1NzY0NzAxM30._XB8EDwNIPzEUW7A8mQt1K-cGUi5yHQWJyyE1BCQtDs",
                    "Authorization": `Bearer ${token}`
                },
            }
        );

        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }

        const destinosData = await response.json();

        return destinosData.map(createDest);
    } catch (error) {
        console.error("Error al obtener destinos:", error);
        alert("Ocurrió un error al obtener los destinos.");
        return [];
    }
}
