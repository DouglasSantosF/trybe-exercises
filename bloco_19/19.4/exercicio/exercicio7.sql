/* Exclua da tabela Movies todos os filmes dirigidos por "Andrew Staton". */
  -- descobrindo os filmes que são dirigidos pelo diretor
  SELECT id FROM Pixar.Movies
  WHERE director = 'Andrew Staton';

  -- deletando os filmes do diretor da tabela BoxOffice
  DELETE FROM Pixar.BoxOffice
  WHERE movie_id IN (2,9);

  -- removendo os filmes da tabela Movie
  DELETE FROM Pixar.Movies
  WHERE director = 'Andrew Staton';
