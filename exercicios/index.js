const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/exercicios', require('./rotas'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server started in port ${PORT}`));
