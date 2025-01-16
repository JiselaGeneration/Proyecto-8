
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores de los campos del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Limpiar mensajes de error previos
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('messageError').textContent = '';

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

    // Validar Mensaje (no vacío)
    if (message.trim() === '') {
        document.getElementById('messageError').textContent = 'El mensaje no puede estar vacío.';
        valid = false;
    }

    if (valid) {
     document.getElementById('contactForm').submit();
    }

});


