const {obj1, obj2, obj3} = require('./exercicio5-parte1');

describe('os testes do exercicio 4 do bloco 7.3', () => {
  it('Compare dois objetos para verificar se são idênticos ou não',() => {
    expect(obj1).toEqual(obj2);
  });

  it('Compare dois objetos para verificar se são idênticos ou não',() => {
    expect(obj1).not.toEqual(obj3);
  });

});