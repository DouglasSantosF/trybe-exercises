/* Escreva uma query para exibir o número de empresas (fornecedores) que contém a letra F no código. */
  SELECT COUNT(*) FROM PecasFornecedores.Fornecimentos
  WHERE Fornecedor LIKE '%F%';

