const myRemoveWithoutCopy = require('./exercicio3-parte1.js'); 

describe('os testes do exercicio 3 do bloco 7.3',() => {
  
  test('se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1,2,4]);
  })

  it('se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]',() => { 
    expect(myRemoveWithoutCopy([1,2,3,4], 3)).not.toEqual([1,2,3,4]);
  });

  test('Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações', () => {
    const arrayTest = [1,2,3,4];
    myRemoveWithoutCopy(arrayTest, 2);
    expect(arrayTest).toEqual([1,3,4]);
  });

  it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });

});