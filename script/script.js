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


    addEventListener() é um método para anexar um manipulador de eventos a um elemento.
    <br/>
    <br/>
    Sintaxe<br/>
    element.addEventListener(event, function, useCapture);
    <br/>
    <br/>
    Ex.: Envio mensagem com Enter (Projeto 5 - Chat Uol)
    <br/>
    <img src="/img/Ex Event Listener Enter.png">
    <br/>
    <bt/>
    let enterMensagem = document.querySelector(".newMensagem");<br/>
enterMensagem.addEventListener("keyup", function(event) {<br/>
    if (event.keyCode === 13) {<br/>
       event.preventDefault();<br/>
        enviaMensagem();<br/>
   }<br/>
});<br/>
    
    `},
    {topico: "3 - O que é uma função de callback (utilizada no Event Listener)?", 
    descricao: `
    É um tipo de função que só é executada após o processamento de outra função.<br/>
    Nada mais é que a função a ser executada quando o evento ocorrer. O objetivo do recurso é não bloquear a execução do código enquanto outra atividade é executada.
    <br/>
    <br/>
    document.queryselector("#callback-btn")<br/>
    .addEventListener("click", <strong>function() {<br/>    
      console.log("O usuário clicou no botão!");<br/>
}</strong>); `},
    {topico: "4 - Qual a diferença de um Event Listener de atributos HTML (como onclick)?",
    descricao: `
    <br/>
    <strong>addEventListener</strong> pode adicionar vários eventos a um elemento específico.<br/>
    <strong>addEventListener</strong> pode receber um terceiro argumento que pode controlar a propagação do evento.<br/>
    <strong>addEventListener</strong> não funciona em versões anteriores do Internet explorer, que usa attachEvent.<br/>
    <br/>

    <strong>onclick</strong> pode adicionar apenas um único evento a um elemento.<br/>
    No <strong>onclick</strong> a propagação de eventos não pode ser controlada por onclick.<br/>
    <strong>onclick</strong> funciona em todos os navegadores.

    `},
    {topico: "5 - O que é o objeto Event que é recebido na função de callback?", 
    descricao: `
    É próprio o elemento que ocorreu a ação. É passado automaticamente para os manipuladores de eventos para fornecer recursos e informações extras.
    <br/>
    <br/>
    let divs = document.querySelectorAll('div');<br/>
    for (let i = 0; i < divs.length; i++) {<br/>
    divs[i].onclick = function(<strong>e</strong>) {<br/>
    e.<strong>target</strong>.style.backgroundColor = bgChange();
    `},
    {topico: "6 - O que é Event Bubbling em JS?", 
    descricao: `
    <a href="https://media.prod.mdn.mozit.cloud/attachments/2016/10/07/14075/1805b5a6f5ec0cd7f64f9d645f144510/bubbling-capturing.png" target="_blank"><img class="ajusta" src="https://media.prod.mdn.mozit.cloud/attachments/2016/10/07/14075/1805b5a6f5ec0cd7f64f9d645f144510/bubbling-capturing.png"></a>`},
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

function renderizaImagem(){
    document.querySelector(".imagemBonita").classList.toggle("escondido");
}
function random(number) {
    return Math.floor(Math.random()*(number+1));
}

function setaCor(event){
    event.preventDefault();
    let rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.querySelector(".descricaoTela").style.backgroundColor = rndCol;
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
let escutaTecla = document.querySelector("body");
addEventListener("keyup", function(event) {
    if (event.keyCode === 0x27) {
       event.preventDefault();
        proximoTopico();
   }
   if (event.keyCode === 0x25) {
    event.preventDefault();
     anteriorTopico();
   }
   if (event.keyCode === 13) {
    event.preventDefault();
     renderizaImagem();
     setTimeout(renderizaImagem, 2000);
   }
});

let modificaCor = document.querySelector(".topo h1");
modificaCor.addEventListener("click", setaCor);