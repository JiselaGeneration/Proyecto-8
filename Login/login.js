
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.getElementById('password');

    // Validar Correo electrónico (utiliza el type="email" del input)
    form.email.addEventListener('input', function() {
        const email = form.email.value;
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            document.getElementById('emailError').textContent = 'Correo electrónico inválido.';
        } else {
            document.getElementById('emailError').textContent = '';
        }
    });

    // Validar Contraseña (debe tener al menos 8 caracteres)
    form.password.addEventListener('input', function() {
        const password = form.password.value;
        if (password.length < 8) {
            document.getElementById('passwordError').textContent = 'La contraseña debe tener al menos 8 caracteres.';
        } else {
            document.getElementById('passwordError').textContent = '';
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

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtener los valores de los campos del formulario
        const email = form.email.value;
        const password = form.password.value;

        // Limpiar mensajes de error previos
        document.getElementById('emailError').textContent = '';
        document.getElementById('passwordError').textContent = '';

        // Obtener los registros de usuarios del Local Storage
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

        // Buscar el usuario por email
        const usuario = usuarios.find(user => user.email === email);

        if (usuario) {
            // Verificar la contraseña
            if (usuario.password === password) {
                window.location.href = "../Productos/productos.html";
            } else {
                document.getElementById('passwordError').textContent = 'Contraseña incorrecta. Inténtalo nuevamente.';
            }
        } else {
            document.getElementById('emailError').textContent = 'Correo electrónico no registrado.';
        }
    });
});