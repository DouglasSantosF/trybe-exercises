// A função myRemove(arr, item) recebe um array arr e retorna uma cópia 
// desse array sem o elemento item caso ele exista no array

const myRemove = (arr, item) => {
    const newArray = [];
    arr.map((array) => {
      if(array !== item)
      newArray.push(array);
    });
    return newArray;
};

 console.log(myRemove([1,2,3,4],3));

module.exports = myRemove;