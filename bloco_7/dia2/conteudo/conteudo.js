const customer = {
  firstName: 'Roberto',
  lastName: 'Faria', // Propriedade adicionada.
  age: 22,
  job: 'Teacher',
  favorityColor: 'blue'
};

customer.lastName = 'Frutuoso';
customer.Children = true;



let creatObject = (objeto,chave,valor) => (objeto = objeto[chave] = valor);



console.log(creatObject(customer,'braço','direito'));
console.log(customer);