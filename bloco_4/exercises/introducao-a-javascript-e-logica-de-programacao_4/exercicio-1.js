/* 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
 -Valor esperado no console: Bem-vinda, Margarida
2-Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.
 */

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log("Bem-vinda,", info.personagem);

info.recorrente = "sim";

console.log(info);