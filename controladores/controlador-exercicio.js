const CadastroExercicio =  require('../modelos/cadastro-exercicio');


class ControladorExercicio {
    constructor() {
        this.modelo = new CadastroExercicio();
    }

    async cadastrarExercicio(name, group, description, gifPath) {
        return this.modelo.cadastrarExercicio(name, group, description, gifPath);
    }

    async getExercicios() {
        return this.modelo.getExercicios();
    }

    async excluir(id) {
        return this.modelo.excluir(id);
    }
}

module.exports = ControladorExercicio;
