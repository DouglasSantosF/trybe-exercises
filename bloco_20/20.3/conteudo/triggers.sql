/* Crie um TRIGGER que, a cada nova inserção feita na tabela carros ,
   defina o valor da coluna data_atualizacao para o momento do ocorrido,
   acao para 'INSERÇÃO' e a coluna disponivel_em_estoque para 1 . */
    USE betrybe_automoveis;

    DELIMITER $$
    CREATE TRIGGER trigger_carros_insert
      BEFORE INSERT ON carros
        FOR EACH ROW
    BEGIN
      SET NEW.data_atualizacao = NOW(),
        NEW.acao = 'INSERÇÃO',
            NEW.disponivel_em_estoquei = 1;
    END $$

    DELIMITER ;    


/* Crie um TRIGGER que, a cada atualização feita na tabela carros ,
 defina o valor da coluna data_atualizacao para o momento do ocorrido e a acao para 'ATUALIZAÇÃO' . */



/* Crie um TRIGGER que, a cada exclusão feita na tabela carros ,
 envie para a tabela log_operacoes as informações do tipo_operacao como 'EXCLUSÃO' e a data_ocorrido como o momento da operação. */