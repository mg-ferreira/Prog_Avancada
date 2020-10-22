const express = require ('express');
const app = express();
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');
const Livro = require('./models/livro');

mongoose.connect('mongodb+srv://fatec-ipi:fatec_ipi@cluster0.cmvwh.mongodb.net/fatec_ipi_app-livros?retryWrites=true&w=majority')
.then(() => {
  console.log('Conexão OK')})
.catch(() => {
  console.log("Conexão NOK")
});

app.use (bodyParser.json());

// const livros = [
//   {
//     id: 1,
//     titulo: 'Clean Code',
//     autor: 'Robert C. Martin',
//     paginas: 431
//   },
//   {
//     id: 2,
//     titulo: 'Breves respostas para grandes questões',
//     autor: 'Stephen Hawking',
//     paginas: 256
//   }
// ]

app.use ((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');

  next();
});

app.post ('/api/livros', (req, res, next) => {
  const livro = new Livro({
    id: req.body.id,
    titulo: req.body.titulo,
    autor: req.body.autor,
    paginas: req.body.paginas
  })
  livro.save();
  console.log(livro);
  res.status(201).json({mensagem: 'Livro inserido'})
});

app.get ('/api/livros', (req, res, next) => {
  Livro.find().then(documents => {
    res.status(200).json({
      mensagem: 'Tudo OK',
      livros: documents
    })
  }).catch(documents => {
    res.status(404).json({
      mensagem: 'Falha na Busca',
      livros: []
    })
  })
});

module.exports = app;
