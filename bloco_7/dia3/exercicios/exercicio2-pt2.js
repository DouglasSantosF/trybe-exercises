const assert = require('assert');
const wordLengths = array => {
  let tamanhos =[];
   array.forEach(arr => {
    tamanhos.push(arr.length)});
   return tamanhos; 
}; 

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
 const output = wordLengths(words);
 assert.deepStrictEqual(output, expected);