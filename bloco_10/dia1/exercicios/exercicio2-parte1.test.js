const { it, expect } = require('@jest/globals');
const { exec } = require('child_process');
const myRemove = require('./exercicio2-parte1');

describe('os testes do exercicio 2 do bloco 7.3', () => { 
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1,2,4]);
  });  

  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1,2,3,4]);
  })

  it('Verifique se o array passado por parâmetro não sofreu alterações', () => {
    const array = [1,2,3,4];
    const newArray = myRemove(array);
    expect(array).toEqual([1,2,3,4]);
  })

  it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1,2,3,4]);
  })

});  