const express = require('express');
const router = express.Router();

const { routineListView, registerRoutine, deleteRoutine } = require('../controllers/routines.js');

router.get('/', routineListView);
router.get('/criar-rotina', registerRoutine);
router.post('/criar-rotina', registerRoutine);
router.delete('/excluir-rotina/:id', deleteRoutine);

module.exports = router;
