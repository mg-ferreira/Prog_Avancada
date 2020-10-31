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
  livro.save()
  .then( livroInserido => {
    res.status(201).json({mensagem: 'Livro inserido', id: livroInserido._id
    })
  })
});

app.get ('/api/livros', (req, res, next) => {
  Livro.find().then(documents => {
    console.log(documents)
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

app.delete('/api/livros/:id', (req, res, next) => {
  Livro.deleteOne({_id: req.params.id})
  .then((resultado) => {
    console.log(resultado);
    res.status(200).json({mensagem: "Livro removido"});
  })
});



module.exports = app;
