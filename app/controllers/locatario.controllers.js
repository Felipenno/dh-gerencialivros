const db = require('../models/index');

Locatario = db.locatario;

exports.create = (req, res) => {
    if(!req.body.nome){
        res.status(400).send({
            message: 'Nome não pode ser vazio'
        })
        return;
    }

    const locatario = {
        nome: req.body.nome,
        cpf: req.body.cpf,
        ativo: req.body.ativo ? req.body.ativo : true
    }

    Locatario.create(locatario)
        .then(data => res.send(data))
        .catch (err => {
            res.status(500).send({ message: err.message || "Erro interno ao criar o locatario"
        })
    })
}

exports.findAll = (req, res) => {
    Locatario.findAll()
    .then((data) => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
            err.message || "Erro interno ao buscar os Locatarios"
        });
    });
};

exports.findAllAtivos = (req, res) => {
    Locatario.findAll({ where: { ativo: true } })
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.status(500).send({ message: err.message || "Erro interno!" });
    });
}

exports.delete = (req, res) => {
    const id = req.params.id;

    Locatario.destroy( {
        where: {id : id}
    })
    .then(num => {
        if (num == 1){
            res.send({
                message: "Locatario apagado"
            })
        }else
        {
            res.send({
                message: `Não foi possivel apagar o locatario de id ${id}`
            })
        }
    }).catch(err => {
        res.status(500).send({
            message: `Erro interno ao apagar o locatario de id: ${id}`
        })

    })
}
