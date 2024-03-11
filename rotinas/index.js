const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const ControladorRotina = require('./controlador');
const controlador = new ControladorRotina();

app.get('/listar', controlador.listarRotinas);
app.delete('/excluir/:id', controlador.deletarRotina);
app.post('/criar', controlador.cadastrarRotina);

const PORT = process.env.PORT || 4001;
app.listen(PORT, console.log(`Server started in port ${PORT}`));
