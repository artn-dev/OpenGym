const facade = require('../../controladores/facade');

class TelaExercicios {
    async listarExercicios(req, res) {
        const exercicios = await facade.getExercicios() ;
    
        res.render('exercicios/lista', {
            title: 'OpenGym | Meus exercícios',
            exercicios: exercicios,
        });
    }

    async deletarExercicio(req, res) {
        const exercicioId = req.params.id;
        facade.excluirExercicio(exercicioId);
        res.send({ next_page: '/exercicios' });
    }
}

module.exports = TelaExercicios;
