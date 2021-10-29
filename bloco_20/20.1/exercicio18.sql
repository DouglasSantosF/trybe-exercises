/* Escreva uma query que exiba as seguintes informações de cada funcionário:
 nome , sobrenome , tempo que trabalha na empresa (em dias) . */

  SELECT 
  FIRST_NAME AS `Name`,
  LAST_NAME AS Last_Name,
  DATEDIFF(CURRENT_DATE(), HIRE_DATE) AS Time_of_Work
  FROM hr.employees;