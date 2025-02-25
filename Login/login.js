
const API_URL = "http://localhost:8080/auth";
    const loginForm = document.getElementById("loginForm");
const token = localStorage.getItem("token");
    if (loginForm) {
        loginForm.addEventListener("submit", async function (event) {
            event.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            if (!email || !password) { 
                console.error("Error: Email o password no pueden ser null o undefined");
                 return; }
            try {
                
                console.log("dentro de try "+email+password);

          
                const response = await fetch(`${API_URL}/login`, {
                    method: "POST",

                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({email: document.getElementById("email").value, password: document.getElementById("password").value})
                         

                });

                console.log(JSON.stringify({ email, password })); // Verificar que se envía el JSON correcto
        
                
                if (response.ok) {
                    console.log("dentro de if");

                    const token = await response.text(); // Obtener el token del JSON

                    localStorage.setItem("jwt", token); // Guardar el token en localStorage

                    window.location.href = "../Productos/productos.html"; // Redirigir a la página protegida
                } else {
                    const errorMessage = await response.text();

                    document.getElementById(
                        "error-message"
                    ).textContent = `Error en el login: ${errorMessage}`;
                }
            } catch (error) {
                console.error("Error during login:", error);
            }
        });
    }

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");
    const togglePassword = document.querySelector(".toggle-password");
    const passwordInput = document.getElementById("password");

    // Validar Correo electrónico (utiliza el type="email" del input)
    form.email.addEventListener("input", function () {
        const email = form.email.value;
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            document.getElementById("emailError").textContent =
                "Correo electrónico inválido.";
        } else {
            document.getElementById("emailError").textContent = "";
        }
    });

    // Validar Contraseña (debe tener al menos 8 caracteres)
    form.password.addEventListener("input", function () {
        const password = form.password.value;
        if (password.length < 8) {
            document.getElementById("passwordError").textContent =
                "La contraseña debe tener al menos 8 caracteres.";
        } else {
            document.getElementById("passwordError").textContent = "";
        }
    });

    // Alternar visibilidad de la contraseña
    togglePassword.addEventListener("click", function () {
        const type =
            passwordInput.getAttribute("type") === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type);
        // Cambiar el icono
        this.classList.toggle("bi-eye");
        this.classList.toggle("bi-eye-slash");
    });

    
});


