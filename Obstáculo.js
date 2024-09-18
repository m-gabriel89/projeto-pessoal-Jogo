class Obstaculo {
    constructor(posicao) {
        this.posicao = posicao;
    }

    // Método para verificar colisão com o carro
    verificarColisao(carro) {
        return carro.posicao === this.posicao;
    }
}