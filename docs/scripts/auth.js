
import { supabase } from "./supabase";

export function setupLogin() {
    const loginForm = document.getElementById("formulario_login");

    // INICIO DE SESIÓN
    if (loginForm) {
        loginForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const email = document.getElementById("loginUsername").value;
            const password = document.getElementById("loginPassword").value;

            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password
            });

            if (error) {
                alert("Credenciales incorrectas");
                return;
            }

            alert("Inicio de sesión exitoso");
            localStorage.setItem("token", data.session.access_token);
            location.href = "index.html"; // Redirigir a la página principal
        });
    }

}

export function setupSignin() {

    const registerForm = document.getElementById("registerForm");

    // REGISTRO DE USUARIO
    if (registerForm) {
        registerForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const email = document.getElementById("registerUsername").value;
            const password = document.getElementById("registerPassword").value;

            const { data, error } = await supabase.auth.signUp({
                email,
                password
            });

            if (error) {
                alert("Error en el registro: " + error.message);
                return;
            }

            alert("Registro exitoso.");
            window.location.href = "login.html";
        });
    }
}

/* export function setupAuth() {
    const form = document.getElementById("formulario_login");


    if (document.getElementById("loginUsername")) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const username = document.getElementById("loginUsername").value;
            const password = document.getElementById("loginPassword").value;

            const users = JSON.parse(localStorage.getItem("users") || "{}");

            if (users[username] && users[username] === password) {
                alert("Inicio de sesión exitoso");
                localStorage.setItem("loggedInUser", username);
                window.location.href = "index.html";
            } else {
                alert("Usuario o contraseña incorrectos");
            }
        });


    } else if (document.getElementById("registerUsername")) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const username = document.getElementById("registerUsername").value;
            const password = document.getElementById("registerPassword").value;

            const users = JSON.parse(localStorage.getItem("users") || "{}");

            if (users[username]) {
                alert("El usuario ya existe");
            } else {
                users[username] = password;
                localStorage.setItem("users", JSON.stringify(users));
                alert("Registro exitoso. Ahora puedes iniciar sesión.");
                window.location.href = "login.html";
            }
        });
    }
} */


// Función para actualizar la interfaz en función del estado de la sesión
export async function updateSessionUI() {
    const { data: { user } } = await supabase.auth.getUser();
    const loginBtnLi = document.querySelector(".inicio_sesion");

    if (loginBtnLi) {
        if (user) {
            loginBtnLi.innerHTML = `<a href="#" id="logoutBtn" data-i18n="CerrarSesion">Cerrar sesión</a>`;
            document.getElementById("logoutBtn").addEventListener("click", async (e) => {
                e.preventDefault();
                await supabase.auth.signOut();
                location.reload();
            });
        } else {
            loginBtnLi.innerHTML = `<a href="login.html" data-i18n="IniciarSesion">Iniciar Sesión</a>`;
        }
    }
}
