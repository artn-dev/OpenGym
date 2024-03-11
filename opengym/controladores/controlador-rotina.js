const CadastroRotina =  require('../modelos/cadastro-rotina');


class ControladorRotina {
    constructor() {
        this.modelo = new CadastroRotina();
    }

    async cadastrarRotina(nome, exerciciosInfo) {
        return this.modelo.cadastrarRotina(nome, exerciciosInfo);
    }

    async getRotinas() {
        return this.modelo.getRotinas();
    }

    async getExerciciosPorRotina(rotinaId) {
        return this.modelo.getExerciciosPorRotina(rotinaId);
    }

    async excluir(id) {
        return this.modelo.excluir(id);
    }
}

module.exports = ControladorRotina;
