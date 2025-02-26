
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registroForm');
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const toggleConfirmButton = document.querySelector('.toggle-password-confirm');
    

    // Validar Nombre (debe contener solo letras y espacios)
    form.name.addEventListener('input', function() {
        const name = form.name.value;
        if (!/^[a-zA-Z\s]+$/.test(name)) {
            document.getElementById('nameError').textContent = 'Nombre inválido. Solo se permiten letras y espacios.';
        } else {
            document.getElementById('nameError').textContent = '';
        }
    });

    // Validar Correo electrónico (utiliza el type="email" del input)
    form.email.addEventListener('input', function() {
        const email = form.email.value;
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            document.getElementById('emailError').textContent = 'Correo electrónico inválido.';
        } else {
            document.getElementById('emailError').textContent = '';
        }
    });

    // Validar Teléfono (debe contener solo números)
    form.phone.addEventListener('input', function() {
        const phone = form.phone.value;
        if (!/^\d{10}$/.test(phone)) {
            document.getElementById('phoneError').textContent = 'Teléfono inválido. El formato debe ser 3214567890.';
        } else {
            document.getElementById('phoneError').textContent = '';
        }
    });

    // Validar Contraseña (mínimo 8 caracteres, una letra mayúscula, un número y un carácter especial)
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
    form.password.addEventListener('input', function() {
        const password = form.password.value;
        if (!passwordRegex.test(password)) {
            document.getElementById('passwordError').textContent = 'Contraseña inválida. Debe tener mínimo 8 caracteres, una letra mayúscula, un número y un carácter especial.';
        } else {
            document.getElementById('passwordError').textContent = '';
        }
    });

    // Validar Confirmar Contraseña (debe coincidir con la contraseña)
    form.confirmPassword.addEventListener('input', function() {
        const confirmPassword = form.confirmPassword.value;
        const password = form.password.value;
        if (confirmPassword !== password) {
            document.getElementById('confirmError').textContent = 'Las contraseñas no coinciden.';
        } else {
            document.getElementById('confirmError').textContent = '';
        }
    });

    // Alternar visibilidad de la contraseña
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        // Cambiar el icono
        this.classList.toggle('bi-eye');
        this.classList.toggle('bi-eye-slash');
    });
    toggleConfirmButton.addEventListener('click', function() {
        if (confirmPasswordInput.type === 'password') {
            confirmPasswordInput.type = 'text';
            this.textContent = '';
        } else {
            confirmPasswordInput.type = 'password';
            this.textContent = '';
        }
        // Cambiar icono si lo deseas (similar a como se hace con las clases bi-eye)
        this.classList.toggle('bi-eye');
        this.classList.toggle('bi-eye-slash');
    });


       

        const API_URL = "http://localhost:8080/clientes";
        const registerForm = document.getElementById("registroForm");
        
        if (registerForm) {
            registerForm.addEventListener("submit", async function (event) {
                event.preventDefault();
        
                const nombre_completo = document.getElementById("name").value;
                const email = document.getElementById("email").value;
                const telefono = document.getElementById("phone").value;
                const contrasena = document.getElementById("password").value;
                const confirmPassword = document.getElementById("confirmPassword").value;

                 // Limpiar mensajes de error previos
        document.getElementById('nameError').textContent = '';
        document.getElementById('emailError').textContent = '';
        document.getElementById('phoneError').textContent = '';
        document.getElementById('confirmError').textContent = '';
        document.getElementById('passwordError').textContent = '';

        
        
                if (!nombre_completo || !email || !telefono || !contrasena || !confirmPassword) {
                    document.getElementById("error-message").textContent = "Por favor, completa todos los campos.";
                    return;
                }
        
                if (contrasena !== confirmPassword) {
                    document.getElementById("error-message").textContent = "Las contraseñas no coinciden.";
                    return;
                }
        
                try {
                    console.log("Dentro de try", nombre_completo, email, telefono, contrasena);
        
                    const requestBody = JSON.stringify({
                        nombre_completo: nombre_completo,
                        email: email,
                        telefono: telefono,
                        contrasena: contrasena
                    });
                    console.log("Datos enviados:", requestBody);
        
                    const response = await fetch(`${API_URL}/crear`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: requestBody
                    });
        
                    if (response.ok) {
                        console.log("Registro exitoso");
        
                         const token = await response.text(); // Obtener el token del JSON
        
                        localStorage.setItem("jwt", token); // Guardar el token en localStorage
        
                        window.location.href = "../Login/login.html"; // Redirigir a la página protegida
                    } else {
                        const errorMessage = await response.text();
                        document.getElementById("error-message").textContent = `Error en el registro: ${errorMessage}`;
                    }
                } catch (error) {
                    console.error("Error durante el registro:", error);
                }
            });
        }
        
    });