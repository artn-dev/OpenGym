const config = require('./knexfile');
const knex = require('knex')(config.staging);


class CadastroExercicio {
    static async cadastrarExercicio(name, group, description, gifPath) {
        await knex.insert({
            nome: name,
            grupo_muscular: group,
            descricao:  description,
            caminho_gif: gifPath,
          })
          .into('exercicios');
    }

    static async getExercicios() {
        return await knex.select().from('exercicios');
    }

    static async excluir(id) {
        return await knex('exercicios').where('id', id).del();
    }

    static async getInfoBatch(ids) {
        return await knex.select().whereIn('id', ids).from('exercicios');
    }
}


module.exports = CadastroExercicio;
