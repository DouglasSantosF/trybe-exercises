/* Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN ,
 que retornem os títulos dos filmes que possuem avaliação maior que 7.5. */

  -- INNER JOIN
  SELECT t1.title
  FROM Pixar.Movies AS t1
  INNER JOIN Pixar.BoxOffice AS t2
  ON t1.id = t2.movie_id
  WHERE t2.rating > 7.5; 

-- SUBQUERY
  SELECT title FROM Pixar.Movies
  WHERE
  id IN (SELECT movie_id FROM Pixar.BoxOffice 
  WHERE rating > 7.5
  );