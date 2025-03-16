import { initializeSlider } from "./slider.js";
import { setupNavbar } from "./navbar.js";
import { setupForm } from "./form.js";
import { updateLanguage, getUserLang, setUserLang } from "./i18n.js";
import { initializeDarkMode } from './darkmode.js';
import { setupLogin, updateSessionUI, setupSignin } from "./auth.js";

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
