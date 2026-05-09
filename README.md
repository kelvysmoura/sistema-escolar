# sistema-escolar

## Desafios para casa

#### Entregar dia 16/05/2026

1. Criar atalhos no "scripts" do package.json
- `npm run migration:create` -> `npx sequelize-cli migration:generate`
- `npm run migrate` -> `npx sequelize-cli db:migrate`
- `npm run migrate:undo` -> `npx sequelize-cli db:migrate:undo`

2. Criar uma migração de banco de dados para a tabela colaboradores, usando o seguinte SQL como base:
```sql
CREATE TABLE IF NOT EXISTS colaboradores (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    escola_id INT NOT NULL,
    name VARCHAR(20) NOT NULL,
    surname VARCHAR(20) NOT NULL,
    email VARCHAR(50) NOT NULL,
    document VARCHAR(50) NOT NULL,
    document_type VARCHAR(10) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (escola_id) REFERENCES escolas (id)
);
```