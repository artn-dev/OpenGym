const { CadastrarExercicioCircuitBreaker, GetExercicioCircuitBreaker, ExcluirExercicioCircuitBreaker } =  require('circuit-breaker');


class ControladorExercicio {
    constructor() {
        this.cadastro = new CadastrarExercicioCircuitBreaker();
        this.lista = new GetExercicioCircuitBreaker();
        this.excluir = new ExcluirExercicioCircuitBreaker();
    }

    async cadastrarExercicio(req, res) {
        const { exercicioNome, grupoTreinado, exercicioDescricao } = req.body;
        const caminhoGif = req.file ? req.file.path : null;

        await this.cadastro.cadastrarExercicio(exercicioNome, grupoTreinado, exercicioDescricao, caminhoGif);

        res.status(201).send();
    }

    async listarExercicios(req, res) {
        const exercicios = await this.lista.getExercicios();
        res.status(200).send(exercicios);
    }

    async deletarExercicio(req, res) {
        const exercicioId = req.params.id;
        await this.excluir.excluirExercicio(id);
        res.status(204).send();
    }
}

module.exports = ControladorExercicio;
