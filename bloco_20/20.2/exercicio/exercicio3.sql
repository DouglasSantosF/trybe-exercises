/* Utilizando o INNER JOIN , faça uma busca que retorne os filmes
 e sua avaliação ( rating ) em ordem decrescente. */

  SELECT t1.title, t2.rating 
  FROM Pixar.Movies AS t1
  INNER JOIN Pixar.BoxOffice AS t2
  ON t1.id = t2.movie_id
  ORDER BY t2.rating DESC; 