const readline = require('readline-sync');

const calculoIMC = require('./calculoIMC');
const velocidade = require('./velocidade');
const sorteio = require('./sorteio');

console.log("Calculo do IMC - número 1");
console.log("Calculo da Velocidade Média - número 2");
console.log("Calculo do Sorteio - número 3");

const resposta = readline.questionInt("Escolhe um script pra ser executado. ");

if(resposta == 1) {
  return  calculoIMC();
}
if(resposta == 1) {
  return velocidade();
}
if(resposta == 1) {
  return  sorteio();
}