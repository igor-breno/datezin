// Pega os elementos do botão "Não" e "Sim" pelos seus respectivos IDs
let botaoNao = document.getElementById("nao");
let botaoSim = document.getElementById("sim");
let mensagemErro = document.getElementById("erro");
let caixaDialogo = document.getElementById("caixaDialogo");
let mensagemDialogo = document.getElementById("mensagemDialogo"); 
let botaoFecharDialogo = document.getElementById("fecharDialogo");

// Armazena a posição original do botão "Não"
let posOriginal = botaoNao.getBoundingClientRect();
let erroExibido = false; // Variável para controlar a exibição do erro

// Função para mover o botão "Não"
function moverBotaoNao() {
    let posX = Math.random() * (window.innerWidth - botaoNao.offsetWidth);
    let posY = Math.random() * (window.innerHeight - botaoNao.offsetHeight);

    botaoNao.style.position = "absolute";
    botaoNao.style.left = posX + "px";
    botaoNao.style.top = posY + "px";

    // Exibe a mensagem de erro se ainda não tiver sido exibida
    if (!erroExibido) {
        mensagemErro.style.display = "block";
        erroExibido = true; // Atualiza para indicar que o erro foi exibido

        // Esconde a mensagem após 2 segundos
        setTimeout(() => {
            mensagemErro.style.display = "none";
        }, 1000);
    }
}

// Adiciona um evento ao botão "Não"
botaoNao.addEventListener("mouseover", moverBotaoNao);

// Adiciona um evento ao botão "Sim"
botaoSim.addEventListener("click", function() {
    // Exibe a mensagem na caixa de diálogo
    mensagemDialogo.innerText = "Combinado! Te encontro às 20h.";
    caixaDialogo.classList.remove('oculto'); // Exibe a caixa de diálogo

    // Volta o botão "Não" para a posição original
    botaoNao.style.position = "static";
    botaoNao.style.left = posOriginal.left + "px";
    botaoNao.style.top = posOriginal.top + "px";
});

// Adiciona um evento ao botão de fechar a caixa de diálogo
botaoFecharDialogo.addEventListener("click", function() {
    caixaDialogo.classList.add('oculto'); // Esconde a caixa de diálogo
});
