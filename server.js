const express = require("express");
const cors = require("cors");
const sequelize = require('./config/database');
const Produto = require('./models/Produto');

const app = express();
app.use(cors());
const PORT = 5000;

// Middleware para interpretar JSON
app.use(express.json());

// Sincroniza o modelo com o banco de dados e cria as tabelas, se não existirem
sequelize.sync()
  .then(() => {
    console.log('Banco de dados sincronizado');
  })
  .catch(err => {
    console.error('Erro ao sincronizar o banco de dados:', err);
  });

// Rota para obter todos os produtos
app.get('/produtos', async (req, res) => {
  try {
    const produtos = await Produto.findAll(); // Busca todos os produtos
    res.json(produtos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Rota para adicionar um novo produto
app.post('/produtos', async (req, res) => {
  try {
    const novoProduto = await Produto.create(req.body); // Cria um novo produto no banco
    res.status(201).json(novoProduto);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Rota para atualizar um produto existente
app.put('/produtos/:id', async (req, res) => {
  try {
    const produto = await Produto.findByPk(req.params.id);
    if (produto) {
      await produto.update(req.body); // Atualiza os dados do produto
      res.json(produto);
    } else {
      res.status(404).json({ message: 'Produto não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Rota para deletar um produto
app.delete('/produtos/:id', async (req, res) => {
  try {
    const produto = await Produto.findByPk(req.params.id);
    if (produto) {
      await produto.destroy(); // Remove o produto do banco de dados
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Produto não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Rota para obter um produto específico por ID
app.get('/produtos/:id', async (req, res) => {
  try {
    const produto = await Produto.findByPk(req.params.id); // Busca o produto pelo ID
    if (produto) {
      res.json(produto); // Retorna o produto encontrado
    } else {
      res.status(404).json({ message: 'Produto não encontrado' }); // Retorna erro se não encontrar o produto
    }
  } catch (err) {
    res.status(500).json({ message: err.message }); // Trata erros internos
  }
});


// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
