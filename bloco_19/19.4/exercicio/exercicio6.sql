/* Exercício 6 : Exclua da tabela Movies o filme "WALL-E". */
  -- removendo da tabela BoxOffice
  DELETE FROM Pixar.BoxOffice
  WHERE movie_id = 11;

  --removendo da tabela Movie
  DELETE FROM Pixar.Movies
  WHERE title = 'WALL-E';