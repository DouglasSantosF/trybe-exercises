/* Escreva uma query que exiba os nomes dos funcionários em letra maiúscula. */

  SELECT
  UCASE(CONCAT(FIRST_NAME,' ', LAST_NAME)) AS Name_Complete_UP
  FROM hr.employees;

  -- OR

  SELECT
  UCASE(FIRST_NAME) AS Name
  FROM hr.employees;