let numeroSecreto = 0;
let intentos = 0;
let listaDeNumeros = [];
let numMax = 5;
function asignarTxt(element, txt) {
    let elementoHTML = document.querySelector(element);
    elementoHTML.innerHTML = txt;
    return;
}
function verificarIntento() {
    let numIntentosUsuario = parseInt(document.getElementById('input').value);
    if(numIntentosUsuario === numeroSecreto) {
        asignarTxt('p',`¡Has acertado, en un número total de ${intentos} ${intentos > 1 ? 'intentos' : 'intento'}! ✔`);
        document.getElementById('reiniciar').removeAttribute("disabled");
    } else {
        if(numeroSecreto > numIntentosUsuario) {
            asignarTxt('p', 'El número secreto es mayor.');
        } else {
            asignarTxt('p', 'El número secreto es menor.');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja() {
    document.querySelector('#input').value = '';
}
function generarNum() {
    let numeroGenerado =  Math.floor(Math.random() * numMax) + 1;

    if(listaDeNumeros.length == numMax) {
        asignarTxt('p', 'Ya has adivinado todos los números posibles');
    } else {
        if(listaDeNumeros.includes(numeroGenerado)) {
            return generarNum();
        } else {
            listaDeNumeros.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
}
function condicionesIniciales() {
    asignarTxt('h1', 'Descifra el número secreto');
    asignarTxt('p', `Indica un número, del 1 al ${numMax}:`);
    numeroSecreto = generarNum();
    intentos = 1;
}
function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute("disabled", true);
}
condicionesIniciales();




