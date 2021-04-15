module.exports = {
    host: "localhost",
    username: "root",
    password: '12345',
    database: "Gerencia_livros",
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        timestamps: false,
        underscored: true
    }
};