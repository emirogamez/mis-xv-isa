/*=========================================
            AUTOSCROLL
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    const primeraSeccion = document.querySelector(".hero");

    let usuarioInteractuo = false;

    // Si el usuario toca la pantalla,
    // cancela el desplazamiento automático.

    ["wheel","touchstart","keydown","mousedown"].forEach(evento => {

        window.addEventListener(evento, () => {

            usuarioInteractuo = true;

        }, { once:true });

    });

    setTimeout(() => {

        if(usuarioInteractuo) return;

        primeraSeccion.scrollIntoView({

            behavior:"smooth",
            block:"end"

        });

    },5000);

});
