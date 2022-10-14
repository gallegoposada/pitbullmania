const inicio = document.getElementById("inicio");
const videos = document.getElementById("videos");
const tablas = document.getElementById("tablas");
const formulario = document.getElementById("formulario");

const btninicio=document.getElementById("btninicio");
const btntablas = document.getElementById("btntablas");
const btnvideos = document.getElementById("btnvideos");
const btnformulario = document.getElementById("btnformulario");
const btninicio2=document.getElementById("btninicio2");
const btntablas2 = document.getElementById("btntablas2");
const btnvideos2 = document.getElementById("btnvideos2");
const btnformulario2 = document.getElementById("btnformulario2");

btninicio.addEventListener('click',mostrarInicio);  
btninicio2.addEventListener('click',mostrarInicio); 
btntablas.addEventListener('click',mostrarTablas)  
btntablas2.addEventListener('click',mostrarTablas)  
btnvideos.addEventListener('click',mostrarVideos)  
btnvideos2.addEventListener('click',mostrarVideos)  
btnformulario.addEventListener('click',mostrarFormulario)  
btnformulario2.addEventListener('click',mostrarFormulario) 

mostrarInicio();

function mostrarInicio(){
    inicio.style.display = 'block';
    videos.style.display = 'none';
    tablas.style.display = 'none';
    formulario.style.display = 'none';
}
function mostrarTablas(){
    tablas.style.display = 'flex';
    videos.style.display = 'none';
    inicio.style.display = 'none';
    formulario.style.display = 'none';
}
function mostrarVideos(){
    videos.style.display = 'flex';
    tablas.style.display = 'none';
    inicio.style.display = 'none';
    formulario.style.display = 'none';
}
function mostrarFormulario(){
    formulario.style.display = 'block';
    videos.style.display = 'none';
    inicio.style.display = 'none';
    tablas.style.display = 'none';
}
