const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.set('views', path.join(__dirname, 'gui/views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.use(express.static(path.join(__dirname, 'node_modules/bootstrap-icons/font')));
app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', require('./gui/rotas/login'));
// app.use('/auth', require('./routes/users'));
app.use('/exercicios', require('./gui/rotas/exercicios'));
app.use('/rotinas', require('./gui/rotas/rotinas'));

const PORT = process.env.PORT || 4002;
app.listen(PORT, console.log(`Server started in port ${PORT}`));
