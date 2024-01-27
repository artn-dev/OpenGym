const express = require('express');
const multer = require('multer');
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const { exerciseListView, registerExercise } = require('../controllers/exercises.js');

router.get('/', exerciseListView);
router.get('/criar-exercicio', registerExercise);
router.post('/criar-exercicio', upload.single('arquivo'), registerExercise);

module.exports = router;
