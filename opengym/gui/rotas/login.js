const express = require('express');
const router = express.Router();

const TelaLogin = require('../telas/tela-login');

const telaLogin = new TelaLogin();

router.get('/', telaLogin.index);
router.get('/auth/login', telaLogin.login);
router.post('/auth/login', telaLogin.login);
router.get('/auth/cadastro', telaLogin.cadastrar);

module.exports = router;
