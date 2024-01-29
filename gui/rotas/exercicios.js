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

const TelaExercicios = require('../telas/tela-exercicios');
const TelaCadastrarExercicio = require('../telas/tela-cadastrar-exercicio');

const telaExercicios = new TelaExercicios();
const telaCadastrarExercicio = new TelaCadastrarExercicio();

router.get('/', telaExercicios.listarExercicios);
router.delete('/excluir-exercicio/:id', telaExercicios.deletarExercicio);
router.get('/criar-exercicio', telaCadastrarExercicio.cadastrarExercicio);
router.post('/criar-exercicio', upload.single('files'), telaCadastrarExercicio.cadastrarExercicio);

module.exports = router;
