const facade = require('../../controladores/facade');

class TelaRotinas {
    async listarRotinas(req, res) {
        const rotinas = await facade.getRotinas();
        let exercicios = {}

        for (let i = 0; i < rotinas.length; i++) {
            let rotina = rotinas[i];
            exercicios[rotina.id] = await facade.getExerciciosPorRotina(rotina.id);
        }
    
        res.render('rotinas/lista', {
            title: 'OpenGym | Minhas rotinas',
            rotinas: rotinas,
            exercicios: exercicios
        });
    }

    async deletarRotina(req, res) {
        const rotinaId = req.params.id;
    
        // TODO: Excluir rotina da base de dados
    
        res.send({ next_page: '/rotinas' });
    }
}

module.exports = TelaRotinas;
