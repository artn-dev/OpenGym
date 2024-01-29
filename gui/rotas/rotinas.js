const express = require('express');
const router = express.Router();

const TelaRotinas = require('../telas/tela-rotinas');
const TelaCadastrarRotina = require('../telas/tela-cadastrar-rotina');

const telaRotinas = new TelaRotinas();
const telaCadastrarRotina = new TelaCadastrarRotina();

router.get('/', telaRotinas.listarRotinas);
router.delete('/excluir-rotina/:id', telaRotinas.deletarRotina);
router.get('/criar-rotina', telaCadastrarRotina.cadastrarRotina);
router.post('/criar-rotina', telaCadastrarRotina.cadastrarRotina);

module.exports = router;
