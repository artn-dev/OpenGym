const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const ControladorRotina = require('./controlador');
const controlador = new ControladorRotina();

app.get('/rotinas/listar', controlador.listarRotinas);
app.delete('/rotinas/excluir/:id', controlador.deletarRotina);
app.post('/rotinas/criar', controlador.cadastrarRotina);

const PORT = process.env.PORT || 4001;
app.listen(PORT, console.log(`Server started in port ${PORT}`));
