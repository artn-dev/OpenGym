const config = require('../knexfile');
const knex = require('knex')(config.development);


class CadastroRotina {
    async cadastrarRotina(nome, exerciciosInfo) {
        const novosIds = await knex.insert({ nome: nome }).into('rotinas');
        const rotinaId = novosIds[0];

        for (let i = 0; i < exerciciosInfo.length; i++) {
            const { id, series } = exerciciosInfo[i];
            const repeticoes = 0;

            await knex.insert({
                rotina_id: rotinaId,
                exercicio_id: id,
                series: series,
                repeticoes: repeticoes,
              })
              .into('rotinas_exercicios');
            }
    }

    async getRotinas() {
        return await knex.select().from('rotinas');
    }

    async getExerciciosPorRotina(rotinaId) {
        return await knex.select('exercicio_id  as id', 'exercicios.nome', 'series', 'repeticoes')
                        .from('rotinas_exercicios')
                        .join('exercicios', 'rotinas_exercicios.exercicio_id', 'exercicios.id')
                        .where({ rotina_id: rotinaId })
    }
}


module.exports = CadastroRotina;
