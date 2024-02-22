const express = require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      const destinationPath = path.resolve(__dirname, '../../uploads/exercicios_gifs/');
      cb(null, destinationPath);
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });
  
const upload = multer({ storage: storage });

const ControladorExercicio = require('./controlador');
const controlador = new ControladorExercicio();

router.get('/', controlador.listarExercicios);
router.delete('/excluir-exercicio/:id', controlador.deletarExercicio);
router.post('/criar-exercicio', upload.single('files'), controlador.cadastrarExercicio);

module.exports = router;
