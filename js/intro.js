document.addEventListener("DOMContentLoaded",()=>{

const fondo=document.createElement("canvas");

fondo.id="backgroundCanvas";

fondo.style.position="fixed";
fondo.style.left="0";
fondo.style.top="0";
fondo.style.width="100%";
fondo.style.height="100%";
fondo.style.zIndex="0";
fondo.style.pointerEvents="none";

document.body.prepend(fondo);

const ctx=fondo.getContext("2d");

let w,h;

function resize(){

w=fondo.width=window.innerWidth;

h=fondo.height=window.innerHeight;

}

resize();

window.addEventListener("resize",resize);

/***************************************************
            BOKEH
****************************************************/

const luces=[];

for(let i=0;i<40;i++){

luces.push({

x:Math.random()*w,

y:Math.random()*h,

r:20+Math.random()*70,

dx:(Math.random()-.5)*.25,

dy:(Math.random()-.5)*.25,

a:.05+Math.random()*.15

});

}

function dibujar(){

ctx.clearRect(0,0,w,h);

luces.forEach(l=>{

l.x+=l.dx;

l.y+=l.dy;

if(l.x<-100)l.x=w+100;
if(l.x>w+100)l.x=-100;

if(l.y<-100)l.y=h+100;
if(l.y>h+100)l.y=-100;

const g=ctx.createRadialGradient(

l.x,l.y,0,

l.x,l.y,l.r

);

g.addColorStop(0,`rgba(255,255,255,${l.a})`);

g.addColorStop(1,"rgba(255,255,255,0)");

ctx.fillStyle=g;

ctx.beginPath();

ctx.arc(l.x,l.y,l.r,0,Math.PI*2);

ctx.fill();

});

requestAnimationFrame(dibujar);

}

dibujar();

});