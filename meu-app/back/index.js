// backend/index.js
const express = require('express');
const cors = require('cors');

const app = express();

// 1️⃣ Middleware de CORS e JSON
app.use(cors());
app.use(express.json());

// 2️⃣ Banco em memória
let itens = [];

// 3️⃣ Logger simples de todas as requisições
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// 4️⃣ GET /itens
app.get('/itens', (req, res) => {
  console.log('Retornando itens:', itens);
  res.status(200).json(itens);
});

// 5️⃣ POST /itens
app.post('/itens', (req, res) => {
  console.log('Recebeu body:', req.body);
  try {
    const { nome, email, telefone } = req.body;
    if (!nome || !email || !telefone) {
      console.warn('Falha na validação:', req.body);
      return res
        .status(400)
        .json({ error: 'Campos nome, email e telefone são obrigatórios.' });
    }
    const novoItem = { id: Date.now(), nome, email, telefone };
    itens.push(novoItem);
    console.log('Item criado:', novoItem);
    return res.status(201).json(novoItem);
  } catch (err) {
    console.error('Erro interno ao criar item:', err);
    return res.status(500).json({ error: 'Erro interno no servidor.' });
  }
});

// 6️⃣ Error handler genérico (ao final)
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Algo deu errado no servidor.' });
});

// 7️⃣ Inicia o servidor
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🚀 API rodando em http://localhost:${PORT}`);
});
