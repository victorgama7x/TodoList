# 📝 Todo List API

Uma API RESTful simples para gerenciar uma lista de tarefas (todo list), construída com **Express**, **TypeScript**, **Prisma ORM** e **SQLite**.

## 📦 Tecnologias

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma ORM](https://www.prisma.io/)
- [SQLite](https://www.sqlite.org/)

## 🚀 Funcionalidades

- ✅ Criar tarefa
- 📄 Listar tarefas
- ✏️ Atualizar tarefa
- 🗑️ Deletar tarefa
- ☑️ Marcar tarefa como concluída

## 🛠️ Instalação e uso

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/victorgama7x/TodoList
   cd TodoList
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   ```

3. **Configure o Prisma**:

   - Crie o arquivo `.env` com o conteúdo:

     ```env
     DATABASE_URL="file:./dev.db"
     ```

   - Gere o cliente Prisma e o banco:

     ```bash
     npx prisma generate
     npx prisma migrate dev --name init
     ```

4. **Inicie o servidor**:

   ```bash
   npm run dev
   ```

   O servidor estará rodando em `http://localhost:3000`

## 📬 Rotas da API

| Método | Rota            | Descrição                       |
| ------ | --------------- | ------------------------------- |
| POST   | `/create`       | Cria uma nova tarefa            |
| GET    | `/`             | Lista todas as tarefas          |
| PUT    | `/:id/conclude` | Marca uma tarefa como concluída |
| PUT    | `/:id`          | Atualiza uma tarefa             |
| DELETE | `/:id`          | Deleta uma tarefa               |

## 📋 Exemplo de JSON para criação de tarefa

```json
{
  "name": "Estudar Node.js",
  "description": "Ler a documentação oficial",
  "priority": 2
}
```

## 📚 Estrutura de Pastas

```
.
├── controllers/
│   └── TodoListController.ts
├── models/
│   └── TodoList.ts
├── routes/
│   └── TodoListRouter.ts
├── App.ts
├── server.ts
├── prisma/
│   ├── schema.prisma
│   └── migrations/
```

## 🧪 Testando a API

Você pode testar a API usando ferramentas como:

- [Insomnia](https://insomnia.rest/)
- [Postman](https://www.postman.com/)
- [REST Client (VSCode Extension)](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

## 🔌 Como Usar as Rotas da API

### 1. Criar Tarefa

**POST** `/create`

```bash
curl -X POST http://localhost:3000/create \
-H "Content-Type: application/json" \
-d '{
  "name": "Estudar Node.js",
  "description": "Estudar a base da documentação",
  "priority": 2
}'
```

---

### 2. Listar Todas as Tarefas

**GET** `/`

```bash
curl http://localhost:3000/
```

---

### 3. Concluir Tarefa

**PUT** `/:id/conclude`

```bash
curl -X PUT http://localhost:3000/1/conclude
```

---

### 4. Atualizar Tarefa

**PUT** `/:id`

```bash
curl -X PUT http://localhost:3000/1 \
-H "Content-Type: application/json" \
-d '{
  "name": "Estudar TypeScript",
  "description": "Capítulo de tipos básicos",
  "priority": 3
}'
```

---

### 5. Deletar Tarefa

**DELETE** `/:id`

```bash
curl -X DELETE http://localhost:3000/1
```

---

### 📝 Observações

- A listagem ordena as tarefas por:
  1. `maded` (não feitas primeiro),
  2. `priority` (prioridade mais alta primeiro),
  3. `name` (ordem alfabética).
- O campo `maded` indica se a tarefa foi concluída (`true`) ou não (`false`).

## 🧑‍💻 Autor

Desenvolvido por [Victor Gama](https://github.com/victorGama7x)

---
