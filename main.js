const meuCarro = new Carro('Relâmpago McQueen', 5);
const minhaPista = new Pista(100);
minhaPista.adicionarObstaculo(new Obstaculo(20));
minhaPista.adicionarObstaculo(new Obstaculo(50));
minhaPista.adicionarObstaculo(new Obstaculo(80));

const meuJogo = new Jogo(meuCarro, minhaPista);
meuJogo.iniciar();