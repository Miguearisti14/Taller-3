import Polyglot from "node-polyglot";

// Traducciones
const translations = {
    es: {
        home: "Inicio",
        destinations: "Destinos",
        experiences: "Experiencias",
        contact: "Contacto",
        dark_mode: "Modo Oscuro",
        light_mode: "Modo Claro",
        change_language: "Cambiar Idioma",
        welcome: "Bienvenido a nuestro sitio",
        description: "Explora nuestras funcionalidades.",
        eslogan: "Viaja...\nDescubre...\ny Vive",
        visita: "Visita Múltiples Destinos",
        Paris: "París",
        Egipto: "Egipto",
        Turquia: "Turquía",
        Roma: "Roma",
        Vive: "Vive la Experiencia",
        Formulario: "Formulario de Contacto",
        Nombre: "Nombre",
        Correo: "Correo",
        Asunto: "Asunto",
        Mensaje: "Mensaje",
        Enviar: "Enviar Información",
        Sedes: "Nuestras Sedes",
        Medellin: "Medellín",
        Cordoba: "Córdoba",
        CampoNombre: "Ingrese su Nombre",
        CampoCorreo: "Ingrese su Correo",
        CampoAsunto: "Ingrese su Asunto",
        CampoMensaje: "Ingrese su Mensaje",
        CerrarSesion: "Cerrar Sesión",
        Registrarse: "Registrarse",
        Usuario: "Usuario",
        Contraseña: "Contraseña",
        CampoContraseña: "Ingrese su contraseña",
        CampoUsuario: "Ingrese su usuario",
        IniciarSesion: "Iniciar Sesión"
    },
    en: {
        home: "Home",
        destinations: "Destinations",
        experiences: "Experiences",
        contact: "Contact",
        dark_mode: "Dark Mode",
        light_mode: "Light Mode",
        change_language: "Change Language",
        welcome: "Welcome to our site",
        description: "Explore our features.",
        eslogan: "Travel...\nDiscover...\n& Live",
        visita: "Visit Multiple Destinations",
        Paris: "Paris",
        Egipto: "Egypt",
        Turquia: "Turkey",
        Roma: "Rome",
        Vive: "Live the Experience",
        Formulario: "Contact Form",
        Nombre: "Name",
        Correo: "Email",
        Asunto: "Subject",
        Mensaje: "Message",
        Enviar: "Send Information",
        Sedes: "Our Headquarters",
        Medellin: "Medellin",
        Cordoba: "Cordoba",
        CampoNombre: "Enter your Name",
        CampoCorreo: "Enter your Email",
        CampoAsunto: "Enter your Subject",
        CampoMensaje: "Enter your Message",
        CerrarSesion: "Log out",
        Registrarse: "Sign up",
        Usuario: "User",
        Contraseña: "Password",
        CampoContraseña: "Enter your password",
        CampoUsuario: "Enter your username",
        IniciarSesion: "Log in"
    }
};

// Detectar idioma inicial desde localStorage o navegador
let userLang = localStorage.getItem("language") || (navigator.language.startsWith("es") ? "es" : "en");

// Crear instancia de Polyglot con el idioma inicial
const polyglot = new Polyglot({ phrases: translations[userLang], locale: userLang });

// Actualizar idioma y guardar en localStorage
export function setUserLang(newLang) {
    if (translations[newLang]) {
        userLang = newLang;
        localStorage.setItem("language", newLang);
        updateLanguage(newLang);
    }
}


export function getUserLang() {
    return userLang;
}

// Actualizar textos e inputs dinámicos en la página
export function updateLanguage(lang) {
    if (translations[lang]) {
        polyglot.replace(translations[lang]);


        document.querySelectorAll("[data-i18n]").forEach((el) => {
            const key = el.getAttribute("data-i18n");
            el.innerHTML = polyglot.t(key).replace(/\n/g, "<br>");
        });


        document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
            const key = el.getAttribute("data-i18n-placeholder");
            el.setAttribute("placeholder", polyglot.t(key));
        });
    }
}


export { polyglot };
