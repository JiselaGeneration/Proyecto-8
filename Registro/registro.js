
document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores de los campos del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById("confirmPassword").value;


    // Limpiar mensajes de error previos
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('confirmError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    let valid = true;

    // Validar Nombre (debe contener solo letras y espacios)
    if (!/^[a-zA-Z\s]+$/.test(name)) {
        document.getElementById('nameError').textContent = 'Nombre inválido. Solo se permiten letras y espacios.';
        valid = false;
    }

    // Validar Correo electrónico (utiliza el type="email" del input)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('emailError').textContent = 'Correo electrónico inválido.';
        valid = false;
    }

    // Validar Teléfono (debe contener solo números)
    if (!/^\d{3}\d{3}\d{4}$/.test(phone)) {
        document.getElementById('phoneError').textContent = 'Teléfono inválido. El formato debe ser 3214567890.';
        valid = false;
    }

    // Definir la expresión regular para la validación de la contraseña
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;

    // Validar la contraseña
    if (!passwordRegex.test(password)) {
        document.getElementById('passwordError').textContent = 'Contraseña invalida. Debe tener minimo 8 caracteres, una letra mayuscula, un número y un carácter especial.';
        valid = false;
    }

    if (confirmPassword != password) {
        document.getElementById('confirmError').textContent = 'Las contraseñas no coinciden';
        valid = false;
    }

    if (valid) {
     document.getElementById('registroForm').submit();
    }

});


