const config = require('../knexfile');
const knex = require('knex')(config.development);


class CadastroExercicio {
    async cadastrarExercicio(name, group, description, gifPath) {
        await knex.insert({
            nome: name,
            grupo_muscular: group,
            descricao:  description,
            caminho_gif: gifPath,
          })
          .into('exercicios');
    }

    async getExercicios() {
        return await knex.select().from('exercicios');
    }
}


module.exports = CadastroExercicio;
