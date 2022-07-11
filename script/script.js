const conteudo = [{topico: "1 - O que são eventos de mouse e teclado em JavaScript?", 
    descricao: `Primeiramente, eventos nada mais são do que ações realizadas na página ou em algum elemento desta.<br/>
    Seja clicar, pressionar alguma tecla, passar o mouse em algum elemento, enviar um formulário, redimensionar ou fechar algo …
    <br/>
    <br/>
    Alguns dos eventos mais utilizados:<br/>
    <strong>onChange</strong>: muda o valor do elemento.<br/>
    <strong>onClick</strong>: o elemento é clicado pelo usuário.<br/>
    <strong>onFocus</strong>: o elemento é focado.<br/>
    <strong>onKeyPress</strong>: o usuário pressiona alguma tecla sobre o elemento.<br/>
    <strong>onLoad</strong>: carrega o elemento por completo.<br/>
    <strong>onMouseOver</strong>: define ação quando o usuário passa o mouse sobre o elemento.<br/>
    <strong>onMouseOut</strong>: define ação quando o usuário retira o mouse sobre o elemento.<br/>
    <strong>onSubmit</strong>: define ação ao enviar um formulário.<br/>
    <strong>onBlur</strong>: remove o foco do elemento.<br/>
    <br/>
    Lista de eventos: <a href="https://developer.mozilla.org/en-US/docs/Web/Events" target="_blank">link msn/events</a>
    <br/>
    <br/>
    Evento possuem manipuladores de eventos, que são códigos executados quando o evento for disparado.
    `},
    {topico: "2 - O que é um Event Listener e como adicioná-lo via JS?", 
    descricao: `
    
    <br/>
    <br/>
    Ex.: Envio mensagem com Enter (Projeto 5 - Chat Uol)
    <br/>
    <img src="/img/Ex Event Listener Enter.png">
    `},
    {topico: "3 - O que é uma função de callback (utilizada no Event Listener)?", 
    descricao: ""},
    {topico: "4 - Qual a diferença de um Event Listener de atributos HTML (como onclick)?",
    descricao: ""},
    {topico: "5 - O que é o objeto Event que é recebido na função de callback?", 
    descricao: ""},
    {topico: "6 - O que é Event Bubbling em JS?", 
    descricao: ""},
    {topico: "7 - O que faz a função event.stopPropagation?", 
    descricao: `O método <strong>stopPropagation()</strong> para a propagação de um evento através do DOM. Impedindo que o mesmo evento seja chamado, ou a propagação até os elementos pai ou até os elementos filho.
    <br/>
    <br/>
    <h2>Sintaxe:</h2>
    event.stopPropagation()
    <br/>
    <br/>
    Ex.: <a href="https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_stoppropagation" target="_blank">w3schools /stoppropagation</a>
    `}];
    
let i = 0;

function renderizaTopico(){
    let desc = document.querySelector(".descricao");
    desc.innerHTML = `<div><h2>${conteudo[i].topico}</h2></div>
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
