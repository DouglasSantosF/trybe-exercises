
const readline = require('readline-sync');

const name = readline.question('Qual seu nome? ');
const idade = readline.questionInt('Qual sua idade /n?');

console.log(`Seja bem vindo ${name}, você possui ${idade} anos.`);

//console.log('Hello, world!');