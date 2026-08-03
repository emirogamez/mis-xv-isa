document.addEventListener("DOMContentLoaded",()=>{

const evento=new Date("September 4, 2026 18:00:00").getTime();

const dias=document.getElementById("days");
const horas=document.getElementById("hours");
const minutos=document.getElementById("minutes");
const segundos=document.getElementById("seconds");

function dos(n){

return n.toString().padStart(2,"0");

}

function actualizar(){

const ahora=new Date().getTime();

const diferencia=evento-ahora;

if(diferencia<=0){

dias.innerHTML="00";
horas.innerHTML="00";
minutos.innerHTML="00";
segundos.innerHTML="00";

document.querySelector(".contador h2").innerHTML=

"🎉 Hoy es el gran día";

clearInterval(reloj);

confeti();

return;

}

const d=Math.floor(diferencia/(1000*60*60*24));

const h=Math.floor(

(diferencia%(1000*60*60*24))

/

(1000*60*60)

);

const m=Math.floor(

(diferencia%(1000*60*60))

/

(1000*60)

);

const s=Math.floor(

(diferencia%(1000*60))

/

1000

);

cambiar(dias,dos(d));

cambiar(horas,dos(h));

cambiar(minutos,dos(m));

cambiar(segundos,dos(s));

}

function cambiar(elemento,valor){

if(elemento.innerHTML!=valor){

elemento.animate(

[

{

transform:"scale(1.3)",

opacity:.6

},

{

transform:"scale(1)",

opacity:1

}

],

{

duration:300

}

);

elemento.innerHTML=valor;

}

}

actualizar();

const reloj=setInterval(actualizar,1000);

/****************************************
PULSO
****************************************/

setInterval(()=>{

document.querySelectorAll(".contador-grid div").forEach(caja=>{

caja.animate(

[

{

transform:"translateY(0)"

},

{

transform:"translateY(-6px)"

},

{

transform:"translateY(0)"

}

],

{

duration:600

}

);

});

},1000);

/****************************************
MENOS DE 30 DÍAS
****************************************/

function revisar(){

const ahora=new Date().getTime();

const faltan=

(evento-ahora)/(1000*60*60*24);

if(faltan<=30){

document.querySelectorAll(".contador-grid div").forEach(c=>{

c.style.border="2px solid #C8A96A";

});

}

if(faltan<=7){

document.querySelectorAll(".contador-grid div").forEach(c=>{

c.style.background="#FFF6F7";

});

}

}

revisar();

/****************************************
CONFETI
****************************************/

function confeti(){

const colores=[

"#DAB9C3",

"#C8A96A",

"#FFFFFF",

"#F5E5B5",

"#AEB8A1"

];

for(let i=0;i<180;i++){

let p=document.createElement("div");

p.style.position="fixed";

p.style.left=Math.random()*100+"vw";

p.style.top="-20px";

p.style.width="8px";

p.style.height="18px";

p.style.borderRadius="3px";

p.style.background=

colores[

Math.floor(Math.random()*colores.length)

];

p.style.zIndex="999999";

document.body.appendChild(p);

p.animate(

[

{

transform:

"translateY(0) rotate(0deg)",

opacity:1

},

{

transform:

`translate(

${Math.random()*400-200}px,

${window.innerHeight+200}px)

rotate(${Math.random()*900}deg)`,

opacity:0

}

],

{

duration:

3000+

Math.random()*2500,

easing:"ease-out"

}

);

setTimeout(()=>{

p.remove();

},6000);

}

}

/****************************************
PARPADEO
****************************************/

setInterval(()=>{

document.querySelectorAll(".contador-grid span").forEach(n=>{

n.animate(

[

{

opacity:1

},

{

opacity:.6

},

{

opacity:1

}

],

{

duration:800

}

);

});

},2000);

/****************************************
TÍTULO
****************************************/

setInterval(()=>{

const d=parseInt(dias.innerHTML);

if(d<=30){

document.querySelector(".contador h2").style.color="#C8A96A";

}

},1000);

});
