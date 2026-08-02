document.addEventListener("DOMContentLoaded",()=>{

const contenedor=document.getElementById("petals");

if(!contenedor)return;

/****************************************************
CONFIGURACIÓN
****************************************************/

const PETALOS=35;

const colores=[
"#F8D7DA",
"#F3E5F5",
"#FCE4EC",
"#FFF8E1",
"#F9EFD7",
"#EADCF8"
];

/****************************************************
CREAR PÉTALO
****************************************************/

function crearPetalo(){

const petalo=document.createElement("div");

petalo.className="petal";

const size=10+Math.random()*18;

petalo.style.width=size+"px";
petalo.style.height=size*1.4+"px";

petalo.style.left=Math.random()*100+"vw";

petalo.style.top="-40px";

petalo.style.background=

colores[Math.floor(Math.random()*colores.length)];

petalo.style.opacity=.6+Math.random()*.4;

petalo.style.borderRadius="60% 40% 70% 30%";

petalo.style.position="fixed";

petalo.style.pointerEvents="none";

petalo.style.zIndex="3";

petalo.style.filter="blur(.2px)";

petalo.style.boxShadow=

"0 0 10px rgba(255,255,255,.4)";

const duracion=10+Math.random()*12;

const desplazamiento=(Math.random()*300)-150;

petalo.animate(

[
{
transform:
`translate(0,-50px)
rotate(0deg)`,
opacity:0
},
{
opacity:1,
offset:.1
},
{
transform:
`translate(${desplazamiento}px,
${window.innerHeight+150}px)
rotate(${360+Math.random()*720}deg)`,
opacity:0
}
],

{
duration:duracion*1000,
iterations:1,
easing:"linear"
}

);

contenedor.appendChild(petalo);

setTimeout(()=>{

petalo.remove();

},duracion*1000);

}

/****************************************************
INICIAR
****************************************************/

for(let i=0;i<PETALOS;i++){

setTimeout(crearPetalo,i*350);

}

setInterval(crearPetalo,700);

/****************************************************
DESTELLOS DORADOS
****************************************************/

function crearBrillo(){

const brillo=document.createElement("div");

const s=3+Math.random()*5;

brillo.style.position="fixed";

brillo.style.width=s+"px";
brillo.style.height=s+"px";

brillo.style.borderRadius="50%";

brillo.style.left=Math.random()*100+"vw";

brillo.style.top=Math.random()*100+"vh";

brillo.style.background="#E6C77D";

brillo.style.boxShadow="0 0 12px #E6C77D";

brillo.style.pointerEvents="none";

brillo.style.zIndex="2";

contenedor.appendChild(brillo);

brillo.animate(

[
{
opacity:0,
transform:"scale(.2)"
},
{
opacity:1,
transform:"scale(1.4)"
},
{
opacity:0,
transform:"scale(.2)"
}
],

{
duration:2500+Math.random()*2500,
iterations:1
}

);

setTimeout(()=>{

brillo.remove();

},5000);

}

setInterval(crearBrillo,600);

/****************************************************
VIENTO
****************************************************/

let viento=1;

setInterval(()=>{

viento=(Math.random()*2)-1;

document.querySelectorAll(".petal").forEach(p=>{

p.style.transform=

`translateX(${viento*20}px)`;

});

},4000);

/****************************************************
PAUSAR EN SEGUNDO PLANO
****************************************************/

document.addEventListener("visibilitychange",()=>{

if(document.hidden){

contenedor.style.display="none";

}else{

contenedor.style.display="block";

}

});

});