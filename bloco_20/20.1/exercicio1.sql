/* Escreva uma query que exiba o maior salário da tabela. */

  SELECT SALARY AS maior_salario
  FROM hr.employees
  ORDER BY maior_salario DESC
  LIMIT 1;

  -- OU

  SELECT MAX(SALARY) AS maior_salario
  FROM hr.employees;