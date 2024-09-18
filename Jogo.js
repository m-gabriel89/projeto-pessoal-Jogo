class Jogo {
    constructor(carro, pista) {
        this.carro = carro;
        this.pista = pista;
    }

    // Método para iniciar o jogo
    iniciar() {
        while (this.carro.posicao < this.pista.comprimento) {
            this.carro.mover();
            this.carro.exibirPosicao();
            if (this.pista.verificarColisoes(this.carro)) {
                console.log('Jogo Terminado!');
                return;
            }
        }
        console.log('Você completou a corrida!');
    }
}
