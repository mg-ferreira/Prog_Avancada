const express = require ('express');
const router = express.Router();
const Livro = require('../models/livro');

router.post ('', (req, res, next) => {
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

router.get ('', (req, res, next) => {
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

router.get ('/:id', (req, res, next) => {
  Livro.findById(req.params.id).then(lib => {
    if(lib){
      res.status(200).json(lib);
    }
    else {
      res.status(404).json({mensagem: 'Livro não encontrado!'})
    }
  })
})

router.put('/:id', (req, res, next) => {
  const livro = new Livro({
    _id: req.params.id,
    titulo: req.body.titulo,
    autor: req.body.autor,
    paginas: req.body.paginas
  });
  Livro.updateOne({_id: req.params.id}, livro)
  .then((resultado) => {
    console.log(resultado);
    res.status(200).json({mensagem: 'Atualização realizada com sucesso!'})
  })
});

router.delete('/:id', (req, res, next) => {
  Livro.deleteOne({_id: req.params.id})
  .then((resultado) => {
    console.log(resultado);
    res.status(200).json({mensagem: "Livro removido"});
  })
});

module.exports = router;
