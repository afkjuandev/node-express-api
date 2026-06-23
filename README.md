# Node Express API

API REST construída com Node.js, Express 5 e TypeScript, seguindo uma arquitetura em camadas escalável.

## Tecnologias

- **Node.js** + **TypeScript**
- **Express 5**
- **Zod** — validação de dados
- **Morgan** — logs de requisições
- **Dotenv** — variáveis de ambiente
- **Vitest** + **Supertest** — testes
- **ESLint** + **Prettier** — qualidade de código

## Estrutura

```
src/
├── app.ts
├── server.ts
├── config/        # Variáveis de ambiente
├── controllers/   # Recebe a requisição e devolve a resposta
├── services/      # Regras de negócio
├── routes/        # Definição das rotas
├── middlewares/   # Tratamento de erros e validação
├── validators/    # Schemas Zod
├── types/         # Tipagens compartilhadas
├── utils/         # Funções auxiliares
└── tests/         # Testes automatizados
```

## Como rodar

**Pré-requisitos:** Node.js 18+

```bash
# Instalar dependências
npm install

# Copiar variáveis de ambiente
cp .env.example .env

# Rodar em desenvolvimento
npm run dev
```

## Scripts

| Comando | Descrição |
|---|---|
| `npm run dev` | Sobe o servidor com hot reload |
| `npm run build` | Compila o TypeScript |
| `npm start` | Roda a versão compilada |
| `npm test` | Roda os testes |
| `npm run lint` | Verifica o código com ESLint |
| `npm run format` | Formata o código com Prettier |

## Endpoints

### Usuários

| Método | Rota | Descrição |
|---|---|---|
| GET | `/users` | Lista todos os usuários |
| GET | `/users/:id` | Busca usuário por ID |
| POST | `/users` | Cria um novo usuário |

### POST /users — body esperado

```json
{
  "name": "João Silva",
  "email": "joao@email.com"
}
```

### Formato de resposta

```json
{
  "success": true,
  "data": { ... }
}
```

Em caso de erro:

```json
{
  "success": false,
  "message": "Descrição do erro",
  "errors": ["campo: mensagem"]
}
```

## Variáveis de ambiente

| Variável | Padrão | Descrição |
|---|---|---|
| `PORT` | `3000` | Porta do servidor |
| `NODE_ENV` | `development` | Ambiente de execução |
