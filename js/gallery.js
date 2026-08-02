/*==================================================
                GALLERY.JS
==================================================*/

const gallery = document.querySelector(".gallery-track");
const slides = document.querySelectorAll(".gallery-item");
const dots = document.querySelectorAll(".dot");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");

const btnPrev = document.getElementById("prevPhoto");
const btnNext = document.getElementById("nextPhoto");
const btnClose = document.getElementById("closeLightbox");

let current = 0;

let startX = 0;
let endX = 0;

let autoPlay;

/************************************************
MOSTRAR FOTO
************************************************/

function showSlide(index){

    if(index<0){

        index=slides.length-1;

    }

    if(index>=slides.length){

        index=0;

    }

    current=index;

    gallery.style.transform=`translateX(-${current*100}%)`;

    dots.forEach(dot=>dot.classList.remove("active"));

    dots[current].classList.add("active");

}

showSlide(0);

/************************************************
AUTO PLAY
************************************************/

function startGallery(){

    autoPlay=setInterval(()=>{

        showSlide(current+1);

    },5000);

}

function stopGallery(){

    clearInterval(autoPlay);

}

startGallery();

/************************************************
DOTS
************************************************/

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        stopGallery();

        showSlide(index);

        startGallery();

    });

});

/************************************************
SWIPE
************************************************/

gallery.addEventListener("touchstart",(e)=>{

    startX=e.touches[0].clientX;

});

gallery.addEventListener("touchmove",(e)=>{

    endX=e.touches[0].clientX;

});

gallery.addEventListener("touchend",()=>{

    let distance=startX-endX;

    if(distance>50){

        stopGallery();

        showSlide(current+1);

        startGallery();

    }

    if(distance<-50){

        stopGallery();

        showSlide(current-1);

        startGallery();

    }

});

/************************************************
ABRIR LIGHTBOX
************************************************/

slides.forEach((img,index)=>{

    img.addEventListener("click",()=>{

        current=index;

        openLightbox();

    });

});

function openLightbox(){

    lightbox.classList.add("show");

    lightboxImage.src=slides[current].src;

}

function closeLightbox(){

    lightbox.classList.remove("show");

}

/************************************************
SIGUIENTE
************************************************/

function nextImage(){

    current++;

    if(current>=slides.length){

        current=0;

    }

    lightboxImage.src=slides[current].src;

    showSlide(current);

}

/************************************************
ANTERIOR
************************************************/

function previousImage(){

    current--;

    if(current<0){

        current=slides.length-1;

    }

    lightboxImage.src=slides[current].src;

    showSlide(current);

}

/************************************************
BOTONES
************************************************/

btnNext.addEventListener("click",nextImage);

btnPrev.addEventListener("click",previousImage);

btnClose.addEventListener("click",closeLightbox);

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        closeLightbox();

    }

});

/************************************************
TECLADO
************************************************/

document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("show")) return;

    if(e.key==="ArrowRight"){

        nextImage();

    }

    if(e.key==="ArrowLeft"){

        previousImage();

    }

    if(e.key==="Escape"){

        closeLightbox();

    }

});