const express = require('express');
const router = express.Router();

const { loginView, peformLogin, registerView } = require('../controllers/users');

router.get('/login', loginView);
router.post('/login', peformLogin);
router.get('/cadastro', registerView);

module.exports = router;
