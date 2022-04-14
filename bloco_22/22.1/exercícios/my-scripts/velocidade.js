const readline = require('readline-sync');

function calculaVelocidadeMedia () {
  const distancia = readline.questionInt('Distancia percorrida (m): ');
  const tempo = readline.questionInt('tempo gasto (s): ');

  const velocidadeMedia = (distancia / tempo ).toFixed(2);

  console.log(`velocidade média : ${velocidadeMedia} m/s`);
}

calculaVelocidadeMedia();