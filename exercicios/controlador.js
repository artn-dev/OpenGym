const { CadastrarExercicioCircuitBreaker,
        GetExercicioCircuitBreaker,
        ExcluirExercicioCircuitBreaker,
        GetExercicioInfoBatchCircuitBreaker } =  require('./circuit-breaker');


class ControladorExercicio {
    async cadastrarExercicio(req, res) {
        const { exercicioNome, grupoTreinado, exercicioDescricao } = req.body;
        const caminhoGif = req.file ? req.file.path : null;

        const cadastro = new CadastrarExercicioCircuitBreaker();
        await cadastro.cadastrarExercicio(exercicioNome, grupoTreinado, exercicioDescricao, caminhoGif);

        res.status(201).send();
    }

    async listarExercicios(req, res) {
        const lista = new GetExercicioCircuitBreaker();
        const exercicios = await lista.getExercicios();

        res.status(200).send(exercicios);
    }

    async deletarExercicio(req, res) {
        const exercicioId = req.params.id;

        const excluir = new ExcluirExercicioCircuitBreaker();
        await excluir.excluirExercicio(exercicioId);

        res.status(204).send();
    }

    async getInfoBatch(req, res) {
        const exerciciosIds = req.query.exercicios;

        const info = new GetExercicioInfoBatchCircuitBreaker();
        const exeInfo = await info.getInfoBatch(exerciciosIds);

        res.status(200).send(exeInfo);
    }
}

module.exports = ControladorExercicio;
