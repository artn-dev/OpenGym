const express = require('express');
const router = express.Router();

const { routineListView, registerRoutine } = require('../controllers/routines.js');

router.get('/', routineListView);
router.get('/criar-rotina', registerRoutine);
router.post('/criar-rotina', registerRoutine);

module.exports = router;
