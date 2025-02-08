
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

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtener los valores de los campos del formulario
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

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
        if (!/^\d{10}$/.test(phone)) {
            document.getElementById('phoneError').textContent = 'Teléfono inválido. El formato debe ser 3214567890.';
            valid = false;
        }

        // Validar la contraseña
        if (!passwordRegex.test(password)) {
            document.getElementById('passwordError').textContent = 'Contraseña inválida. Debe tener mínimo 8 caracteres, una letra mayúscula, un número y un carácter especial.';
            valid = false;
        }

        // Validar Confirmar Contraseña
        if (confirmPassword !== password) {
            document.getElementById('confirmError').textContent = 'Las contraseñas no coinciden';
            valid = false;
        }

        if (valid) {
            // Crear un objeto de usuario
            const usuario = {
                name: name,
                email: email,
                phone: phone,
                password: password
            };

            // Crear array para usuarios.
            let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

            // Agregar nuevo usuario.
            usuarios.push(usuario);

            // Guardar el objeto de usuario en el Local Storage
            localStorage.setItem("usuarios", JSON.stringify(usuarios));

            // Mostrar un mensaje de éxito
            alert("Registro exitoso. Los datos se han guardado en el Local Storage.");

            // Limpiar el formulario
            form.reset();

            // Opcionalmente, redirigir a otra página
            window.location.href = "../Login/login.html";
        }
    });
});