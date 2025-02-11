// Esperar a que el contenido del DOM esté cargado
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.sidebar a').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();

        // Eliminar resaltados previos
        document.querySelectorAll('.content section').forEach(section => {
          section.classList.remove('highlight');
        });

        // Desplazar suavemente a la sección
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });

          // Añadir clase de animación para resaltar
          setTimeout(() => {
            targetSection.classList.add('highlight');
          }, 300);
        }
      });
      // Mostrar/Ocultar la barra lateral al hacer clic en el botón
document.querySelector('.menu-toggle').addEventListener('click', function () {
  document.querySelector('.sidebar').classList.toggle('open');
});
    });
  });

