class Pista {
    constructor(comprimento) {
        this.comprimento = comprimento;
        this.obstaculos = [];
    }

    // Método para adicionar obstáculos
    adicionarObstaculo(obstaculo) {
        this.obstaculos.push(obstaculo);
    }

    // Método para verificar colisões
    verificarColisoes(carro) {
        for (let obstaculo of this.obstaculos) {
            if (obstaculo.verificarColisao(carro)) {
                console.log(`${carro.nome} colidiu com um obstáculo na posição ${obstaculo.posicao}`);
                return true;
            }
        }
        return false;
    }
}