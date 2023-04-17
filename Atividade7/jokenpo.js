function enviarJogada(jogada) {

    if (jogada === "pedra") {

        
        alert("Você escolheu " + jogada + "!");
        var computador = Math.random().toFixed(1); // gera um número aleatório entre 0 e 1
        var jogadapedra = Math.random().toFixed(1);; // gera um número aleatório entre 0 e 1

        // fiz uma lógica bem boba que já fiz uma vez num Mod de Victoria 2 anos atrás. Era algo simples mas trabalhoso
        // e decidi fazer o mesmo aqui

        if (jogadapedra > computador) {
            alert("O computador escolheu tesoura, você ganhou!");

        }

        if (jogadapedra < computador) {
            alert("O computador escolheu papel, você perdeu!");

        }
        if (jogadapedra == computador) {
            alert("O computador escolheu pedra, foi empate!");
        }


    }


    if (jogada === "papel") {


        alert("Você escolheu " + jogada + "!");
        var computador = Math.random().toFixed(1);; // gera um número aleatório entre 0 e 1
        var jogadapapel = Math.random().toFixed(1);; // gera um número aleatório entre 0 e 1

        // fiz uma lógica bem boba que já fiz uma vez num Mod de Victoria 2 anos atrás. Era algo simples mas trabalhoso
        // e decidi fazer o mesmo aqui

        if (jogadapapel > computador) {
            alert("O computador escolheu pedra, você ganhou!");

        }

        if (jogadapapel < computador) {
            alert("O computador escolheu tesoura, você perdeu!");

        }
        if (jogadapapel == computador)
        {
            alert("O computador escolheu papel, foi empate!");
        }


    }


    if (jogada === "tesoura") {


        alert("Você escolheu " + jogada + "!");
        var computador = Math.random().toFixed(1);; // gera um número aleatório entre 0 e 1
        var jogadatesoura = Math.random().toFixed(1);; // gera um número aleatório entre 0 e 1

        // fiz uma lógica bem boba que já fiz uma vez num Mod de Victoria 2 anos atrás. Era algo simples mas trabalhoso
        // e decidi fazer o mesmo aqui

        if (jogadatesoura > computador) {
            alert("O computador escolheu papel, você ganhou!");

        }

        if (jogadatesoura < computador) {
            alert("O computador escolheu pedra, você perdeu!");

        }
        if (jogadatesoura == computador){
            alert("O computador escolheu tesoura, foi empate!");
        }


    }

    // outras instruções para o jogo
}
