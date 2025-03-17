import { initializeSlider } from "./slider.js";
import { setupNavbar } from "./navbar.js";
import { setupForm } from "./form.js";
import { updateLanguage, getUserLang, setUserLang } from "./i18n.js";
import { initializeDarkMode } from './darkmode.js';
import { setupLogin, updateSessionUI, setupSignin } from "./auth.js";
import { fetchDestinos } from "./destinos.js";
import { filtrarDestinos } from "./filtrado.js";
import { setupAddDestinoForm } from "./agregar.js"

document.addEventListener("DOMContentLoaded", () => {

    if (document.querySelector('.slider')) {
        initializeSlider();
    }

    if (document.querySelector('.nav-toggle')) {
        setupNavbar();
    }

    if (document.querySelector('#formulario_login')) {
        setupLogin();
    }

    if (document.querySelector('#registerForm')) {
        setupSignin();
    }

    if (document.querySelector('.container-destinos')) {
        fetchDestinos().then(destinos => {
            const container = document.getElementById("destinos-container");
            destinos.forEach(destino => container.appendChild(destino));
        });
        filtrarDestinos();

    }

    if (document.querySelector("#destino-form")) {
        setupAddDestinoForm();
    }


    updateSessionUI();  // Actualiza botones de login/logout

    initializeDarkMode();  // Activa el modo oscuro si es necesario

    // Aplicar idioma inicial
    updateLanguage(getUserLang());

    const langButton = document.querySelector("#toggleLanguage");
    if (langButton) {
        langButton.addEventListener("click", () => {
            const newLang = getUserLang() === "es" ? "en" : "es";
            setUserLang(newLang);
            updateSessionUI();
            updateLanguage(newLang);

        });
    }
});
