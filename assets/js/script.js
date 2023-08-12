
let spanHoras = document.getElementById("horas");
let spanMinutos = document.getElementById("minutos");
let spanSegundos = document.getElementById("segundos");
let playButton = document.getElementById("play");
let pauseButton = document.getElementById("pause");
let retryButton = document.getElementById("retry");

let timer;
let horas = 0;
let minutos = 0;
let segundos = 0;


function play(evento) {
evento.preventDefault();
timer = setInterval(atualizar, 1000);
}

function pause(evento) {
evento.preventDefault();
clearInterval(timer);
}

function retry(evento) {
evento.preventDefault();
clearInterval(timer);
horas = 0;
minutos = 0;
segundos = - 1;
atualizar();
}

function atualizar() {
segundos++;
if (segundos === 60) {
segundos = 0;
minutos++;
}

if (minutos === 60) {
minutos = 0;
horas++;
}

spanHoras.textContent = zeroEsquerda(horas);
spanMinutos.textContent = zeroEsquerda(minutos);
spanSegundos.textContent = zeroEsquerda(segundos);
}

function zeroEsquerda(value) {
if (value < 10) {
return "0" + value;
} else {
return value;
}
}

playButton.addEventListener("click", play);
pauseButton.addEventListener("click", pause);
retryButton.addEventListener("click", retry);
