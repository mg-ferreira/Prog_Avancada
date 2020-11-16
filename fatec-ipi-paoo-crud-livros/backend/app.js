const express = require ('express');
const app = express();
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');
const livroRoutes = require('./rotas/livros');

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
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');

  next();
});

app.use('/api/livros', livroRoutes);

module.exports = app;
