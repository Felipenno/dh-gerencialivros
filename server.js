const express = require('express');
const db = require('./app/models');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))

db.sequelize.sync();
require('./app/routes/livros.routes')(app);
require('./app/routes/locatario.routes')(app);

const PORT = process.env.Port || 8080;
app.listen(PORT, () => {
    console.log(`servidor rodando na porta: ${PORT}`);
})