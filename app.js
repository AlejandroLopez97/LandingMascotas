
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form-contact');
    const button = form.querySelector('button');

    // Animación de slide down al cargar la página
    button.style.transition = 'transform 0.5s ease-in-out';
    setTimeout(() => {
        button.style.transform = 'translateY(0)';
    }, 500);

    // Cambio de color al pasar el cursor
    button.addEventListener('mouseover', function () {
        this.style.backgroundColor = 'rgb(240, 148, 67)';
    });

    button.addEventListener('mouseout', function () {
        this.style.backgroundColor = '';
    });

    // Capturar la información del formulario
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar la recarga de la página

        const nombre = document.getElementById('nombre').value;
        const correo = document.getElementById('correo').value;

        // Validar la información (puedes hacer validaciones más sofisticadas)
        if (nombre && correo) {
            // Mostrar la información al usuario en una ventana emergente
            alert(`Registro exitoso:\nNombre: ${nombre}\nCorreo: ${correo}`);
            // Resetear el formulario
            form.reset();
        } else {
            // Mostrar un mensaje de error en una ventana emergente
            alert('Por favor, complete todos los campos.');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const footer = document.querySelector('.end');
    const scrollBtn = document.getElementById('scrollBtn');

    // Función para controlar la visibilidad del botón de flecha
    function toggleScrollButton() {
        if (window.scrollY > 0) {
            footer.style.backgroundColor = 'transparent';
            scrollBtn.style.display = 'block';
        } else {
            footer.style.backgroundColor = 'rgb(242, 188, 141)';
            scrollBtn.style.display = 'none';
        }
    }

    // Listener para controlar el scroll y el botón de flecha
    window.addEventListener('scroll', toggleScrollButton);

    // Listener para desplazarse hacia arriba cuando se hace clic en el botón
    scrollBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
