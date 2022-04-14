const express = require('express');
const app = express();

app.use(express.json());

const Authors = require('./models/Author');

const PORT = process.env.PORT || 3000;

app.get('/authors', async (req, res) => {

  const authors = await Authors.getAll();
  return res.status(200).json(authors);

});

app.get('/authors/:id', async(req, res) => {

  const { id } = req.params;
  const authors = await Authors.findById(id);

  if(!authors) return res.status(404).send({ message: "Author Not Found!" });

  return res.status(200).json(authors);
});

app.post('/authors', async (req, res) => {

  const { first_name, middle_name, last_name } = req.body;

  if(!Authors.isValid(first_name, middle_name, last_name)) {
    return res.status(404).json({ message: "invalid data" });
  } 

  await Authors.createAuthor(first_name, middle_name, last_name);
  return res.status(201).json({ message: 'Author create sucessfull'});

});

app.put('/authors/:id', async(req, res) => {
  const {id} = req.params;
  const { first_name, middle_name, last_name } = req.body;
  if(!Authors.isValid(first_name, middle_name, last_name)) {
    return res.status(404).json({ message: "invalid data" });
  } 
  
  const authors = await Authors.update(id,first_name, middle_name, last_name);
  if(authors === false) return res.status(404).json({ message: "Author Not Found!" });

  return res.status(200).json({ message: "Authors update sucessfull" });

})

app.delete('/authors/:id', async(req, res) => {

  const { id } = req.params;
  const authors = await Authors.deleteAuthor(id);
  if(authors === null) return res.status(404).json({ message: "Author Not Found!" });

 res.status(200).json({message: "Author deleted sucessfull"});
})


app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});