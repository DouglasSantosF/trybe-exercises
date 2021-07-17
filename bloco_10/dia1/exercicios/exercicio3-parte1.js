const myRemoveWithoutCopy = (arr, item) => {
  const newArray = arr;
  arr=[];
  newArray.map((array) => {
    if(array !== item)
    arr.push(array);
  });
  return arr;
};
let a = [1,2,3,4];
myRemoveWithoutCopy(a,2);
console.log(a);
// module.exports = myRemoveWithoutCopy;