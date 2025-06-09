# Prática Presencial: Aplicação React + Express com Auto-Preenchimento de Endereço

Este repositório contém uma aplicação full-stack de cadastro e listagem de usuários, desenvolvida em **React** (frontend) e **Express** (backend), com integração de auto-preenchimento de endereço via API do ViaCEP. O objetivo é demonstrar:

- Navegação entre páginas (React Router v6)
- Formulários controlados e validação
- Auto-preenchimento de CEP / logradouro / cidade / estado
- Chamadas HTTP com **axios** e **Context API**
- API REST em **Express** com endpoints CRUD básicos
- Deploy local e versão mock com **json-server**

---

## Integrantes

- João Pedro Gurgel Tomaz Farias Fernandes — 2222130008
- Nathan de Oliveira Gonçalves — 2312130056

---

## Estrutura do Projeto

```
Projeto-de-Tec-Web/
├── backend/           
│   ├── index.js       
│   ├── package.json   
│   └── ...
├── mock-api/          
│   ├── db.json        
│   ├── package.json   
│   └── ...
└── meu-app/           
    ├── .env.local     
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── FormCadastro/     
    │   │   └── ListaItens/       
    │   ├── context/    
    │   ├── pages/      
    │   ├── services/  
    │   └── ...
    ├── package.json
    └── README.md       
```

---

## Tecnologias Utilizadas

**Frontend**
- React (Create React App)
- Context API + useReducer para estado global
- React Router v6 para navegação
- Axios para chamadas HTTP
- CSS modular para estilização e responsividade
- Fetch para chamada pública à API do ViaCEP

**Backend**
- Node.js + Express para API REST
- CORS para permissão de origem cruzada
- Nodemon (dev) para auto-reload

**Mock-API (opcional)**
- json-server para simular endpoints sem código adicional

---

## Como Executar

### 1. Mock-API (opcional)

```bash
cd Projeto-de-Tec-Web/mock-api
npm install
npm start   # json-server --watch db.json --port 3001
```

A API mock estará em `http://localhost:3001/itens`.

---

### 2. Backend Express

```bash
cd Projeto-de-Tec-Web/backend
npm install
npm run dev   # inicia com nodemon
```

O servidor Express estará em `http://localhost:3001` com:
- `GET  /itens`
- `POST /itens`
- `DELETE /itens/:id`

---

### 3. Frontend React

1. Em `meu-app/`, crie `.env.local`:
   ```env
   REACT_APP_API_BASE_URL=http://localhost:3001
   ```
2. Execute:
   ```bash
   cd Projeto-de-Tec-Web/meu-app
   npm install
   npm start
   ```

Abra `http://localhost:3000` no navegador.

---

## Principais Funcionalidades

- **Formulário de Cadastro** com validação de campos
- **Auto-Preenchimento de Endereço**: ao inserir o CEP, busca **ViaCEP** e preenche logradouro, cidade e estado
- **Listagem Dinâmica**: exibe Nome, Email, Telefone, CEP, Logradouro, Cidade e Estado
- **Estado Global**: Context API + useReducer para gerenciar dados e status (carregando/erro)
- **API REST**: endpoints para criar, ler e deletar itens (CRUD)
- **Design Responsivo** em CSS puro

---

## Próximas Melhorias

- Implementar **edição** de itens (`PUT /itens/:id`)
- Persistir em banco de dados (MongoDB, PostgreSQL)
- Autenticação JWT
- Testes automatizados (Jest, React Testing Library, Supertest)
- Configurar CI/CD e deploy (GitHub Actions, Heroku, Netlify)

---
