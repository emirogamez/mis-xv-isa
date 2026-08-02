/*==================================================
            ENVELOPE.JS
==================================================*/

const intro = document.getElementById("intro");

const envelope = document.getElementById("envelope");

const flap = document.querySelector(".envelope-flap");

const letter = document.querySelector(".letter");

const btnOpen = document.getElementById("btnOpen");

const musicModal = document.getElementById("musicModal");

let opened = false;

/************************************************
ABRIR SOBRE
************************************************/

btnOpen.addEventListener("click", abrirSobre);

function abrirSobre(){

    if(opened) return;

    opened=true;

    btnOpen.disabled=true;

    envelope.classList.add("opening");

    setTimeout(()=>{

        flap.classList.add("open");

    },400);

    setTimeout(()=>{

        letter.classList.add("show");

    },1100);

    setTimeout(()=>{

        envelope.classList.add("hide");

    },2200);

    setTimeout(()=>{

        intro.classList.add("fade");

    },2800);

    setTimeout(()=>{

        intro.remove();

        musicModal.classList.add("show");

    },3600);

}