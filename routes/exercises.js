const express = require('express');
const multer = require('multer');
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
// const upload = multer({ dest: "uploads/" });

const { exerciseListView, registerExercise, deleteExercise } = require('../controllers/exercises.js');

router.get('/', exerciseListView);
router.get('/criar-exercicio', registerExercise);
router.post('/criar-exercicio', upload.single('files'), registerExercise);
router.delete('/excluir-exercicio/:id', deleteExercise);

module.exports = router;
