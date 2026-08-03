/*==================================================
                WHATSAPP.JS
==================================================*/

const btnWhatsapp = document.getElementById("btnWhatsapp");

const txtNombre = document.getElementById("nombre");
const txtMensaje = document.getElementById("mensaje");

/*************************************************
CONFIGURACIÓN
*************************************************/

// Cambia este número por el tuyo.
// Debe llevar el código del país sin el signo +
const telefono = "573243546801";

/*************************************************
ENVIAR
*************************************************/

btnWhatsapp.addEventListener("click", enviarConfirmacion);

function enviarConfirmacion(){

    const nombre = txtNombre.value.trim();
    const mensaje = txtMensaje.value.trim();

    if(nombre===""){

        txtNombre.focus();

        txtNombre.classList.add("error");

        setTimeout(()=>{

            txtNombre.classList.remove("error");

        },1200);

        return;

    }

    btnWhatsapp.disabled = true;

    btnWhatsapp.classList.add("sending");

    let texto =
`🌸 *CONFIRMACIÓN DE ASISTENCIA* 🌸

👤 *Invitado:*
${nombre}

🎉 Confirmo mi asistencia a los XV años de Isabella.`;

    if(mensaje !== ""){

        texto +=

`

💌 *Mensaje para Isabella:*

${mensaje}`;

    }

    texto +=

`

✨ Enviado desde la Invitación Digital.`;

    const url =
`https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;

    setTimeout(()=>{

        window.open(url,"_blank");

        btnWhatsapp.disabled = false;

        btnWhatsapp.classList.remove("sending");

    },500);

}
