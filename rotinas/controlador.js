const { CadastrarRotinaCircuitBreaker,
        GetRotinaCircuitBreaker,
        ExcluirRotinaCircuitBreaker } =  require('./circuit-breaker');


class ControladorRotina {
    async cadastrarRotina(req, res) {
        const { rotinaNome, exercicios } = req.body;

        const cadastro = new CadastrarRotinaCircuitBreaker();
        await cadastro.cadastrarRotina(rotinaNome, exercicios);

        res.status(201).send();
    }

    async listarRotinas(req, res) {
        const lista = new GetRotinaCircuitBreaker();
        const rotinas = await lista.getRotinas();

        res.status(200).send(rotinas);
    }

    async deletarRotina(req, res) {
        const rotinaId = req.params.id;

        console.log('Excluir rotina id ', rotinaId)
        const excluir = new ExcluirRotinaCircuitBreaker();
        await excluir.excluirRotina(rotinaId);

        res.status(204).send();
    }
}

module.exports = ControladorRotina;
