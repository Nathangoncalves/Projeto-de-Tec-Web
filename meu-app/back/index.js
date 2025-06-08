const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

let itens = [];

app.get('/itens', (req, res) => {
  console.log('Retornando itens:', itens);
  res.status(200).json(itens);
});

app.post('/itens', (req, res) => {
  console.log('Recebeu body:', req.body);
  try {
    const { nome, email, telefone, cep, logradouro, cidade, estado } = req.body;

    if (!nome || !email || !telefone || !cep) {
      console.warn('Falha na validação:', req.body);
      return res
        .status(400)
        .json({ error: 'Os campos nome, email, telefone e cep são obrigatórios.' });
    }

    const novoItem = {
      id: Date.now(),
      nome, email, telefone,
      cep, logradouro, cidade, estado
    };
    itens.push(novoItem);

    console.log('Item criado:', novoItem);
    return res.status(201).json(novoItem);
  } catch (err) {
    console.error('Erro interno ao criar item:', err);
    return res.status(500).json({ error: 'Erro interno no servidor.' });
  }
});

app.delete('/itens/:id', (req, res) => {
  const id = Number(req.params.id);
  const antes = itens.length;
  itens = itens.filter(item => item.id !== id);
  if (itens.length === antes) {
    return res.status(404).json({ error: 'Item não encontrado.' });
  }
  res.status(204).end();
});

app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Algo deu errado no servidor.' });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🚀 API rodando em http://localhost:${PORT}`);
});
