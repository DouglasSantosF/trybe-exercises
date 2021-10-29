/* Escreva uma query que exiba a média salarial de cada JOB_ID , ordenando pela média salarial em ordem decrescente. */

  SELECT JOB_ID, AVG(SALARY) AS MÉDIA_SALÁRIAL
  FROM hr.employees
  GROUP BY JOB_ID
  ORDER BY MÉDIA_SALÁRIAL DESC;