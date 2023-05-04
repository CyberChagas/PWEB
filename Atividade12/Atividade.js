// Seleciona a imagem da janela
let janela = document.getElementById("janela");

// Define o comportamento quando o mouse passa por cima da imagem
janela.addEventListener("mouseover", function () {
	janela.src = "janelaaberta.png";
});

// Define o comportamento quando o mouse sai de cima da imagem
janela.addEventListener("mouseout", function () {
	janela.src = "janelafechada.png";
});

// Define o comportamento quando a imagem é clicada
janela.addEventListener("click", function () {
	janela.src = "janelaquebra.png";
});
