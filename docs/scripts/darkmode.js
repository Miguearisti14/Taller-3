export function initializeDarkMode() {
    const button = document.getElementById("toggleDarkMode"); // Usa el botón del HTML
    const darkModeStylesheet = document.getElementById("darkModeStylesheet");

    // Verifica si el usuario tenía activado el dark mode
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        darkModeStylesheet.removeAttribute("disabled"); // Habilita el dark.css
    }

    button.addEventListener("click", () => {
        let isDarkMode = document.body.classList.toggle("dark-mode");

        if (isDarkMode) {
            darkModeStylesheet.removeAttribute("disabled"); // Activa dark.css
            localStorage.setItem("darkMode", "enabled");
        } else {
            darkModeStylesheet.setAttribute("disabled", ""); // Desactiva dark.css
            localStorage.setItem("darkMode", "disabled");
        }
    });
}