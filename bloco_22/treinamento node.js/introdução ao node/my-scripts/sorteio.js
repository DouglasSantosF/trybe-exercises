const readline = require('readline-sync');

function main () {
  const numero = readline.questionInt("Escolha um numero! \n");
  
  const sorteio = (numero) => {
  
    const numeroRandom = Math.floor(Math.random() * 10 + 1);
  
    if(numero == numeroRandom){
      console.log('Parabéns, número correto!');
      const pergunta1 = readline.question("Deseja jogar novamente? ( sim / nao ) \n\n");
      if(pergunta1 === "sim") {
        const numero2 = readline.questionInt("Escolha um numero! \n");
       return sorteio(numero2);
      }  
    }
  
    console.log(`Opa, não foi dessa vez. O número era ${numeroRandom}`);
  
    const pergunta = readline.question("Deseja jogar novamente? ( sim / nao ) \n\n");
  
    if(pergunta === "sim") {
      const numero2 = readline.questionInt("Escolha um numero! \n");
     return sorteio(numero2);
    }
  
  }
  
  sorteio();
  
}