document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores de los campos del formulario
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

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
            // mostrarAlerta();
            // Redirigir al usuario a otra página (opcional)
            window.location.href = "../Productos/productos.html";
        } else {
            document.getElementById('passwordError').textContent = 'Contraseña incorrecta. Inténtalo nuevamente.';
        }
    } else {
        document.getElementById('emailError').textContent = 'Correo electrónico no registrado.';
    }
});