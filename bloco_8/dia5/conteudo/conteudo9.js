const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality = 'Brazil' } = person;
console.log(nationality);