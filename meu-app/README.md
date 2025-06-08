# Prática Presencial: Aplicação React + Express

Este repositório contém uma aplicação completa de cadastro e listagem de usuários, desenvolvida em **React** (frontend) e **Express** (backend). O objetivo é demonstrar as funcionalidades essenciais: navegação, formulários, integração com API, CRUD básico e deploy local.

---

## Integrantes

* João Pedro Gurgel Tomaz Farias Fernandes — 2222130008
* Nathan de Oliveira Gonçalves — 2312130056

---

## Estrutura do Projeto

```
Projeto-de-Tec-Web/
├── backend/           # Servidor Express (API REST)
│   ├── index.js       # Rotas GET /itens, POST /itens, DELETE /itens/:id
│   ├── package.json   # Dependências e scripts do backend
│   └── ...
├── mock-api/          # (Opcional) json-server para mockar a API
│   ├── db.json        # Armazena itens temporários
│   ├── package.json   # json-server script
│   └── ...
└── meu-app/           # Frontend React
    ├── .env.local     # Variáveis de ambiente (REACT_APP_API_BASE_URL)
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── context/    # GlobalContext com useReducer e axios
    │   ├── pages/
    │   ├── services/   # api.js com axios
    │   └── ...
    ├── package.json
    └── README.md       # (este arquivo)
```

---

## Tecnologias Utilizadas

* **Frontend**

  * React (Create React App)
  * Context API + useReducer para estado global
  * React Router v6 para navegação
  * Axios para chamadas HTTP
  * CSS modular para estilização e responsividade

* **Backend**

  * Node.js + Express para API REST
  * CORS para permissões de origem
  * Nodemon (dev) para auto-reload

* **Mock-API (opcional)**

  * json-server para simular endpoints sem escrever código

---

## Como Executar

### 1. Rodando o Mock-API (opcional)

Se quiser usar um servidor fake em vez do Express:

```bash
cd Projeto-de-Tec-Web/mock-api
npm install          # instala json-server
npm start            # json-server --watch db.json --port 3001
```

O mock-API ficará disponível em `http://localhost:3001/itens`.

---

### 2. Rodando o Backend Express

```bash
cd Projeto-de-Tec-Web/backend
npm install          # instala dependências (express, cors)
npm run dev          # inicia com nodemon (ou npm start para produção)
```

O servidor Express escutará em `http://localhost:3001` com:

* `GET  /itens`       → retorna a lista de itens
* `POST /itens`       → cria um novo item
* `DELETE /itens/:id` → remove um item pelo ID

---

### 3. Configurar Variáveis de Ambiente no Frontend

No **meu-app/**, crie (ou abra) o arquivo `.env.local` ao lado do `package.json`:

```env
REACT_APP_API_BASE_URL=http://localhost:3001
```

Isso define a URL base que o frontend usará para todas as requisições.

---

### 4. Rodando o Frontend React

```bash
cd Projeto-de-Tec-Web/meu-app
npm install          # instala dependências do React
npm start            # inicia o CRA em modo desenvolvimento
```

Abra `http://localhost:3000` no navegador.

---

## Principais Funcionalidades

1. **Formulário de Cadastro**

   * Campos: **nome**, **email**, **telefone**
   * Validação de campos obrigatórios e formato de email/telefone
   * Envio via `POST /itens` e resposta exibida em tempo real

2. **Listagem de Itens**

   * Busca via `GET /itens`
   * Renderização dinâmica com `.map()`
   * Tratamento de estados: **carregando**, **erro**, **nenhum item**

3. **Estado Global**

   * Context API + useReducer para gerenciar lista de itens e status

4. **Navegação**

   * React Router v6 para alternar entre as páginas de **Cadastro** e **Listagem**

5. **Estilização**

   * CSS modular por componente
   * Responsividade com media queries

---

## Ideias de Melhoria

* Adicionar **edição** de itens (`PUT /itens/:id`).
* Persistir em banco de dados real (MongoDB, PostgreSQL).
* Autenticação (JWT) para proteger rotas.
* Testes automatizados (Jest + Supertest no backend, React Testing Library no front).
* Deploy automático (GitHub Actions) e publicação em Heroku/Netlify.

---

**Boa prática:** mantenha seu Obsidian atualizado com diagramas, fluxos e resoluções de bugs, para servir de referência em projetos futuros! 🚀
