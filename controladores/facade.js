const ControladorExercicio = require('./controlador-exercicio');
const ControladorRotina = require('./controlador-rotina');


class Facade {
    constructor() {
        this.ctrlExercicios = new ControladorExercicio();
        this.ctrlRotinas = new ControladorRotina();
    }

    async cadastrarExercicio(name, group, description, gifPath) {
        return this.ctrlExercicios.cadastrarExercicio(name, group, description, gifPath);
    }

    async getExercicios() {
        return this.ctrlExercicios.getExercicios();
    }

    async excluirExercicio(id) {
        return this.ctrlExercicios.excluir(id);
    }

    async cadastrarRotina(nome, exercicios) {
        return this.ctrlRotinas.cadastrarRotina(nome, exercicios);
    }

    async getRotinas() {
        return this.ctrlRotinas.getRotinas();
    }

    async getExerciciosPorRotina(rotinaId) {
        return this.ctrlRotinas.getExerciciosPorRotina(rotinaId);
    }

    async excluirRotina(id) {
        return this.ctrlRotinas.excluir(id);
    }
}


module.exports = new Facade();
