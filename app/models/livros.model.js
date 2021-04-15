module.exports = (sequelize, Sequelize) => {
    const Livros = sequelize.define('livros', {
        nome: {
            type: Sequelize.STRING
        },
        autor: {
            type: Sequelize.STRING
        },
        sinopse: {
            type: Sequelize.STRING
        },
        disponivel: {
            type: Sequelize.BOOLEAN
        },
        dataLancamento: {
            type: Sequelize.DATE
        },
        dataAluguel: {
            type: Sequelize.DATE
        }

    });

    return Livros;
}