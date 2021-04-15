module.exports = app => {

    const livros = require ('../controllers/livros.controller');
    
    var router = require ('express').Router();
    
    router.post('/', livros.create);
    router.get('/', livros.findAll);
    router.get('/:autor', livros.findAllByAutor);
    router.get('/disponivel/ds', livros.findAllDisponivel);
    router.put('/:id', livros.mudarStatus);

    app.use('/api/livro', router);

}