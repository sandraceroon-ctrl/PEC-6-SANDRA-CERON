/* 1. Menú hamburguesa (móvil y pantallas pequeñas) */
function menuHamburguesa() {
    const boton = document.querySelector('.menu-toggle');
    const menu = document.getElementById('menu');

    if (!boton || !menu) {
        return;
    }

    function abrirCerrar(abrir) {
        menu.classList.toggle('abierto', abrir);
        boton.setAttribute('aria-expanded', abrir);
        boton.setAttribute('aria-label', abrir ? 'Cerrar menú' : 'Abrir menú');
    }

    boton.addEventListener('click', function () {
        abrirCerrar(!menu.classList.contains('abierto'));
    });

    // Se cierra al elegir un enlace, al pulsar Escape o al agrandar la ventana
    menu.addEventListener('click', function (evento) {
        if (evento.target.closest('a')) {
            abrirCerrar(false);
        }
    });

    document.addEventListener('keydown', function (evento) {
        if (evento.key === 'Escape') {
            abrirCerrar(false);
        }
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 760) {
            abrirCerrar(false);
        }
    });
}

/* 2. El menú se oculta al bajar y reaparece al subir */
function ocultarMenuAlScroll() {
    const header = document.querySelector('header');
    const menu = document.getElementById('menu');

    if (!header) {
        return;
    }

    let ultimoScroll = window.scrollY;
    let esperando = false;

    function actualizar() {
        const actual = window.scrollY;
        const menuAbierto = menu && menu.classList.contains('abierto');

        if (actual <= header.offsetHeight || menuAbierto) {
            header.classList.remove('oculto');
        } else if (actual > ultimoScroll + 5) {
            header.classList.add('oculto');
        } else if (actual < ultimoScroll - 5) {
            header.classList.remove('oculto');
        }

        ultimoScroll = actual;
        esperando = false;
    }

    window.addEventListener('scroll', function () {
        if (!esperando) {
            esperando = true;
            window.requestAnimationFrame(actualizar);
        }
    }, { passive: true });
}

menuHamburguesa();
ocultarMenuAlScroll();