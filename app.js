
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
