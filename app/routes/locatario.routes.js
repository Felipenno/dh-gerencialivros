module.exports = app => {

    const locatario = require ('../controllers/locatario.controllers');
    
    var router = require ('express').Router();
    
    router.post('/', locatario.create);
    router.get('/', locatario.findAll);
    router.get('/ativos', locatario.findAllAtivos);
    router.delete('/:id', locatario.delete);

    app.use('/api/locatario', router);

}