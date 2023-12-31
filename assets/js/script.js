/*
Autor: Jorge Marcelo
Data de Criação: 12/08/2023
Github: https://github.com/Jorge-Marcelo
Linkedin: https://www.linkedin.com/in/jorge-marcelo-067a5017b/
Instagram: https://www.instagram.com/10_stronger/
Threads: https://www.threads.net/@10_stronger
*/ 

/*Pegando  os elementos pelo DOM*/
let spanHoras = document.getElementById("horas");
let spanMinutos = document.getElementById("minutos");
let spanSegundos = document.getElementById("segundos");
let playButton = document.getElementById("play");
let pauseButton = document.getElementById("pause");
let retryButton = document.getElementById("retry");

/*Inicializando variaveis*/
let timer;
let horas = 0;
let minutos = 0;
let segundos = 0;

/*Função de iniciar o contador*/
function play(evento) {
evento.preventDefault();
  /*setInterval para o contador contar de 1 em 1 segundo*/
timer = setInterval(atualizar, 1000);
}

/*unção para pausar*/
function pause(evento) {
evento.preventDefault();
clearInterval(timer);
}

/*Função para reiniar
OBS: tive que colocar -1 no segundos 
pq a variavel de segundos ja inicia incrementando*/
function retry(evento) {
evento.preventDefault();
clearInterval(timer);
horas = 0;
minutos = 0;
segundos = - 1;
atualizar();
}

/*Função para atualizar
os numeros do contador*/ 
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

 /*Adicionando zero a esquerda aos valores*/
spanHoras.textContent = zeroEsquerda(horas);
spanMinutos.textContent = zeroEsquerda(minutos);
spanSegundos.textContent = zeroEsquerda(segundos);
}

/*Função de adicionar zero a esquerda*/
function zeroEsquerda(value) {
if (value < 10) {
return "0" + value;
} else {
return value;
}
}

/*Escutadores de eventos para os botões*/
playButton.addEventListener("click", play);
pauseButton.addEventListener("click", pause);
retryButton.addEventListener("click", retry);

/*Redes Sociais*/

/*Função que vai abrir o link do instagram*/
const instgramLink = "https://www.instagram.com/10_stronger/";
const instagramButton = document.getElementById("instagram");

function instagram(instgramLink){
const newTableInstagram = window.open(instgramLink, "_blank");
newTableInstagram.focus();
}

instagramButton.addEventListener("click", function(){
instagram(instgramLink);
})

/*Função que vai abrir o link do Threads*/
const threadsLink = "https://www.threads.net/@10_stronger";
const threadsButton = document.getElementById("threads");

function threads(threadsLink){
const newTableThreads = window.open(threadsLink, "_blank");
newTableThreads.focus();
}

threadsButton.addEventListener("click", function(){
threads(threadsLink);
})


/*Função que vai abrir o link do linkedin*/
const linkedinLink = "https://www.linkedin.com/in/jorge-marcelo-067a5017b/";
const linkedinButton = document.getElementById("linkedin");

function linkedin(linkedinLink){
const newTableLinkedin = window.open(linkedinLink, "_blank");
newTableLinkedin.focus();
}

linkedinButton.addEventListener("click", function(){
linkedin(linkedinLink);    
})


/*Função que vai abrir o link do Github*/
const githubLink = "https://github.com/Jorge-Marcelo";
const githubButton = document.getElementById("github");

function github(githubLink){
const newTableGithub = window.open(githubLink, "_blank");
newTableGithub.focus();
}

githubButton.addEventListener("click", function(){
github(githubLink);
})
