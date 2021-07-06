/* const assert = require('assert'); // Sintaxe para incluir o módulo assert

// assert.strictEqual(50, 50); // Sem erros: 50 == 50
// assert.strictEqual(50, 70); // AssertionError: 50 == 70 */

//-----------------------------------------------------------------------------------------

/* const assert = require('assert');

function add(a, b) {
  return a + b;
}

const expected = add(1, );

//assert.ok(expected === 3, 'Um mais dois é igual a três'); // Checa se o primeiro argumento é verdadeiro
//assert.strictEqual(expected, 3, 'Um mais dois é igual a três'); // Checa se o primeiro e segundo argumentos são iguais em valor e tipo (===)
assert.notStrictEqual(expected, 4, 'Um mais dois é igual a três (e não quatro!)'); // Checa se o primeiro e segundo argumentos são diferentes (!==) */

//-----------------------------------------------------------------------------------------
/* 
const assert = require('assert');

function division(x, y) {
  if (y === 0) throw new Error('parameter y must not be 0');
  return x / y;
}

assert.strictEqual(division(10, 0), 5); // OK
assert.throws(() => { division(10, 0); }, /^Error: parameter y must not be 0$/); // OK */

//-----------------------------------------------------------------------------------------

function division(x, y) {
  // Queremos que o código retorne um erro com uma mensagem específica
  // caso o parâmetro y seja 0. Por isso lançamos uma exceção se essa condição
  // for verdadeira, o que irá interromper a execução da função.

  if (y === 0) throw new Error('parameter y must not be 0');
  return x / y;
}