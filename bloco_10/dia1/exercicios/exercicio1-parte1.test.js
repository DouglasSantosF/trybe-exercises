const { it, expect } = require('@jest/globals');
const sum = require('./exercicio-parte1.js');


describe('os testes do exercicio 1 do bloco 7.3',() => {

  it('testando se retorno de sum(4, 5) é 9', () => {
    
    expect(sum(4, 5)).toBe(9);

  });

  it('Teste se o retorno de sum(0, 0) é 0', () => {
    expect(0).toBe(sum(0,0));
  })
  
  it('Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', () => {
    expect(() => {sum(4,'5')}).toThrow();
  });

  it('Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    expect(() => {sum(4,'5')}).toThrowError('parameters must be numbers');
  });

});