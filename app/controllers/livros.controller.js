const db = require('../models/index');

Livros = db.livros;

exports.create = (req, res) => {
    if(!(req.body.nome || req.body.autor || req.body.sinopse)){
        res.status(400).send({
            message: 'Não pode haver dados vazios'
        })
        return;
    }

    const livro = {
        nome: req.body.nome, 
        autor: req.body.autor,
        sinopse: req.body.sinopse,
        status: req.body.status ? req.body.status: 'disponivel',
        dataLancamento: req.body.dataLancamento,
        dataAluguel: req.body.dataAluguel
    }

    Livros.create(livro)
        .then(data => res.send(data))
        .catch (err => {
            res.status(500).send({ message: err.message || "Erro interno ao criar o livro"
        })
    })
}

exports.findAll = (req, res) => {
    Livros.findAll()
    .then((data) => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
            err.message || "Erro interno ao buscar livros"
        });
    });
};

exports.findAllByAutor = (req, res) => {
    const autorFromParams = req.params.autor;

    Livros.findAll({ where: { autor: autorFromParams } })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message || "Erro interno!" });
      });
};

exports.findAllDisponivel = (req, res) => {
    Livros.findAll({ where: { disponivel: false } })
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.status(500).send({ message: err.message || "Erro interno!" });
    });
}

exports.mudarStatus = (req, res) => {
    const id = req.params.id;

    Livros.update(req.body, {
        where: {id : id}
    })
    .then(num => {
        if (num == 1){
            res.send({
                message: "Status do livro atualizado"
            })
        }else
        {
            res.send({
                message: `Não foi possivel atualizar o status do livro de id ${id}`
            })
        }
    }).catch(err => {
        res.status(500).send({
            message: `Erro interno ao atualizar o o status do livro de id: ${id}`
        })

    })
}