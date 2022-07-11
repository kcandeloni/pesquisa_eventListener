const conteudo = [{topico: "1 - O que são eventos de mouse e teclado em JavaScript?", 
    descricao: ""},
    {topico: "2 - O que é um Event Listener e como adicioná-lo via JS?", 
    descricao: ""},
    {topico: "3 - O que é uma função de callback (utilizada no Event Listener)?", 
    descricao: ""},
    {topico: "4 - Qual a diferença de um Event Listener de atributos HTML (como onclick)?",
    descricao: ""},
    {topico: "5 - O que é o objeto Event que é recebido na função de callback?", 
    descricao: ""},
    {topico: "6 - O que é Event Bubbling em JS?", 
    descricao: ""},
    {topico: "7 - O que faz a função event.stopPropagation?", 
    descricao: ""}];
    
let i = 0;

function renderizaTopico(){
    let desc = document.querySelector(".descricao");
    desc.innerHTML = `<h2>${conteudo[i].topico}</h2>
    <p>${conteudo[i].descricao}</p>`;
}

renderizaTopico();

function setaTopico(numTopico){
    i = numTopico;
    renderizaTopico();
}

function proximoTopico(){
    if(i < 6){
        i++;
    }
    else{
        i = 0;
    }
    renderizaTopico();
}

function anteriorTopico(){
    if(i > 0){
        i--;
    }
    else{
        i = 6;
    }
    renderizaTopico();
}

//Eventos:

