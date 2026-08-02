document.addEventListener("DOMContentLoaded",()=>{

const audio=document.getElementById("audio");
const boton=document.getElementById("musicButton");

if(!audio || !boton) return;

/****************************************************
CONFIGURACIÓN
****************************************************/

const VOLUMEN_MAXIMO=0.35;

audio.volume=0;

audio.loop=true;

/****************************************************
REPRODUCIR
****************************************************/

function reproducir(){

audio.play().catch(()=>{});

let volumen=0;

const fade=setInterval(()=>{

volumen+=0.02;

if(volumen>=VOLUMEN_MAXIMO){

volumen=VOLUMEN_MAXIMO;

clearInterval(fade);

}

audio.volume=volumen;

},100);

boton.classList.add("playing");

boton.innerHTML=

'<i class="fa-solid fa-compact-disc"></i>';

localStorage.setItem("music","on");

}

/****************************************************
PAUSAR
****************************************************/

function pausar(){

let volumen=audio.volume;

const fade=setInterval(()=>{

volumen-=0.02;

if(volumen<=0){

volumen=0;

audio.pause();

clearInterval(fade);

}

audio.volume=volumen;

},100);

boton.classList.remove("playing");

boton.innerHTML=

'<i class="fa-solid fa-music"></i>';

localStorage.setItem("music","off");

}

/****************************************************
BOTÓN
****************************************************/

boton.addEventListener("click",()=>{

if(audio.paused){

reproducir();

}else{

pausar();

}

});

/****************************************************
RECORDAR ESTADO
****************************************************/

window.addEventListener("load",()=>{

const estado=localStorage.getItem("music");

if(estado==="off"){

audio.pause();

boton.classList.remove("playing");

}else{

boton.classList.add("playing");

}

});

/****************************************************
SI TERMINA
****************************************************/

audio.addEventListener("ended",()=>{

audio.currentTime=0;

audio.play();

});

/****************************************************
CAMBIO DE PESTAÑA
****************************************************/

document.addEventListener("visibilitychange",()=>{

if(document.hidden){

audio.volume=.10;

}else{

if(!audio.paused)

audio.volume=VOLUMEN_MAXIMO;

}

});

/****************************************************
EFECTO DISCO
****************************************************/

setInterval(()=>{

if(audio.paused)return;

boton.animate(

[

{

transform:"scale(1)"

},

{

transform:"scale(1.10)"

},

{

transform:"scale(1)"

}

],

{

duration:1600

}

);

},1800);

/****************************************************
DOBLE CLICK
****************************************************/

boton.addEventListener("dblclick",()=>{

audio.currentTime=0;

});

/****************************************************
RUEDA DEL MOUSE
****************************************************/

boton.addEventListener("wheel",(e)=>{

e.preventDefault();

if(e.deltaY<0){

audio.volume=Math.min(

audio.volume+.05,

1

);

}else{

audio.volume=Math.max(

audio.volume-.05,

0

);

}

});

/****************************************************
ATAJO ESPACIO
****************************************************/

document.addEventListener("keydown", (e) => {

    const elemento = document.activeElement;

    if (
        elemento.tagName === "INPUT" ||
        elemento.tagName === "TEXTAREA" ||
        elemento.isContentEditable
    ) {
        return;
    }

    if (e.code !== "Space") return;

    e.preventDefault();

    boton.click();

});

/****************************************************
BRILLO
****************************************************/

setInterval(()=>{

boton.animate(

[

{

boxShadow:

"0 0 0 rgba(200,169,106,.2)"

},

{

boxShadow:

"0 0 30px rgba(200,169,106,.8)"

},

{

boxShadow:

"0 0 0 rgba(200,169,106,.2)"

}

],

{

duration:2500

}

);

},2600);

});