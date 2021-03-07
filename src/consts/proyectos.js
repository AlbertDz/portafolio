import desktopPixabay from '../assets/img-proyectos/img-desktop/pixabay.png';
import desktopDatodemiamiga from '../assets/img-proyectos/img-desktop/eldatodemiamiga.png';
import desktopCorek from '../assets/img-proyectos/img-desktop/corek.png';

import tabletPixabay from '../assets/img-proyectos/img-tablet/pixabay.png';
import tabletDatodemiamiga from '../assets/img-proyectos/img-tablet/eldatodemiamiga.png';
import tabletCorek from '../assets/img-proyectos/img-tablet/corek.png';

import movilPixabay from '../assets/img-proyectos/img-movil/pixabay.png';
import movilDatodemiamiga from '../assets/img-proyectos/img-movil/eldatodemiamiga.png';
import movilCorek from '../assets/img-proyectos/img-movil/corek.png';

const proyectos = [
    { id: 'pixabay-imagenes', titulo: 'PIXABAY Imagenes', descripcion: 'Single page desarrollada en React, muestra imágenes que se pueden descargar sin derechos de autor ya que consume la API de pixabay.', url: 'https://albertdz.github.io/pixabay', imgDesktop: desktopPixabay, imgTablet: tabletPixabay, imgMovil: movilPixabay, class: null },
    { id: 'corek-io', titulo: 'Corek.io', descripcion: 'Desarrollado con la empresa Proyecto Kamila en Venezuela. La plataforma esta enfocada al manejo eficiente de proyectos, ya que permite crear equipos y proyectos; estos últimos cuentan con sprint e historias en forma de tarjetas que se desplazan por los diferentes tablero "Por hacer", "En proceso" y "Hecho". Se usaron tecnologías como Angular, Sails.js, MongoDB, entre otros.', url: 'https://corek.io', imgDesktop: desktopCorek, imgTablet: tabletCorek, imgMovil: movilCorek, class: 'inverse' },
    { id: 'eldatodemiamiga', titulo: 'El dato de mi amiga', descripcion: 'Plataforma para la venta de productos de nuevos emprendedores; cuenta con diferentes perfiles, entre ellos están los perfiles de cliente, emprendedor y administrador. Fue desarrollado en colaboración con otros programadores. La página es muy intuitiva y fácil de usar, cuenta con las herramientas necesarias para brindar una excelente navegación por sus diferentes interfaz. Las tecnologías usadas para este proyecto son Angular, Node, MySQL con PHPMyAdmin, entre otros.', url: 'https://eldatodemiamiga.cl', imgDesktop: desktopDatodemiamiga, imgTablet: tabletDatodemiamiga, imgMovil: movilDatodemiamiga, class: null },
]

export default proyectos;