export function filtrarDestinos() {
    const searchInput = document.getElementById("searchInput");

    searchInput.addEventListener("input", function () {
        const searchTerm = this.value.toLowerCase();
        const cards = document.querySelectorAll(".list-group-item");

        cards.forEach(card => {
            const title = card.querySelector("h5").textContent.toLowerCase();
            card.style.display = title.includes(searchTerm) ? "block" : "none";
        });
    });
}