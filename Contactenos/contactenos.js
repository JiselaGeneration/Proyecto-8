
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

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

    // Validar Mensaje (no vacío)
    form.message.addEventListener('input', function() {
        const message = form.message.value;
        if (message.trim() === '') {
            document.getElementById('messageError').textContent = 'El mensaje no puede estar vacío.';
        } else {
            document.getElementById('messageError').textContent = '';
        }
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtener los valores de los campos del formulario
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const message = form.message.value;

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
        if (!/^\d{10}$/.test(phone)) {
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
});