const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const multer = require('multer');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      const destinationPath = path.resolve(__dirname, './uploads/exercicios_gifs/');
      cb(null, destinationPath);
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
  
const upload = multer({ storage: storage });

const ControladorExercicio = require('./controlador');
const controlador = new ControladorExercicio();

app.get('/exercicios/listar', controlador.listarExercicios);
app.delete('/exercicios/excluir/:id', controlador.deletarExercicio);
app.get('/exercicios/batch/', controlador.getInfoBatch);
app.post('/exercicios/criar', upload.single('files'), controlador.cadastrarExercicio);

const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`Server started in port ${PORT}`));
