/* Utilizando as funções de agregação AVG , MIN , MAX , SUM e COUNT */

--Monte um query que exiba:
--A média de duração dos filmes e dê o nome da coluna de 'Média de Duração';
  SELECT AVG(length) AS 'Média de Duração'  FROM sakila.film;
  --'115.2720'

--A duração mínima dos filmes como 'Duração Mínima';
   SELECT MIN(length) AS 'Duração Mínima'  FROM sakila.film;
  --46

--A duração máxima dos filmes como 'Duração Máxima';
  SELECT MAX(length) AS 'Duração Máxima'  FROM sakila.film;
  --185

--A soma de todas as durações como 'Tempo de Exibição Total';
  SELECT SUM(length) AS 'Tempo de Exibição Total'  FROM sakila.film;
  --115272

--E finalmente, a quantidade total de filmes cadastrados na tabela sakila.film como 'Filmes Registrados'.
  SELECT COUNT(film_id) AS 'Filmes Registrados'  FROM sakila.film;
  --1000