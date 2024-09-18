class Carro {
    constructor(nome, velocidade) {
        this.nome = nome;
        this.velocidade = velocidade;
        this.posicao = 0;
    }

    // Método para mover o carro
    mover() {
        this.posicao += this.velocidade;
    }

    // Método para exibir a posição do carro
    exibirPosicao() {
        console.log(`${this.nome} está na posição ${this.posicao}`);
    }
}
