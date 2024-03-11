const facade = require('../../controladores/facade');

class TelaRotinas {
    async listarRotinas(req, res) {
        const rotinas = await facade.getRotinas();
        let exercicios = {}
    
        res.render('rotinas/lista', {
            title: 'OpenGym | Minhas rotinas',
            rotinas: rotinas,
            exercicios: exercicios
        });
    }

    async deletarRotina(req, res) {
        const rotinaId = req.params.id;
        facade.excluirRotina(rotinaId);
        res.send({ next_page: '/rotinas' });
    }
}

module.exports = TelaRotinas;
