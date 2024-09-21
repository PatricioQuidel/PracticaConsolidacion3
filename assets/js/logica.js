function asignarEventos(){
    let elBoton = document.getElementById('btnEnviar');
    elBoton.addEventListener('click', enviarMensaje);

let elDivSinLeer = document.getElementById('divSinLeer');
elDivSinLeer.addEventListener('click', cambiarTextoNormal);

let contenedorHoraActual = document.getElementById('horaActual');
let laHoraActual = mostrarHoraActual();
let hora = laHoraActual.getHours();
let minutos = laHoraActual.getMinutes();
let segundos = laHoraActual.getSeconds();
let horaCompleta = `${hora}:${minutos}:${segundos}`;
contenedorHoraActual.innerHTML = horaCompleta;
}


function cambiarTextoNormal(){
    let losParrafosSinLeer = document.getElementsByClassName('contacto2__nombre');
    for(let i=0; i< losParrafosSinLeer.length; i++){
        losParrafosSinLeer[i].style.fontWeight = 'normal';
    }
}

function enviarMensaje(){
    let elContenedor = document.getElementById('contenedorMensajeEnviado');
    elContenedor.style.display = 'block';
    let laCajaTexto = document.getElementById('txtMensaje');
    let elParrafo = document.getElementById('parrafoMensajeEnviado');
    elParrafo.innerHTML = laCajaTexto.value;
}

function mostrarHoraActual(){
    var currentTime = new Date();
    return currentTime;
}