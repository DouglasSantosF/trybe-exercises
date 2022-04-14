const readline = require('readline-sync');

function main(){
  const calculaVelocidade = (distancia , tempo) => {
    const resultado = distancia / tempo;
    return resultado;
  }
  
  const distancia = readline.questionInt('Qual a distância?  \n');
  const tempo = readline.questionInt('Qual o tempo?  \n');
  
  console.log(`A velocidade média é : ${calculaVelocidade(distancia,tempo)}`);
}

main();