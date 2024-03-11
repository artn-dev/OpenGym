const axios = require('axios');


class ControladorRotina {
    async cadastrarRotina(nome, exerciciosInfo) {
        console.log('\n\n\n aaa \n\n\n')
        const res = await axios.post('http://rotinas:4001/criar/', {
            rotinaNome: nome,
            exercicios: exerciciosInfo,
        });
        console.log('\n\n\n bbb \n\n\n')
        return res.data;
    }

    async getRotinas() {
        const res = await axios.get('http://rotinas:4001/listar/');
        return res.data;
    }

    async excluir(id) {
        const url = 'http://rotinas:4001/excluir/' + id;
        const res = await axios.delete(url);
        console.log(res.data)
        return res.data;
    }
}

module.exports = ControladorRotina;
