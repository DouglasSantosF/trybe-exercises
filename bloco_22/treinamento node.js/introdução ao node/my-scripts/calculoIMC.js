
const imc = require('./imc');
const readline = require('readline-sync');

function main() {
  const nome = readline.question('Qual seu nome? \n');
  const peso = readline.questionFloat('Qual seu peso? \n');
  const altura = readline.questionFloat('qual sua altura? \n');
  
  console.log(`${nome}, seu imc é : ${imc(peso, altura)}`);
}

main();

module.exports = main();