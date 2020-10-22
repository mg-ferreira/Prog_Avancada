const express = require ('express');
const app = express();
const bodyParser = require ('body-parser');

app.use (bodyParser.json());

const livros = [
  {
    id: 1,
    titulo: 'Clean Code',
    autor: 'Robert C. Martin',
    paginas: 431
  },
  {
    id: 2,
    titulo: 'Breves respostas para grandes questões',
    autor: 'Stephen Hawking',
    paginas: 256
  }
]

app.use ((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');

  next();
});

app.post ('/api/livros', (req, res, next) => {
  const livro = req.body;
  console.log(livro);
  res.status(201).json({mensagem: 'Livro inserido'})
});

app.use ('/api/livros', (req, res, next) => {
  res.status(200).json({
    mensagem: 'Tudo OK',
    livros: livros
  });
});

module.exports = app;
