const assert = require('assert');
const sumAllNumbers = array =>{
  let cont = 0;
  array.forEach(arr => cont += arr);
  return cont;
};

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);