const facade = require('../../controladores/facade');

class TelaCadastrarExercicio {
    async cadastrarExercicio(req, res) {
        if (req.method === 'POST') {
            const { exercicioNome, grupoTreinado, exercicioDescricao } = req.body;
            const caminhoGif = req.file ? req.file.path : null;
    
            // TODO: Validar formulário
            await facade.cadastrarExercicio(exercicioNome, grupoTreinado, exercicioDescricao, caminhoGif);
    
            res.redirect('/exercicios');
            return;
        }
    
        //TODO: Coletar grupos musculares pelo modelo
        const gruposMusculares = [
            'Grupo 1',
            'Grupo 2',
            'Grupo 3',
            'Grupo 4',
        ];
    
        res.render('exercicios/cadastro', {
            title: 'OpenGym | Cadastrar exercício',
            gruposMusculares: gruposMusculares, 
        });
    }
}

module.exports = TelaCadastrarExercicio;
