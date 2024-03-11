const axios = require('axios');


class ControladorExercicio {
    async cadastrarExercicio(name, group, description, gifPath) {
        const res = await axios.post('http://exercicios:4000/criar/', {
            exercicioNome: name,
            grupoTreinado: group,
            exercicioDescricao: description,
            caminhoGif: gifPath
        });
        return res.data;
    }

    async getExercicios() {
        const res = await axios.get('http://exercicios:4000/listar/');
        return res.data;
    }

    async excluir(id) {
        const url = 'http://exercicios:4000/excluir/' + id;
        const res = await axios.delete(url);
        return res.data;
    }
}

module.exports = ControladorExercicio;
