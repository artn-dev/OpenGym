const facade = require('../../controladores/facade');

class TelaCadastrarRotina {
    async cadastrarRotina(req, res) {
        if (req.method === 'POST') {
            const { rotinaNome, exercicios } = req.body;

            // TODO: Validar formulário
            await facade.cadastrarRotina(rotinaNome, exercicios);
    
            res.send({ next_page: '/rotinas' });
            return;
        }
    
        const exercicios = await facade.getExercicios();
    
        res.render('rotinas/cadastro', {
            title: 'OpenGym | Cadastrar rotina',
            exercicios: exercicios, 
        });
    }
}

module.exports = TelaCadastrarRotina;
