/* index2.js */
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.post('/recipes', function (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully!'});
});

app.post('/drinks', (req, res) => {

  const novoDrink = {id: 7, name: 'coquinha', price: 5.0};
  drinks.push(novoDrink);
  res.status(201).send("Item adicionado com sucesso!!");

});

/* fetch(`http://localhost:3001/recipes/`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    id: 4,
    name: 'Macarrão com Frango',
    price: 30
  })
}); */

app.get('/drinks',(_req, res) => {
  
  const drinksOrder = drinks.sort((a,b) => {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
});

  res.json(drinksOrder);
});

app.get('/drinks/search', (req, res) => {

  const { nome } = req.query;
  drink = drinks.filter((d) => d.name.toUpperCase().includes(nome.toUpperCase()));

  if(!drink) return res.status(401).json({ message: 'nome not found!' });

  res.status(200).json(drink);

})

// pesquisa pelo nome e preço
app.get('/recipes/search', function (req, res) {
  const { name, maxPrice, minPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.toUpperCase().includes(name.toUpperCase()) && r.price >= parseInt(minPrice) && r.price < parseInt(maxPrice));
  res.status(200).json(filteredRecipes);
})


// filtra pelo ID
app.get('/drinks/:id', (req, res) => {

  const { id } = req.params;
  drink = drinks.find((d) => d.id === parseInt(id));

  if(!drink) return res.status(404).json({ message: 'Drink not found!'});
  
  res.status(200).json(drink);

});


app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

app.get('/recipes', function (req, res) {

  const recipesOrder = recipes.sort((a,b) => {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
});

  res.json(recipesOrder);
});



app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});