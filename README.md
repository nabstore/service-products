# Service Products

Microserviço usado pelo mfe-products do Time Products.

## Para executar pela primeira vez
1. **Execução da API e do banco**:
    ```bash
    make up
    ```
    ou
    ```bash
    docker-compose up
    ```

2. **Executar migrations**:
    ```bash
    make db-migrate
    ```
    ou
    ```bash
    docker exec -it service_products npx sequelize db:migrate
    ```

3. **Inserir seeds**:
    ```bash
    make db-seed
    ```
    ou
    ```bash
    docker exec -it service_products npx sequelize-cli db:seed:all
    ```


## Outros comandos

1. Abrir um terminal interativo:
    ```bash
    make db-shell
    ```

2. Criar um novo modelo:
    ```bash
    make db-model-create NEW_MODEL_NAME=<model_name> NEW_MODEL_ATTRIBUTES=<att1=type,att2=type...>
    ```

3. Dar rollback no banco:
    ```bash
    make db-rollback
    ```

4. Criar um novo seed:
    ```bash
    make db-seed-create NEW_SEED_NAME=<seed_name>
    ```

5. Dar rollback apenas no seed:
    ```bash
    make db-seed-rollback
    ```

6. Atualizar documentação no Swagger:
    ```bash
    make swagger
    ```

