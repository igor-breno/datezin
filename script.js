// Pega os elementos do botão "Sim", do iframe do vídeo e da caixa de diálogo
let botaoNao = document.getElementById("nao");
let botaoSim = document.getElementById("sim");
let mensagemDialogo = document.getElementById("mensagemDialogo");
let caixaDialogo = document.getElementById("caixaDialogo");
let posOriginal = botaoNao.getBoundingClientRect();

// Adiciona um evento ao botão "Não"
botaoNao.addEventListener("mouseover", moverBotaoNao);

// Função para mover o botão "Não"
function moverBotaoNao() {
    let posX = Math.random() * (window.innerWidth - botaoNao.offsetWidth);
    let posY = Math.random() * (window.innerHeight - botaoNao.offsetHeight);

    botaoNao.style.position = "absolute";
    botaoNao.style.left = posX + "px";
    botaoNao.style.top = posY + "px";

    // Volta o botão "Não" para a posição original após alguns segundos
    setTimeout(() => {
        botaoNao.style.position = "static";
        botaoNao.style.left = posOriginal.left + "px";
        botaoNao.style.top = posOriginal.top + "px";
    }, 1000);
}

// Adiciona um evento ao botão "Sim"
botaoSim.addEventListener("click", function() {
    // Exibe a mensagem na caixa de diálogo
    mensagemDialogo.innerText = "Combinado! Te encontro às 20h.";
    caixaDialogo.classList.remove('oculto'); // Exibe a caixa de diálogo

    // Inicia o vídeo oculto
    const video = document.getElementById("video");
    video.style.display = "block"; // Torna o vídeo visível para que possa tocar o áudio
});
