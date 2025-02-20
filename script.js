document.addEventListener('DOMContentLoaded', () => {
    // Formulario de contacto
    const formulario = document.querySelector('.contact form');
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const mensaje = document.querySelector('#mensaje').value;

        console.log('Nombre:', nombre);
        console.log('Email:', email);
        console.log('Mensaje:', mensaje);

        alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');

        formulario.reset();
    });

    const botones = document.querySelectorAll('button');
    botones.forEach(boton => {
        boton.addEventListener('mouseover', () => {
            boton.style.backgroundColor = '#cc7a00';
        });
        boton.addEventListener('mouseout', () => {
            boton.style.backgroundColor = '#ff9900';
        });
    });

    // Carrusel de proyectos
    const carrusel = document.querySelector('.projects .carousel');
    const imagenes = carrusel.querySelectorAll('.carousel-item');
    let indiceImagenActiva = 0;

    function mostrarImagen(indice) {
        imagenes.forEach((imagen, i) => {
            if (i === indice) {
                imagen.classList.add('active');
            } else {
                imagen.classList.remove('active');
            }
        });
    }

    function cambiarImagen(direccion) {
        indiceImagenActiva = (indiceImagenActiva + direccion + imagenes.length) % imagenes.length;
        mostrarImagen(indiceImagenActiva);
    }

    // Botones de navegación
    const botonAnterior = carrusel.querySelector('.carousel-control-prev');
    const botonSiguiente = carrusel.querySelector('.carousel-control-next');

    botonAnterior.addEventListener('click', () => cambiarImagen(-1));
    botonSiguiente.addEventListener('click', () => cambiarImagen(1));

    // Mostrar la primera imagen al cargar la página
    mostrarImagen(0);
});

