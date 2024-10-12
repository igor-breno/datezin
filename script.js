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
    }, 1500); // Tempo aumentado para 1500 ms
}

// Adiciona um evento ao botão "Sim"
botaoSim.addEventListener("click", function() {
    // Exibe a mensagem na caixa de diálogo
    mensagemDialogo.innerHTML = `
        Combinado! Te encontro às 20h.
        <div class="mapa">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31739.413965965014!2d-47.88020016279739!3d-15.7703915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3b0058a46f57%3A0xeef74f8fc78b1e55!2sBalc%C3%A3o%20Vinhos!5e0!3m2!1spt-BR!2sbr!4v1698180602406!5m2!1spt-BR!2sbr"
                width="300"
                height="200"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
            ></iframe>
        </div>
    `;
    caixaDialogo.classList.remove('oculto'); // Exibe a caixa de diálogo
});
