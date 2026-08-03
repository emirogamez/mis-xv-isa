document.addEventListener("DOMContentLoaded",()=>{

const intro=document.getElementById("intro");
const envelope=document.querySelector(".envelope");
const wax=document.querySelector(".wax");
const contenido=document.getElementById("contenido");
const audio=document.getElementById("audio");
const musicButton=document.getElementById("musicButton");

let abierto=false;

/************************************************
      ABRIR SOBRE
************************************************/

wax.addEventListener("click",abrirSobre);

function abrirSobre(){

if(abierto)return;

abierto=true;

/***********************************************
        ROMPER SELLO
***********************************************/

wax.animate(

[
{
transform:"translateX(-50%) scale(1)"
},
{
transform:"translateX(-50%) scale(1.25) rotate(10deg)"
},
{
transform:"translateX(-50%) scale(.1)",
opacity:0
}
],

{
duration:900,
fill:"forwards",
easing:"ease-in-out"
}

);

/***********************************************
        SACUDIDA
***********************************************/

envelope.animate(

[
{
transform:"translateX(0)"
},
{
transform:"translateX(-6px)"
},
{
transform:"translateX(6px)"
},
{
transform:"translateX(-5px)"
},
{
transform:"translateX(0)"
}
],

{
duration:700
}

);

/***********************************************
        ABRIR TAPA
***********************************************/

setTimeout(()=>{

envelope.classList.add("open");

},650);

/***********************************************
        SONIDO
***********************************************/

setTimeout(()=>{

if(audio){

audio.volume=0;

audio.play().catch(()=>{});

let v=0;

const fade=setInterval(()=>{

v+=0.02;

audio.volume=v;

if(v>=0.35){

audio.volume=.35;

clearInterval(fade);

}

},100);

}

if(musicButton)

musicButton.classList.add("playing");

},1300);

/***********************************************
        PÉTALOS
***********************************************/

setTimeout(()=>{

if(window.crearPetalosEspeciales){

window.crearPetalosEspeciales();

}

},1700);

/***********************************************
        DESAPARECER INTRO
***********************************************/

setTimeout(()=>{

intro.style.transition="1.5s";

intro.style.opacity="0";
intro.style.transform="scale(1.08)";

},3200);

/***********************************************
        MOSTRAR CONTENIDO
***********************************************/

setTimeout(()=>{

intro.style.display="none";

contenido.style.display="block";

document.body.style.overflowY="auto";

window.scrollTo({
top:0,
behavior:"smooth"
});

contenido.animate(

[
{
opacity:0,
transform:"translateY(60px)"
},
{
opacity:1,
transform:"translateY(0)"
}
],

{
duration:1600,
fill:"forwards"
}

);

},4500);

}

/************************************************
     EFECTO BRILLO SELLO
************************************************/

setInterval(()=>{

if(abierto)return;

wax.animate(

[
{
boxShadow:"0 0 0 rgba(255,220,140,.2)"
},
{
boxShadow:"0 0 40px rgba(255,220,140,.9)"
},
{
boxShadow:"0 0 0 rgba(255,220,140,.2)"
}
],

{
duration:2200
}

);

},2500);

/************************************************
      RESPIRACIÓN SOBRE
************************************************/

setInterval(()=>{

if(abierto)return;

envelope.animate(

[
{
transform:"translateY(0)"
},
{
transform:"translateY(-4px)"
},
{
transform:"translateY(0)"
}
],

{
duration:2600
}

);

},2600);

/************************************************
      CLICK EN CARTA
************************************************/

const carta=document.querySelector(".letter");

if(carta){

carta.addEventListener("click",()=>{

if(!abierto){

abrirSobre();

}

});

}

/************************************************
      ENTER
************************************************/

document.addEventListener("keydown",(e)=>{

if(e.key==="Enter"){

abrirSobre();

}

});

/************************************************
      DOBLE CLICK
************************************************/

intro.addEventListener("dblclick",()=>{

abrirSobre();

});

/************************************************
      MÓVIL
************************************************/

intro.addEventListener("touchstart",()=>{

if(!abierto){

wax.style.transform="translateX(-50%) scale(.95)";

}

},{passive:true});

intro.addEventListener("touchend",()=>{

if(!abierto){

wax.style.transform="translateX(-50%) scale(1)";

}

},{passive:true});

});
