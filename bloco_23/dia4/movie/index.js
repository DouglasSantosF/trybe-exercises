const express = require('express');
const MovieController = require('./controllers/movieController');

const app = express();

app.use(express.json());

const PORT = 3001;


app.post('/movies', MovieController.create);




app.listen(PORT, () => console.log(`Escutando a porta ${PORT}!`));