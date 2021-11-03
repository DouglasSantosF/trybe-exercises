/* Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN ,
 que retornem as avaliações dos filmes lançados depois de 2009. */

-- INNER JOIN
  SELECT t2.rating
  FROM Pixar.Movies AS t1
  INNER JOIN Pixar.BoxOffice AS t2
  ON t1.id = t2.movie_id
  WHERE t1.`year` > 2009; 

-- SUBQUERY
  SELECT rating FROM Pixar.BoxOffice
  WHERE
  movie_id IN (SELECT id FROM Pixar.Movies 
  WHERE `year` > 2009
  );