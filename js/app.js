document.addEventListener("DOMContentLoaded",()=>{

const loader=document.getElementById("loader");
const intro=document.getElementById("intro");
const contenido=document.getElementById("contenido");
const envelope=document.getElementById("envelope");
const btnAbrir=document.getElementById("btnAbrir");
const musicButton=document.getElementById("musicButton");
const audio=document.getElementById("audio");

let abierta=false;

/********************************************
LOADER
********************************************/

window.addEventListener("load",()=>{

setTimeout(()=>{

loader.style.opacity="0";
loader.style.visibility="hidden";

},1800);

});

/********************************************
INICIAL
********************************************/

contenido.style.display="none";

document.body.style.overflow="hidden";

/********************************************
ABRIR SOBRE
********************************************/

btnAbrir.addEventListener("click",()=>{

if(abierta)return;

abierta=true;

btnAbrir.style.pointerEvents="none";

envelope.classList.add("open");

setTimeout(()=>{

intro.style.opacity="0";

},2300);

setTimeout(()=>{

intro.style.display="none";

contenido.style.display="block";

document.body.style.overflowY="auto";

window.scrollTo({
top:0,
behavior:"smooth"
});

activarAnimaciones();

reproducirMusica();

crearParticulas();

},3000);

});

/********************************************
MÚSICA
********************************************/

function reproducirMusica(){

audio.volume=0;

audio.play().catch(()=>{});

let volumen=0;

let fade=setInterval(()=>{

volumen+=0.02;

audio.volume=volumen;

if(volumen>=0.35){

audio.volume=0.35;

clearInterval(fade);

}

},120);

musicButton.classList.add("playing");

}

/********************************************
BOTÓN MÚSICA
********************************************/

musicButton.addEventListener("click",()=>{

if(audio.paused){

audio.play();

musicButton.classList.add("playing");

}else{

audio.pause();

musicButton.classList.remove("playing");

}

});

/********************************************
REVELAR SECCIONES
********************************************/

function activarAnimaciones(){

document.querySelectorAll("section").forEach(sec=>{

sec.classList.add("reveal");

});

mostrar();

}

function mostrar(){

const alto=window.innerHeight;

document.querySelectorAll(".reveal").forEach(sec=>{

const top=sec.getBoundingClientRect().top;

if(top<alto-120){

sec.classList.add("active");

}

});

}

window.addEventListener("scroll",mostrar);

/********************************************
PARALLAX HERO
********************************************/

window.addEventListener("scroll",()=>{

const img=document.querySelector(".hero-image img");

if(!img)return;

img.style.transform=

`translateY(${window.scrollY*.18}px) scale(1.08)`;

});

/********************************************
WHATSAPP
********************************************/

const confirmar=document.getElementById("btnWhatsapp");

confirmar.addEventListener("click",()=>{

const nombre=document.getElementById("nombre").value.trim();

const adultos=document.getElementById("adultos").value;

const ninos=document.getElementById("ninos").value;

if(nombre===""){

alert("Ingrese su nombre");

return;

}

const mensaje=

`Hola.

Confirmo mi asistencia.

Nombre:
${nombre}

Adultos:
${adultos}

Niños:
${ninos}

Nos vemos el 4 de septiembre.`;

window.open(

"https://wa.me/573002406369?text="+
encodeURIComponent(mensaje),

"_blank"

);

});

/********************************************
PARTÍCULAS DORADAS
********************************************/

function crearParticulas(){

const cont=document.getElementById("particles");

for(let i=0;i<60;i++){

let p=document.createElement("div");

p.className="particle";

p.style.left=Math.random()*100+"vw";

p.style.top=Math.random()*100+"vh";

p.style.animationDuration=

4+Math.random()*8+"s";

p.style.animationDelay=

Math.random()*5+"s";

cont.appendChild(p);

}

}

/********************************************
BOTONES CON EFECTO
********************************************/

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-4px)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0px)";

});

});

/********************************************
TÍTULO DINÁMICO
********************************************/

let estado=true;

setInterval(()=>{

document.title=

estado?

"✨ Isabella | Mis XV"

:

"💖 Te esperamos";

estado=!estado;

},3500);

/********************************************
SCROLL SUAVE
********************************************/

document.querySelectorAll("a[href^='#']").forEach(link=>{

link.addEventListener("click",e=>{

e.preventDefault();

const destino=document.querySelector(

link.getAttribute("href")

);

if(destino){

destino.scrollIntoView({

behavior:"smooth"

});

}

});

});

/********************************************
EFECTO TARJETAS
********************************************/

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const r=card.getBoundingClientRect();

const x=e.clientX-r.left;

const y=e.clientY-r.top;

card.style.background=

`radial-gradient(circle at ${x}px ${y}px,

rgba(255,255,255,.98),

rgba(255,255,255,.88))`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="rgba(255,255,255,.88)";

});

});

/********************************************
SCROLL AL INICIO
********************************************/

window.onbeforeunload=()=>{

window.scrollTo(0,0);

};

});
window.addEventListener("load", () => {

    setTimeout(() => {

        let velocidad = 0.8;

        setInterval(() => {
            window.scrollBy(0, velocidad);
        }, 16);

    }, 4000);

});

window.onload = function () {

    // Tu código...

    setTimeout(() => {

        let velocidad = 0.8;

        setInterval(() => {
            window.scrollBy(0, velocidad);
        }, 16);

    }, 4000);

}


window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("pantalla2").scrollIntoView({
            behavior: "smooth"
        });

    }, 5000); // Espera 5 segundos

});
