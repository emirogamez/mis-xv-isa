/*======================================
        BUTTERFLIES.JS
======================================*/

document.addEventListener("DOMContentLoaded",()=>{

    const container=document.querySelector(".butterflies");

    if(!container)return;

    const imagenes=[

        "assets/img/butterfly1.png",
        "assets/img/butterfly2.png",
        "assets/img/butterfly3.png"

    ];

    function crear(){

        const img=document.createElement("img");

        img.className="butterfly";

        img.src=imagenes[
            Math.floor(Math.random()*imagenes.length)
        ];

        const size=35+Math.random()*30;

        img.style.width=size+"px";

        img.style.left="-80px";

        const top=Math.random()*80+5;

        img.style.top=top+"%";

        container.appendChild(img);

        mover(img);

    }

    function mover(img){

        let x=-80;

        let y=parseFloat(img.style.top);

        const speed=0.8+Math.random()*1.4;

        const wave=Math.random()*30+20;

        const start=performance.now();

        function frame(time){

            x+=speed;

            const t=(time-start)/600;

            img.style.transform=

                `translate(${x}px,${Math.sin(t)*wave}px)
                 rotate(${Math.sin(t)*8}deg)`;

            if(x<window.innerWidth+120){

                requestAnimationFrame(frame);

            }else{

                img.remove();

            }

        }

        requestAnimationFrame(frame);

    }

    crear();

    setInterval(crear,3500);

});