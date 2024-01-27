const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.use(express.static(path.join(__dirname, 'node_modules/bootstrap-icons/font')));
app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/users'));
app.use('/exercicios', require('./routes/exercises'));
app.use('/rotinas', require('./routes/routines'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server started in port ${PORT}`));
