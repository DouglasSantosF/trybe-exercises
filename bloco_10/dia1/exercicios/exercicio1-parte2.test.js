const { encode , decode } = require('./exercicio1-parte2');

describe('testando 2 funções do projeto Playground Functions ', () => { 

  it('a função encode é definida', () => {
    expect(encode).toBeDefined();
  });

  it('encode é uma função', () => {
    expect(typeof encode).toEqual('function');
  });

  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => { 
    expect(encode('aeiou')).toBe('12345');
  });


});